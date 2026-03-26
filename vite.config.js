import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const execFileAsync = promisify(execFile);

function createBatteryPlugin() {
  const handleBatteryRequest = async (req, res) => {
    if (!req.url?.startsWith("/api/system/battery")) {
      return false;
    }

    try {
      const level = await readSystemBatteryLevel();
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ level }));
    } catch {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ level: null }));
    }

    return true;
  };

  return {
    name: "system-battery-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        handleBatteryRequest(req, res).then((handled) => {
          if (!handled) next();
        });
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        handleBatteryRequest(req, res).then((handled) => {
          if (!handled) next();
        });
      });
    },
  };
}

async function readSystemBatteryLevel() {
  const platform = process.platform;

  if (platform === "win32") {
    const { stdout } = await execFileAsync("powershell.exe", [
      "-NoProfile",
      "-Command",
      "(Get-CimInstance Win32_Battery | Select-Object -First 1 -ExpandProperty EstimatedChargeRemaining)",
    ]);
    return normalizeBatteryLevel(stdout);
  }

  if (platform === "darwin") {
    const { stdout } = await execFileAsync("pmset", ["-g", "batt"]);
    const match = stdout.match(/(\\d+)%/);
    return match ? Number(match[1]) : null;
  }

  if (platform === "linux") {
    try {
      const { stdout } = await execFileAsync("upower", ["-i", "/org/freedesktop/UPower/devices/battery_BAT0"]);
      const match = stdout.match(/percentage:\\s*(\\d+)%/i);
      return match ? Number(match[1]) : null;
    } catch {
      const { stdout } = await execFileAsync("cat", ["/sys/class/power_supply/BAT0/capacity"]);
      return normalizeBatteryLevel(stdout);
    }
  }

  return null;
}

function normalizeBatteryLevel(output) {
  const match = String(output).match(/\\d+/);
  if (!match) return null;

  const level = Number(match[0]);
  if (Number.isNaN(level) || level < 0 || level > 100) {
    return null;
  }

  return level;
}

export default defineConfig({
  plugins: [react(), createBatteryPlugin()],
  server: {
    host: true,
    port: 5173,
  },
});
