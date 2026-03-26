import { useEffect, useMemo, useRef, useState } from "react";
import macosBg from "../assets/macos-bg.jpg";
import macosDarkBg from "../assets/macos-darkbg.png";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import aboutLogo from "../assets/about.png";
import certificateLogo from "../assets/Certificate512_44186.png";
import contactLogo from "../assets/contact.png";
import macFolderLogo from "../assets/mac_folder.webp";
import resumeLogo from "../assets/resume-logo.png";
import resumePdf from "../assets/Rishabh_Kumar_CV.pdf";
import skillsLogo from "../assets/skills.png";
import terminalLogo from "../assets/terminal.jpg";
import csePathshalaCertificate from "../assets/CSE Pathshala_Certificate.png";
import hackerRankCertificate from "../assets/hackerRank.png";
import nptelCloudCertificate from "../assets/nptel_cloud.png";

const profile = {
  name: "Rishabh Kumar",
  role: "Software Developer",
  roles: [
    "Hi, I'm Rishabh Kumar.",
    "A Computer Science Engineer.",
    "A Software Developer.",
    "I create full-stack web applications.",
    "Host of an official Python library.",
    "DataGen CLI",
    "12,000+ downloads worldwide.",
    "From idea to production.",
    "Let's build something impactful together.",
  ],
  email: "rishabh3725@gmail.com",
  github: "https://github.com/Rishabh2728",
  linkedin: "https://linkedin.com/in/kurishabh",
  summary:
    "B.Tech CSE student and software developer focused on full stack development, backend systems, machine learning, and practical product building.",
  location: "Lovely Professional University, Punjab",
};

const projects = [
  {
    id: "macos-portfolio",
    title: "macOS-Portfolio",
    tagline: "A desktop-style portfolio experience inspired by macOS.",
    description:
      "An interactive portfolio website built to recreate the macOS desktop experience in the browser. It features app-like navigation, window management, dock interactions, and a working terminal-inspired interface. The project highlights strong frontend engineering, immersive UI design, and polished user experience execution.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Rishabh2728/macOS-Portfolio",
    category: "Frontend",
    icon: "🖥️",
  },
  {
    id: "datagen-cli",
    title: "datagen-cli",
    tagline: "A Python CLI for realistic synthetic dataset generation.",
    description:
      "A schema-driven command-line tool that generates realistic synthetic datasets for testing and development workflows. It is designed to support machine learning experiments, rapid prototyping, and structured data generation at scale. The project demonstrates practical Python tooling, automation, and developer-focused product design.",
    tech: ["Python", "CLI", "Data Generation"],
    stack: ["Python", "CLI", "Data Generation"],
    github: "https://github.com/Rishabh2728/datagen-cli",
    category: "Python Tool",
    icon: "⚙️",
  },
  {
    id: "creator-connect-frontend",
    title: "Creator-Connect-Frontend",
    tagline: "A modern frontend for creator discovery and engagement.",
    description:
      "A frontend application built for a creator-focused platform with profile-driven experiences and content discovery flows. It emphasizes responsive layouts, modern UI interactions, and clean integration with backend APIs. The project showcases scalable component design and polished frontend implementation for real-world platforms.",
    tech: ["JavaScript", "React", "REST APIs"],
    stack: ["JavaScript", "React", "REST APIs"],
    github: "https://github.com/Rishabh2728/Creator-Connect-Frontend",
    category: "Frontend",
    icon: "🌐",
  },
  {
    id: "creator-content-backend",
    title: "Creator-Content-Backend",
    tagline: "A scalable backend for creator content operations.",
    description:
      "A backend service responsible for managing content workflows, storage logic, and creator interactions through structured APIs. It is designed to support maintainable server-side architecture and efficient request handling. The project reflects strong backend fundamentals in API design, modularity, and service reliability.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    stack: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Rishabh2728/Creator-Content-Backend",
    category: "Backend",
    icon: "🔧",
  },
  {
    id: "user-management-api",
    title: "User-Management-API",
    tagline: "A secure API for authentication and user lifecycle management.",
    description:
      "A production-style backend system focused on authentication, authorization, and complete user account management. It handles secure access flows, protected routes, and structured user operations for modern applications. The project demonstrates practical security-oriented backend development and robust API architecture.",
    tech: ["Node.js", "Express", "MongoDB", "Authentication"],
    stack: ["Node.js", "Express", "MongoDB", "Authentication"],
    github: "https://github.com/Rishabh2728/User-Management-API",
    category: "Backend",
    icon: "🔐",
  },
  {
    id: "fake-twitter-account-detector",
    title: "Fake-Twitter-Account-Detector",
    tagline: "A machine learning project for fake account detection.",
    description:
      "A machine learning system built to identify fake Twitter accounts using engineered behavioral and profile-based features. It applies classification techniques to distinguish suspicious patterns from legitimate user activity. The project highlights applied ML workflow, feature engineering, and model evaluation for real-world detection problems.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    stack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Rishabh2728/Fake-Twitter-Account-Detector",
    category: "Machine Learning",
    icon: "🤖",
  },
  {
    id: "academic-burnout-prediction-model",
    title: "Academic-burnout-prediction-model",
    tagline: "A predictive model for analyzing student burnout patterns.",
    description:
      "A predictive analytics project focused on understanding academic burnout through statistical analysis and machine learning techniques. It examines student-related indicators to uncover meaningful burnout trends and risk factors. The project demonstrates data analysis, model building, and practical application of ML in education-focused problem solving.",
    tech: ["Python", "Pandas", "ML"],
    stack: ["Python", "Pandas", "ML"],
    github: "https://github.com/Rishabh2728/Academic-burnout-prediction-model",
    category: "Machine Learning",
    icon: "📊",
  },
  {
    id: "virtual-event-manager",
    title: "Virtual-event-manager",
    tagline: "A full-stack platform for virtual event coordination.",
    description:
      "A web platform developed to manage virtual events with scheduling, participant interaction, and event organization workflows. It combines user-facing functionality with backend-driven logic to deliver an end-to-end event management experience. The project demonstrates full-stack problem solving and practical feature integration for digital events.",
    tech: ["JavaScript", "Node.js"],
    stack: ["JavaScript", "Node.js"],
    github: "https://github.com/Rishabh2728/Virtual-event-manager",
    category: "Full Stack",
    icon: "🎤",
  },
  {
    id: "youtube-clone",
    title: "YouTube-Clone",
    tagline: "A responsive video platform interface inspired by YouTube.",
    description:
      "A frontend project that recreates the visual structure and interaction patterns of a modern video streaming platform. It focuses on responsive layouts, content presentation, and intuitive navigation design. The project showcases strong UI implementation skills and attention to frontend detail in component-based layouts.",
    tech: ["JavaScript", "HTML", "CSS"],
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Rishabh2728/YouTube-Clone",
    category: "Frontend",
    icon: "🎬",
  },
  {
    id: "cms-backend",
    title: "CMS-BACKEND",
    tagline: "A backend CMS designed for scalable content operations.",
    description:
      "A backend content management system built to support structured content workflows and API-driven integrations. It is designed with scalability and maintainability in mind for handling modern content operations. The project demonstrates backend architecture, clean REST design, and practical service development for content-heavy applications.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    stack: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Rishabh2728/CMS-BACKEND",
    category: "Backend",
    icon: "🗄️",
  },
];

const certificates = [
  {
    id: "cse-pathshala",
    title: "Full Stack Web Development",
    issuer: "CSE Pathshala",
    date: "Aug '25",
    image: csePathshalaCertificate,
    verifyUrl: "https://drive.google.com/file/d/1N5WRNha4yZYUqa9N7Epy6iXKoC9-I5AL/view",
  },
  {
    id: "nptel-cloud",
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr '25",
    image: nptelCloudCertificate,
    verifyUrl: "https://drive.google.com/file/d/1c1YisLCfvuHYHW4djmbHXtTsqHspH6nn/view",
  },
  {
    id: "hackerrank-sql",
    title: "SQL",
    issuer: "HackerRank",
    date: "Mar '24",
    image: hackerRankCertificate,
    verifyUrl: "https://www.hackerrank.com/certificates/9aba4dc031eb",
  },
];

const skillGroups = {
  Languages: ["Java", "Python", "C", "C++", "SQL", "JavaScript"],
  "Frameworks/Tech": ["React", "Node.js", "Express.js", "MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Docker", "Tableau", "Power BI"],
  "Core Concepts": ["DSA", "OOP", "DBMS", "OS", "Networking", "Cloud Computing"],
  "Machine Learning": ["Scikit-learn", "Pandas", "Feature Engineering", "Model Evaluation"],
  "Soft Skills": ["Cross-functional teamwork", "Problem-Solving", "Project Management", "Adaptability"],
};

const weatherLocation = {
  name: "Bhiwadi",
  region: "Rajasthan 301019",
  latitude: 28.2102,
  longitude: 76.8606,
  timezone: "Asia/Kolkata",
};

const weatherCodeMap = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Freezing drizzle",
  57: "Heavy freezing drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  66: "Freezing rain",
  67: "Heavy freezing rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Rain showers",
  81: "Heavy showers",
  82: "Violent showers",
  85: "Snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Storm with hail",
  99: "Heavy storm with hail",
};

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getWeatherLabel(code) {
  return weatherCodeMap[code] || "Weather update";
}

function formatWeatherHour(value) {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    hour12: true,
  }).format(new Date(value));
}

function isPrimaryPointerStart(event) {
  return event.pointerType !== "mouse" || event.button === 0;
}

const appConfig = {
  calendar: { title: "Calendar", icon: "25", iconTileClassName: "bg-gradient-to-br from-rose-400/90 to-red-500/90 text-white dark:from-rose-300/80 dark:to-red-400/80" },
  clock: { title: "Clock", icon: "◴", iconTileClassName: "bg-gradient-to-br from-slate-500/90 to-slate-700/90 text-white dark:from-slate-400/80 dark:to-slate-600/80" },
  battery: { title: "Battery", icon: "⚡", iconTileClassName: "bg-gradient-to-br from-emerald-400/90 to-lime-500/90 text-white dark:from-emerald-300/80 dark:to-lime-400/80" },
  weather: { title: "Weather", icon: "☀", iconTileClassName: "bg-gradient-to-br from-cyan-400/90 to-sky-600/90 text-white dark:from-cyan-300/80 dark:to-sky-500/80" },
  about: { title: "About", icon: "⌂", image: aboutLogo, imageClassName: "scale-[1.62] object-center" },
  projects: { title: "Projects", icon: "P", image: macFolderLogo, transparentTile: true },
  certificates: { title: "Certificates", icon: "▤", image: certificateLogo, transparentTile: true },
  skills: { title: "Skills", icon: "S", iconTileClassName: "bg-gradient-to-br from-sky-400/90 to-blue-600/90 text-white dark:from-sky-300/80 dark:to-blue-500/80" },
  resume: { title: "Resume", icon: "CV", iconTileClassName: "bg-gradient-to-br from-emerald-400/90 to-teal-600/90 text-white dark:from-emerald-300/80 dark:to-teal-500/80" },
  terminal: { title: "Terminal", icon: ">", image: terminalLogo, imageClassName: "scale-[1.1] object-center" },
  contact: { title: "Contact", icon: "✉", image: contactLogo },
  github: { title: "GitHub", icon: "⌘", image: githubLogo, imageClassName: "scale-[1.32] object-center" },
  linkedin: { title: "LinkedIn", icon: "in", image: linkedinLogo },
};

const dockApps = [
  { id: "about", label: "Finder", icon: "⌂", image: aboutLogo, imageClassName: "scale-[1.62] object-center" },
  { id: "projects", label: "Projects", icon: "P", image: macFolderLogo },
  { id: "certificates", label: "Certificates", icon: "▤", image: certificateLogo },
  { id: "skills", label: "Skills", icon: "S" },
  { id: "resume", label: "Resume", icon: "CV" },
  { id: "terminal", label: "Terminal", icon: ">", image: terminalLogo, imageClassName: "scale-[1.1] object-center" },
  { id: "contact", label: "Contact", icon: "✉", image: contactLogo },
  { id: "github", label: "GitHub", icon: "⌘", image: githubLogo, imageClassName: "scale-[1.32] object-center", external: profile.github },
  { id: "linkedin", label: "LinkedIn", icon: "in", image: linkedinLogo, external: profile.linkedin },
];

const desktopShortcuts = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "skills", label: "Skills" },
  { id: "terminal", label: "Terminal" },
];

const defaultDesktopPositions = {
  about: { x: 16, y: 64 },
  projects: { x: 16, y: 164 },
  certificates: { x: 16, y: 264 },
  skills: { x: 16, y: 364 },
  terminal: { x: 16, y: 464 },
};

const defaultWidgetPositions = {
  calendar: { x: 0, y: 0 },
  weather: { x: 0, y: 106 },
};

const defaultWindows = [];

const mobileApps = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "terminal", label: "Terminal" },
  { id: "contact", label: "Contact" },
  { id: "calendar", label: "Calendar" },
  { id: "weather", label: "Weather" },
  { id: "github", label: "GitHub", external: profile.github },
  { id: "linkedin", label: "LinkedIn", external: profile.linkedin },
];

const mobileGridOrder = [
  "about",
  "projects",
  "certificates",
  "skills",
  "resume",
  "terminal",
  "contact",
  "calendar",
  "weather",
  "github",
  "linkedin",
];

function formatClock(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function useTyping(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const word = words[wordIndex];
      if (deleting) {
        charIndex -= 1;
      } else {
        charIndex += 1;
      }

      setText(word.slice(0, charIndex));

      if (!deleting && charIndex === word.length) {
        deleting = true;
        timeout = setTimeout(tick, 1200);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeout = setTimeout(tick, deleting ? 42 : 80);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [words]);

  return text;
}

function CalendarWindow({ displayMonth, currentDate, onChangeMonth }) {
  const monthStart = startOfMonth(displayMonth);
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - monthStart.getDay());

  const days = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    return day;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-[24px] bg-white/55 p-4 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/40 dark:ring-white/10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">Calendar</p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(displayMonth)}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onChangeMonth(-1)} className="rounded-2xl bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100">Prev</button>
          <button onClick={() => onChangeMonth(1)} className="rounded-2xl bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100">Next</button>
        </div>
      </div>
      <div className="rounded-[26px] bg-white/50 p-4 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <div className="mb-3 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const isCurrentMonth = day.getMonth() === displayMonth.getMonth();
            const isToday = sameDay(day, currentDate);
            return (
              <div
                key={day.toISOString()}
                className={`flex aspect-square items-start justify-end rounded-2xl p-2 text-sm font-medium ${
                  isToday
                    ? "bg-sky-500 text-white shadow-md"
                    : isCurrentMonth
                      ? "bg-white/70 text-slate-800 dark:bg-white/10 dark:text-slate-100"
                      : "bg-white/35 text-slate-400 dark:bg-white/5 dark:text-slate-500"
                }`}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WeatherWindow({ weatherData }) {
  if (weatherData.loading) {
    return (
      <div className="rounded-[26px] bg-white/50 p-6 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <p className="text-sm text-slate-600 dark:text-slate-300">Loading Bhiwadi weather...</p>
      </div>
    );
  }

  if (weatherData.error || !weatherData.current) {
    return (
      <div className="rounded-[26px] bg-white/50 p-6 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <p className="text-sm text-slate-600 dark:text-slate-300">Unable to load live weather right now.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[28px] bg-white/50 p-6 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">Weather</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">{weatherLocation.name}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{weatherLocation.region}</p>
            <p className="mt-3 text-5xl font-semibold text-slate-900 dark:text-slate-100">{weatherData.current.temperature}°C</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{getWeatherLabel(weatherData.current.code)}</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            <span className="rounded-2xl bg-white/55 px-4 py-2 dark:bg-white/10">Feels like {weatherData.current.apparentTemperature}°C</span>
            <span className="rounded-2xl bg-white/55 px-4 py-2 dark:bg-white/10">Wind {weatherData.current.windSpeed} km/h</span>
            <span className="rounded-2xl bg-white/55 px-4 py-2 dark:bg-white/10">Rain {weatherData.current.precipitationProbability}%</span>
          </div>
        </div>
      </div>
      <div className="rounded-[26px] bg-white/50 p-5 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hourly Forecast</h3>
          <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Next 24 hours</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {weatherData.hourly.map((hour) => (
            <div key={hour.time} className="rounded-[22px] bg-white/60 px-4 py-4 text-slate-700 shadow-sm ring-1 ring-white/40 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{formatWeatherHour(hour.time)}</p>
              <p className="mt-2 text-2xl font-semibold">{hour.temperature}°</p>
              <p className="mt-2 text-sm">{getWeatherLabel(hour.code)}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{hour.precipitationProbability}% rain</span>
                <span>{hour.windSpeed} km/h</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificatesWindow({
  certificatesLayout,
  setCertificatesLayout,
  certificatesIndex,
  setCertificatesIndex,
}) {
  const activeCertificate = certificates[certificatesIndex] || certificates[0];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-[24px] bg-white/55 p-4 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/40 dark:ring-white/10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">Certificates</p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">Verified Credentials</h2>
        </div>
        <button
          onClick={() => setCertificatesLayout((current) => (current === "slideshow" ? "grid" : "slideshow"))}
          className="rounded-2xl bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100"
        >
          {certificatesLayout === "slideshow" ? "Grid Layout" : "Slideshow Layout"}
        </button>
      </div>

      {certificatesLayout === "slideshow" ? (
        <div className="rounded-[26px] bg-white/50 p-5 shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
          <div className="overflow-hidden rounded-[24px] bg-slate-100/80 p-3 dark:bg-slate-950/50">
            <img
              src={activeCertificate.image}
              alt={activeCertificate.title}
              className="h-[20rem] w-full rounded-[18px] object-contain bg-white"
              draggable="false"
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{activeCertificate.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{activeCertificate.issuer}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{activeCertificate.date}</p>
            </div>
            <a
              href={activeCertificate.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900"
            >
              Verify →
            </a>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() => setCertificatesIndex((current) => (current - 1 + certificates.length) % certificates.length)}
              className="rounded-2xl bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100"
            >
              ← Prev
            </button>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {certificatesIndex + 1} / {certificates.length}
            </span>
            <button
              onClick={() => setCertificatesIndex((current) => (current + 1) % certificates.length)}
              className="rounded-2xl bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100"
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item, index) => (
            <GlassCard key={item.id} title={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-40 w-full rounded-[18px] object-contain bg-white"
                draggable="false"
              />
              <p>{item.issuer}</p>
              <p className="mt-1 text-slate-500">{item.date}</p>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setCertificatesIndex(index);
                    setCertificatesLayout("slideshow");
                  }}
                  className="rounded-2xl bg-white/70 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  Open →
                </button>
                <a href={item.verifyUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-700">
                  Verify →
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}

function ClockWindow({ systemTime }) {
  const digitalTime = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(systemTime);

  return (
    <div className="grid h-full place-items-center">
      <div className="w-full max-w-2xl rounded-[28px] bg-white/50 p-8 text-center shadow-glass ring-1 ring-white/40 backdrop-blur-xl dark:bg-slate-900/35 dark:ring-white/10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">Clock</p>
        <p className="mt-6 text-5xl font-semibold tracking-[0.08em] text-slate-900 dark:text-slate-100 sm:text-7xl">{digitalTime}</p>
      </div>
    </div>
  );
}

function getWindowBody(id, controls) {
  const {
    openWindow,
    calendarMonth,
    setCalendarMonth,
    systemTime,
    weatherData,
    batteryLevel,
    certificatesLayout,
    setCertificatesLayout,
    certificatesIndex,
    setCertificatesIndex,
  } = controls;
  switch (id) {
    case "calendar":
      return (
        <CalendarWindow
          displayMonth={calendarMonth}
          currentDate={systemTime}
          onChangeMonth={(delta) => {
            if (delta === 0) {
              setCalendarMonth(startOfMonth(systemTime));
              return;
            }
            setCalendarMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
          }}
        />
      );
    case "clock":
      return <ClockWindow systemTime={systemTime} />;
    case "weather":
      return <WeatherWindow weatherData={weatherData} />;
    case "about":
      return (
        <div className="space-y-5">
          <div className="rounded-[28px] bg-white/45 p-6 shadow-glass ring-1 ring-white/40 backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">Profile</p>
            <h2 className="mt-2 text-4xl font-semibold text-slate-950">{profile.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-800">{profile.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-800">
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200/80">{profile.location}</span>
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200/80">CGPA: 7.67</span>
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200/80">Open to software roles</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard title="Education">
              <p>B.Tech CSE at Lovely Professional University</p>
              <p className="mt-2 text-slate-600">Aug&apos; 23 - Present</p>
              <p className="mt-2 text-slate-600">Higher Secondary: 71% | Matriculation: 85%</p>
            </GlassCard>
            <GlassCard title="Focus Areas">
              <ul className="space-y-2">
                <li>Full Stack Web Development</li>
                <li>Backend Systems</li>
                <li>Machine Learning Projects</li>
              </ul>
            </GlassCard>
            <GlassCard title="Quick Reach">
              <ul className="space-y-2 break-all">
                <li>rishabh3725@gmail.com</li>
                <li>github.com/Rishabh2728</li>
                <li>linkedin.com/in/kurishabh</li>
              </ul>
            </GlassCard>
            <GlassCard title="Projects">
              <p>Explore full stack, CLI, and machine learning work.</p>
              <button
                onClick={() => openWindow("projects")}
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-2 text-sm font-medium text-slate-800"
              >
                Open Projects →
              </button>
            </GlassCard>
            <GlassCard title="Skills">
              <p>View my technical stack, ML tooling, and core computer science strengths.</p>
              <button
                onClick={() => openWindow("skills")}
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-2 text-sm font-medium text-slate-800"
              >
                Open Skills →
              </button>
            </GlassCard>
          </div>
        </div>
      );
    case "projects":
      return (
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <GlassCard key={project.id} title={project.title}>
              <div className="rounded-[20px] bg-white/82 px-4 py-4 ring-1 ring-slate-200/70 shadow-sm dark:bg-slate-950/55 dark:ring-white/10">
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-900 marker:text-slate-600 dark:text-slate-100 dark:marker:text-slate-300">
                <li>{project.tagline}</li>
                <li className="leading-6 text-slate-900 dark:text-slate-100">{project.description}</li>
                <li className="font-medium text-slate-900 dark:text-slate-100">{project.category}</li>
                <li className="pt-1">
                  <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-800 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10">
                      {item}
                    </span>
                  ))}
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">GitHub</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  GitHub →
                </a>
              </div>
              </div>
            </GlassCard>
          ))}
        </div>
      );
    case "certificates":
      return (
        <CertificatesWindow
          certificatesLayout={certificatesLayout}
          setCertificatesLayout={setCertificatesLayout}
          certificatesIndex={certificatesIndex}
          setCertificatesIndex={setCertificatesIndex}
        />
      );
    case "skills":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(skillGroups).map(([group, items]) => (
            <GlassCard key={group} title={group}>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full bg-white/70 px-3 py-1.5 text-xs text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      );
    case "resume":
      return (
        <div className="rounded-[26px] bg-white p-8 shadow-inner">
          <div className="border-b border-slate-200 pb-6">
            <h2 className="text-3xl font-semibold text-slate-900">Rishabh Kumar</h2>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              <p>LinkedIn: linkedin.com/in/kurishabh</p>
              <p>Email: rishabh3725@gmail.com</p>
              <p>GitHub: github.com/Rishabh2728</p>
              <p>Mobile: +91 9060358005</p>
            </div>
          </div>

          <div className="mt-6 space-y-6 text-sm leading-7 text-slate-700">
            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Skills</h3>
              <div className="mt-3 space-y-2">
                <p><span className="font-semibold text-slate-900">Languages:</span> Java, Python, C, C++, SQL, JavaScript</p>
                <p><span className="font-semibold text-slate-900">Frameworks/Tech:</span> React, Node.js, Express.js, MongoDB, MySQL</p>
                <p><span className="font-semibold text-slate-900">Tools:</span> Git, GitHub, Docker, Tableau, Power BI</p>
                <p><span className="font-semibold text-slate-900">Core Concepts:</span> DSA, OOP, DBMS, OS, Networking, Cloud Computing</p>
                <p><span className="font-semibold text-slate-900">Machine Learning:</span> Scikit-learn, Pandas, Feature Engineering, Model Evaluation</p>
                <p><span className="font-semibold text-slate-900">Soft Skills:</span> Cross-functional teamwork, Problem-Solving, Project Management, Adaptability</p>
              </div>
            </section>

            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Projects</h3>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="font-semibold text-slate-900">Data-Gen CLI - Synthetic Dataset Generator | GitHub | Oct&apos; 25</p>
                  <p>Built an official PyPI.org library solving dataset scarcity challenges faced by approximately ~72% of data scientists during experimentation and prototyping.</p>
                  <p>Added multi-format export (CSV, Excel, JSON), 50+ template options, and real-time customization, boosting data preparation efficiency by 60%.</p>
                  <p><span className="font-semibold text-slate-900">Tech Stack:</span> Python, Typer, Rich, Faker</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Academic Burnout Prediction | GitHub | Jun&apos; 25</p>
                  <p>Collected real-world behavioral, academic, and psychological indicators from students through a self-designed Google Form, enabling genuine modeling of burnout factors.</p>
                  <p>Engineered meaningful features and evaluated multiple ML models, achieving 82% accuracy and producing actionable insights to support early burnout detection and wellness interventions.</p>
                  <p><span className="font-semibold text-slate-900">Tech Stack:</span> Python, Pandas, Scikit-learn, ML</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Fake Account Detector System | GitHub | Apr&apos; 25</p>
                  <p>Built a full-stack AI system that detects fake/bot Twitter accounts using API-driven data collection, keystroke dynamics, watermark patterns, and behavioral analytics, boosting accuracy by 35%.</p>
                  <p>Optimized a Random Forest classifier and automated the feature pipeline, reducing false positives by 20% and improving overall system reliability by 50%.</p>
                  <p><span className="font-semibold text-slate-900">Tech Stack:</span> Python, JavaScript, React, Twitter API, Machine Learning</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Training</h3>
              <div className="mt-3">
                <p className="font-semibold text-slate-900">CSE Pathshala | Link | Jun&apos; 25 - Jul&apos; 25</p>
                <p className="font-medium text-slate-900">Full Stack Web-Development</p>
                <p>Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap, improving UI consistency and page engagement.</p>
                <p>Built and integrated RESTful APIs with Node.js &amp; Express and managed databases using MySQL/MongoDB, enhancing data handling efficiency by 25%.</p>
                <p>Implemented secure user authentication (JWT, bcrypt) and deployed full-stack applications on cloud platforms, ensuring smooth performance and reliability.</p>
              </div>
            </section>

            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Certifications</h3>
              <div className="mt-3 space-y-1">
                <p>Full Stack Web Development | CSE Pathshala | Link | Aug&apos; 25</p>
                <p>Elite Certification | Cloud Computing (NPTEL) | Link | Apr&apos; 25</p>
                <p>SQL | HackerRank | Link | Mar&apos; 24</p>
              </div>
            </section>

            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Achievements</h3>
              <div className="mt-3 space-y-1">
                <p>5 Stars on HackerRank in SQL, Problem Solving and C++ | Link | Nov&apos; 25</p>
                <p>Built and shipped DataGen-CLI, achieving 12,000+ downloads worldwide | Link | Jan&apos; 26</p>
              </div>
            </section>

            <section>
              <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-slate-900">Education</h3>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-slate-900">Lovely Professional University, Phagwara, Punjab</p>
                  <p>B.Tech CSE | CGPA: 7.67 | Aug&apos; 23 - Present</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Navyug Convent School, Najafgarh, New Delhi</p>
                  <p>Higher Secondary | PCM | Percentage: 71% | May&apos; 21 - May&apos; 23</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Vivekanand Sr. Sec. School, Dharuhera, Haryana</p>
                  <p>Matriculation | Percentage: 85% | Mar&apos; 20 - May&apos; 21</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumePdf}
              download="Rishabh_Kumar_CV.pdf"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              <img src={resumeLogo} alt="Resume" className="h-5 w-5 rounded-md object-cover" draggable="false" />
              Download Resume
            </a>
            <button onClick={() => openWindow("contact")} className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Contact Me
            </button>
          </div>
        </div>
      );
    case "contact":
      return (
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard title="Let's Build Something Great">
            <div className="grid gap-3">
              <input className="mac-input" placeholder="Name" />
              <input className="mac-input" placeholder="Email" />
              <input className="mac-input" placeholder="Subject" />
              <textarea className="mac-input min-h-32 resize-none" placeholder="Message" />
              <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">Send Message</button>
            </div>
          </GlassCard>
          <GlassCard title="Quick Reach">
            <div className="space-y-3 text-sm text-slate-700">
              <p>{profile.email}</p>
              <a href={profile.github} target="_blank" rel="noreferrer" className="block rounded-2xl bg-white/60 px-4 py-3">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block rounded-2xl bg-white/60 px-4 py-3">
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </div>
      );
    case "terminal":
      return <TerminalWindow openWindow={openWindow} />;
    default:
      return null;
  }
}

function GlassCard({ title, children }) {
  return (
    <section className="rounded-[26px] bg-white/45 p-5 text-sm text-slate-700 shadow-glass ring-1 ring-white/40 backdrop-blur-xl">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}

function IconContent({ label, icon, image, className = "", imageClassName = "" }) {
  if (image) {
    return (
      <img
        src={image}
        alt={label}
        className={`h-full w-full rounded-[inherit] object-cover ${className} ${imageClassName}`}
        draggable="false"
      />
    );
  }

  return <span className={className}>{icon}</span>;
}

function TerminalWindow({ openWindow }) {
  const [lines, setLines] = useState([
    "Portfolio Terminal v2.0.0",
    "Type 'help' to list available commands.",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const screenRef = useRef(null);

  useEffect(() => {
    screenRef.current?.scrollTo({ top: screenRef.current.scrollHeight });
  }, [lines]);

  const runCommand = (raw) => {
    const command = raw.trim();
    setLines((prev) => [...prev, `rishabh@portfolio ~ % ${command}`]);
    if (!command) {
      return;
    }

    const [base, ...rest] = command.split(" ");
    const value = rest.join(" ").toLowerCase();

    const output = [];
    switch (base.toLowerCase()) {
      case "help":
        output.push("help, about, projects, skills, contact, clear, open [section], github, linkedin");
        break;
      case "about":
        output.push(profile.summary);
        break;
      case "projects":
        output.push(...projects.map((project) => `- ${project.title}`));
        break;
      case "skills":
        output.push(...Object.entries(skillGroups).map(([group, items]) => `${group}: ${items.join(", ")}`));
        break;
      case "contact":
        output.push(`${profile.email} | ${profile.linkedin}`);
        openWindow("contact");
        break;
      case "open":
        if (appConfig[value]) {
          openWindow(value);
          output.push(`Opening ${value}`);
        } else {
          output.push("Unknown section");
        }
        break;
      case "github":
        window.open(profile.github, "_blank", "noreferrer");
        output.push(profile.github);
        break;
      case "linkedin":
        window.open(profile.linkedin, "_blank", "noreferrer");
        output.push(profile.linkedin);
        break;
      case "clear":
        setLines([]);
        return;
      default:
        output.push("Command not found");
    }

    setLines((prev) => [...prev, ...output]);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[22px] bg-[#0b1020]/95 text-slate-100">
      <div className="border-b border-white/10 px-5 py-3 font-mono text-xs text-slate-400">zsh - portfolio terminal</div>
      <div ref={screenRef} className="flex-1 overflow-auto px-5 py-4 font-mono text-[13px] leading-7">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`}>{line}</div>
        ))}
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-3 px-5 pb-5 font-mono text-[13px]">
        <span className="text-sky-300">rishabh@portfolio ~ %</span>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              runCommand(input);
              if (input.trim()) {
                setHistory((prev) => [...prev, input]);
                setHistoryIndex(history.length + 1);
              }
              setInput("");
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              if (history.length) {
                const nextIndex = Math.max(0, historyIndex - 1);
                setHistoryIndex(nextIndex);
                setInput(history[nextIndex] ?? "");
              }
            } else if (event.key === "ArrowDown") {
              event.preventDefault();
              if (history.length) {
                const nextIndex = Math.min(history.length, historyIndex + 1);
                setHistoryIndex(nextIndex);
                setInput(history[nextIndex] ?? "");
              }
            }
          }}
          className="bg-transparent outline-none"
          spellCheck="false"
        />
      </div>
    </div>
  );
}

function AppWindow({
  windowItem,
  isActive,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onRestoreFromMaximized,
  onPersistPosition,
  children,
}) {
  const [position, setPosition] = useState({ x: windowItem.x, y: windowItem.y });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const stopWindowControlEvent = (event, action) => {
    event.stopPropagation();
    action();
  };

  useEffect(() => {
    if (!isDragging && !windowItem.maximized) {
      setPosition({ x: windowItem.x, y: windowItem.y });
    }
  }, [isDragging, windowItem.maximized, windowItem.x, windowItem.y]);

  const releaseWindowDrag = (windowId) => {
    if (dragRef.current?.id !== windowId) return;
    if (dragRef.current.mode === "restore-pending") {
      dragRef.current = null;
      return;
    }
    onPersistPosition(windowId, {
      x: dragRef.current.lastX,
      y: dragRef.current.lastY,
    });
    dragRef.current = null;
    setIsDragging(false);
  };

  return (
    <section
      data-app-window
      className={`pointer-events-auto absolute flex flex-col overflow-hidden border shadow-window ${
        isDragging ? "transition-none" : "transition-[opacity,background-color,border-color,inset,border-radius] duration-300"
      } ${
        isActive ? "opacity-100" : "opacity-80"
      } ${
        windowItem.maximized
          ? "inset-0 rounded-none border-transparent bg-white/28 backdrop-blur-2xl dark:border-transparent dark:bg-slate-950/38"
          : "rounded-[30px] border-transparent bg-white/72 backdrop-blur-2xl dark:border-transparent dark:bg-slate-950/72"
      }`}
      style={
        windowItem.maximized
          ? {
              zIndex: windowItem.z,
              willChange: "transform",
            }
          : {
              left: position.x,
              top: position.y,
              width: windowItem.id === "terminal" ? "min(52rem, calc(100vw - 4rem))" : "min(62rem, calc(100vw - 4rem))",
              height: windowItem.id === "terminal" ? "min(34rem, calc(100vh - 10rem))" : "min(40rem, calc(100vh - 10rem))",
              zIndex: windowItem.z,
            }
      }
      onMouseDown={() => onFocus(windowItem.id)}
    >
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b px-4 py-3 transition-colors duration-300 ${
          windowItem.maximized
            ? "border-white/30 bg-white/18 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/28"
            : "border-slate-200/80 bg-white/85 dark:border-white/10 dark:bg-slate-900/80"
        }`}
        style={{ touchAction: "none" }}
        onPointerDown={(event) => {
          if (window.innerWidth < 768 || !isPrimaryPointerStart(event) || event.target.closest("button")) {
            return;
          }
          onFocus(windowItem.id);

          if (windowItem.maximized) {
            dragRef.current = {
              id: windowItem.id,
              mode: "restore-pending",
              startX: event.clientX,
              startY: event.clientY,
              x: position.x,
              y: position.y,
              lastX: position.x,
              lastY: position.y,
            };
            event.currentTarget.setPointerCapture(event.pointerId);
            return;
          }

          dragRef.current = {
            id: windowItem.id,
            mode: "dragging",
            startX: event.clientX,
            startY: event.clientY,
            x: position.x,
            y: position.y,
            lastX: position.x,
            lastY: position.y,
          };
          setIsDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragRef.current || dragRef.current.id !== windowItem.id) return;

          if (dragRef.current.mode === "restore-pending") {
            const deltaX = event.clientX - dragRef.current.startX;
            const deltaY = event.clientY - dragRef.current.startY;
            if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) {
              return;
            }

            const windowWidth = windowItem.id === "terminal" ? Math.min(window.innerWidth - 64, 832) : Math.min(window.innerWidth - 64, 992);
            const pointerRatio = Math.min(0.85, Math.max(0.15, event.clientX / Math.max(window.innerWidth, 1)));
            const restoredX = Math.min(
              window.innerWidth - windowWidth - 12,
              Math.max(12, event.clientX - windowWidth * pointerRatio),
            );
            const restoredY = 72;

            setPosition({ x: restoredX, y: restoredY });
            onRestoreFromMaximized(windowItem.id, { x: restoredX, y: restoredY });

            dragRef.current = {
              id: windowItem.id,
              mode: "dragging",
              startX: event.clientX,
              startY: event.clientY,
              x: restoredX,
              y: restoredY,
              lastX: restoredX,
              lastY: restoredY,
            };
            setIsDragging(true);
            return;
          }

          if (windowItem.maximized) return;
          const windowWidth = windowItem.id === "terminal" ? Math.min(window.innerWidth - 64, 832) : Math.min(window.innerWidth - 64, 992);
          const nextX = Math.min(
            window.innerWidth - windowWidth - 12,
            Math.max(12, dragRef.current.x + event.clientX - dragRef.current.startX),
          );
          const nextY = dragRef.current.y + event.clientY - dragRef.current.startY;
          dragRef.current.lastX = nextX;
          dragRef.current.lastY = nextY;
          setPosition({ x: nextX, y: nextY });
        }}
        onPointerUp={() => releaseWindowDrag(windowItem.id)}
        onPointerCancel={() => releaseWindowDrag(windowItem.id)}
      >
        <div className="flex items-center gap-2">
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => stopWindowControlEvent(event, () => onClose(windowItem.id))}
            className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#ff5f57] text-[9px] font-black leading-none text-[#4f100c]"
          >
            {"\u2716"}
          </button>
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => stopWindowControlEvent(event, () => onMinimize(windowItem.id))}
            className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#febb2e] text-[9px] font-black leading-none text-[#4e2f00]"
          >
            {"\u2501"}
          </button>
          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => stopWindowControlEvent(event, () => onToggleMaximize(windowItem.id))}
            className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#28c840] text-[8px] font-black leading-none text-[#083f14]"
          >
            {"\uD83D\uDDD6"}
          </button>
        </div>
        <div />
        <div />
      </div>
      <div className="flex-1 overflow-auto p-4 md:p-5">{children}</div>
    </section>
  );
}

function MobileAppWindow({ windowItem, onClose, children }) {
  return (
    <section
      data-app-window
      className="absolute inset-0 z-40 flex flex-col overflow-hidden bg-white/82 backdrop-blur-3xl dark:bg-slate-950/82"
      style={{ zIndex: windowItem.z }}
    >
      <div className="flex items-center justify-between border-b border-slate-200/70 px-4 pb-3 pt-12 dark:border-white/10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
            {appConfig[windowItem.id]?.title || windowItem.id}
          </p>
        </div>
        <button
          onClick={() => onClose(windowItem.id)}
          className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-slate-900"
        >
          Close
        </button>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-8 pt-4">{children}</div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [systemTime, setSystemTime] = useState(() => new Date());
  const [calendarMonth, setCalendarMonth] = useState(() => startOfMonth(new Date()));
  const [certificatesLayout, setCertificatesLayout] = useState("grid");
  const [certificatesIndex, setCertificatesIndex] = useState(0);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true);
  const [weatherData, setWeatherData] = useState({
    loading: true,
    error: "",
    current: null,
    hourly: [],
  });
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [showBatteryPopup, setShowBatteryPopup] = useState(false);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState("");
  const [desktopIconAnimation, setDesktopIconAnimation] = useState("");
  const [draggingDesktopIcon, setDraggingDesktopIcon] = useState("");
  const [desktopPositions, setDesktopPositions] = useState(defaultDesktopPositions);
  const [widgetPositions, setWidgetPositions] = useState(defaultWidgetPositions);
  const [draggingWidgetId, setDraggingWidgetId] = useState("");
  const [windows, setWindows] = useState(() =>
    defaultWindows.map((item, index) => ({
      ...item,
      z: 20 + index,
      maximized: false,
    })),
  );
  const [bounceId, setBounceId] = useState("");
  const typing = useTyping(profile.roles);
  const desktopDragRef = useRef(null);
  const widgetDragRef = useRef(null);
  const batteryPopupTimeoutRef = useRef(null);
  const desktopClickBlockRef = useRef("");
  const widgetClickBlockRef = useRef("");

  const releaseDesktopDrag = (shortcutId) => {
    if (desktopDragRef.current?.moved) {
      desktopClickBlockRef.current = shortcutId;
      setTimeout(() => {
        if (desktopClickBlockRef.current === shortcutId) {
          desktopClickBlockRef.current = "";
        }
      }, 0);
    }
    desktopDragRef.current = null;
    setDraggingDesktopIcon("");
  };

  const releaseWidgetDrag = (widgetId) => {
    if (widgetDragRef.current?.moved) {
      widgetClickBlockRef.current = widgetId;
      setTimeout(() => {
        if (widgetClickBlockRef.current === widgetId) {
          widgetClickBlockRef.current = "";
        }
      }, 0);
    }
    widgetDragRef.current = null;
    setDraggingWidgetId("");
  };

  useEffect(() => {
    const timer = setInterval(() => setSystemTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (batteryPopupTimeoutRef.current) {
        clearTimeout(batteryPopupTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadBatteryLevel = async () => {
      try {
        const response = await fetch("/api/system/battery", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Battery request failed");
        }

        const data = await response.json();
        if (!cancelled) {
          setBatteryLevel(typeof data.level === "number" ? data.level : null);
        }
      } catch {
        if (!cancelled) {
          setBatteryLevel(null);
        }
      }
    };

    loadBatteryLevel();
    const intervalId = setInterval(loadBatteryLevel, 30000);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadWeather = async () => {
      try {
        const params = new URLSearchParams({
          latitude: String(weatherLocation.latitude),
          longitude: String(weatherLocation.longitude),
          timezone: weatherLocation.timezone,
          current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
          hourly: "temperature_2m,weather_code,wind_speed_10m,precipitation_probability",
          forecast_days: "2",
        });

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const data = await response.json();
        const now = Date.now();
        const hourly = (data.hourly?.time || [])
          .map((time, index) => ({
            time,
            temperature: Math.round(data.hourly.temperature_2m[index]),
            code: data.hourly.weather_code[index],
            windSpeed: Math.round(data.hourly.wind_speed_10m[index]),
            precipitationProbability: Math.round(data.hourly.precipitation_probability[index] ?? 0),
          }))
          .filter((item) => new Date(item.time).getTime() >= now - 60 * 60 * 1000)
          .slice(0, 24);
        const currentRainChance = hourly[0]?.precipitationProbability ?? 0;

        if (!cancelled) {
          setWeatherData({
            loading: false,
            error: "",
            current: {
              temperature: Math.round(data.current.temperature_2m),
              apparentTemperature: Math.round(data.current.apparent_temperature),
              code: data.current.weather_code,
              windSpeed: Math.round(data.current.wind_speed_10m),
              precipitationProbability: currentRainChance,
            },
            hourly,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setWeatherData({
            loading: false,
            error: error instanceof Error ? error.message : "Weather unavailable",
            current: null,
            hourly: [],
          });
        }
      }
    };

    loadWeather();
    const intervalId = setInterval(loadWeather, 15 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  const topZ = useMemo(() => Math.max(30, ...windows.map((item) => item.z)), [windows]);

  const openWindow = (id) => {
    if (id === "certificates") {
      setCertificatesLayout("grid");
      setCertificatesIndex(0);
    }
    setWindows((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) => (item.id === id ? { ...item, z: topZ + 1 } : item));
      }
      return [
        ...current,
        {
          id,
          x: 150 + current.length * 36,
          y: 88 + current.length * 28,
          z: topZ + 1,
          maximized: false,
        },
      ];
    });
  };

  const focusWindow = (id) => {
    setWindows((current) => current.map((item) => (item.id === id ? { ...item, z: topZ + 1 } : item)));
  };

  const closeWindow = (id) => {
    setWindows((current) => current.filter((item) => item.id !== id));
  };

  const minimizeWindow = (id) => {
    closeWindow(id);
  };

  const toggleMaximize = (id) => {
    setWindows((current) =>
      current.map((item) => (item.id === id ? { ...item, maximized: !item.maximized, z: topZ + 1 } : item)),
    );
  };

  const restoreFromMaximized = (id, nextPosition) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              maximized: false,
              z: topZ + 1,
              ...(nextPosition || {}),
            }
          : item,
      ),
    );
  };

  const updateWindowPosition = (id, nextPosition) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              x: nextPosition.x,
              y: nextPosition.y,
            }
          : item,
      ),
    );
  };

  const activeWindowId = useMemo(
    () => [...windows].sort((a, b) => b.z - a.z)[0]?.id,
    [windows],
  );

  const maximizedWindowId = useMemo(
    () => [...windows].sort((a, b) => b.z - a.z).find((item) => item.maximized)?.id ?? "",
    [windows],
  );

  const requestFullscreenMode = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Ignore rejected fullscreen requests and still continue into the site.
    } finally {
      setShowFullscreenPrompt(false);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isTypingTarget) {
        return;
      }

      if (showFullscreenPrompt) {
        if (event.key === "Escape") {
          event.preventDefault();
          setShowFullscreenPrompt(false);
        } else if (event.key === "Enter") {
          event.preventDefault();
          requestFullscreenMode();
        }
        return;
      }

      if (event.key === "Escape") {
        if (showBatteryPopup) {
          event.preventDefault();
          setShowBatteryPopup(false);
          if (batteryPopupTimeoutRef.current) {
            clearTimeout(batteryPopupTimeoutRef.current);
            batteryPopupTimeoutRef.current = null;
          }
          return;
        }

        if (maximizedWindowId) {
          event.preventDefault();
          restoreFromMaximized(maximizedWindowId);
        }
        return;
      }

      if (activeWindowId === "certificates") {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setCertificatesLayout("slideshow");
          setCertificatesIndex((current) => (current + 1) % certificates.length);
          return;
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setCertificatesLayout("slideshow");
          setCertificatesIndex((current) => (current - 1 + certificates.length) % certificates.length);
          return;
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [
    activeWindowId,
    maximizedWindowId,
    requestFullscreenMode,
    showBatteryPopup,
    showFullscreenPrompt,
  ]);

  const handleDockClick = (app) => {
    setBounceId(app.id);
    setTimeout(() => setBounceId(""), 450);

    if (app.external) {
      window.open(app.external, "_blank", "noreferrer");
      return;
    }

    if (app.id === "trash") {
      setWindows([]);
      return;
    }

    openWindow(app.id);
  };

  const handleDesktopIconOpen = (shortcutId) => {
    setDesktopIconAnimation(shortcutId);
    setTimeout(() => setDesktopIconAnimation(""), 260);
    openWindow(shortcutId);
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(systemTime);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(systemTime);

  const isMobile = viewportWidth < 1024;

  const showBatteryStatusPopup = () => {
    setShowBatteryPopup(true);
    if (batteryPopupTimeoutRef.current) {
      clearTimeout(batteryPopupTimeoutRef.current);
    }
    batteryPopupTimeoutRef.current = setTimeout(() => {
      setShowBatteryPopup(false);
      batteryPopupTimeoutRef.current = null;
    }, 3200);
  };

  if (isMobile) {
    const activeMobileWindows = [...windows].sort((a, b) => a.z - b.z);
    const mobileDockApps = mobileApps.filter((app) => ["about", "projects", "terminal", "contact"].includes(app.id));
    const mobileGridGap = 12;
    const mobileGridSidePadding = 16;
    const mobileGridSlotWidth = Math.max(68, (viewportWidth - mobileGridSidePadding * 2 - mobileGridGap * 3) / 4);
    const mobileGridApps = mobileGridOrder
      .map((id) => mobileApps.find((app) => app.id === id))
      .filter(Boolean);
    return (
      <div className={theme === "dark" ? "dark" : ""}>
        <div className="relative h-screen overflow-hidden bg-slate-100 text-ink transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${macosBg})` }}
          />
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${macosDarkBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 dark:from-black/20 dark:to-black/35" />

          <div className="absolute inset-x-0 top-0 z-50 px-4 pt-4">
            <div className="flex items-center justify-between px-1 text-sm font-semibold text-white">
              <span>{new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(systemTime)}</span>
              <div className="flex items-center gap-2 text-xs">
                <span>{isOnline ? "ᯤ" : "Offline"}</span>
                <span>{batteryLevel !== null ? `\u26A1 ${batteryLevel}%` : "\u26A1"}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex h-full flex-col px-4 pb-5 pt-14">
            <div className="mt-5 px-2 text-center text-white">
              <p className="min-h-[3.4em] max-w-full text-lg font-semibold leading-snug text-white/95">
                <span className="typing-inline-caret break-words">{typing.trimEnd()}</span>
              </p>
            </div>

            <div className="mt-7 grid auto-rows-[6.2rem] grid-cols-4 gap-x-3 gap-y-4">
              {mobileGridApps.slice(0, 6).map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    if (app.external) {
                      window.open(app.external, "_blank", "noreferrer");
                      return;
                    }
                    if (app.id === "calendar") {
                      setCalendarMonth(startOfMonth(systemTime));
                    }
                    openWindow(app.id);
                  }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-[20px] text-xl text-white">
                    {appConfig[app.id]?.image ? (
                      <IconContent
                        label={app.label}
                        icon={appConfig[app.id]?.icon}
                        image={appConfig[app.id]?.image}
                        imageClassName={appConfig[app.id]?.imageClassName}
                        className="grid h-full w-full place-items-center"
                      />
                    ) : (
                      <div
                        className={`grid h-full w-full place-items-center rounded-[inherit] font-semibold ${
                          appConfig[app.id]?.iconTileClassName || ""
                        }`}
                      >
                        {appConfig[app.id]?.icon}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-medium leading-4 text-white drop-shadow-sm">{app.label}</span>
                </button>
              ))}

              <div className="col-span-2 col-start-3 row-span-2 row-start-2">
                <div className="flex h-[11.9rem] flex-col rounded-[28px] border border-white/10 bg-black/70 px-4 py-4 shadow-glass backdrop-blur-xl">
                  <div className="mt-3 flex items-start justify-center gap-2 leading-none">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                      {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(systemTime)}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                      {new Intl.DateTimeFormat("en-US", { month: "short" }).format(systemTime)}
                    </span>
                  </div>
                  <div className="grid flex-1 place-items-center overflow-hidden -mt-1">
                    <span className="scale-y-[1.18] text-[5.95rem] font-semibold leading-none text-white">
                      {new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(systemTime)}
                    </span>
                  </div>
                </div>
              </div>

              {mobileGridApps.slice(6).map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    if (app.external) {
                      window.open(app.external, "_blank", "noreferrer");
                      return;
                    }
                    if (app.id === "calendar") {
                      setCalendarMonth(startOfMonth(systemTime));
                    }
                    openWindow(app.id);
                  }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-[20px] text-xl text-white">
                    {appConfig[app.id]?.image ? (
                      <IconContent
                        label={app.label}
                        icon={appConfig[app.id]?.icon}
                        image={appConfig[app.id]?.image}
                        imageClassName={appConfig[app.id]?.imageClassName}
                        className="grid h-full w-full place-items-center"
                      />
                    ) : (
                      <div
                        className={`grid h-full w-full place-items-center rounded-[inherit] font-semibold ${
                          appConfig[app.id]?.iconTileClassName || ""
                        }`}
                      >
                        {appConfig[app.id]?.icon}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-medium leading-4 text-white drop-shadow-sm">{app.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-auto flex justify-center pb-1">
              <div
                className="flex w-full items-end justify-between rounded-[28px] border border-white/25 bg-white/20 px-4 py-3 shadow-dock backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/25"
              >
                {mobileDockApps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => openWindow(app.id)}
                    className="grid place-items-center text-white"
                    style={{ width: mobileGridSlotWidth }}
                  >
                    <div
                      className={`grid h-16 w-16 place-items-center overflow-hidden rounded-[20px] text-white ${
                        appConfig[app.id]?.transparentTile ? "bg-transparent shadow-none" : "bg-transparent shadow-none ring-0 backdrop-blur-none"
                      }`}
                    >
                      {appConfig[app.id]?.image ? (
                        <IconContent
                          label={app.label}
                          icon={appConfig[app.id]?.icon}
                          image={appConfig[app.id]?.image}
                          imageClassName={appConfig[app.id]?.imageClassName}
                          className="grid h-full w-full place-items-center"
                        />
                      ) : (
                        <div
                          className={`grid h-full w-full place-items-center rounded-[inherit] font-semibold ${
                            appConfig[app.id]?.iconTileClassName || ""
                          }`}
                        >
                          {appConfig[app.id]?.icon}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeMobileWindows.map((windowItem) => (
            <MobileAppWindow key={windowItem.id} windowItem={windowItem} onClose={closeWindow}>
              {getWindowBody(windowItem.id, {
                openWindow,
                calendarMonth,
                setCalendarMonth,
                systemTime,
                weatherData,
                batteryLevel,
                certificatesLayout,
                setCertificatesLayout,
                certificatesIndex,
                setCertificatesIndex,
              })}
            </MobileAppWindow>
          ))}

          <div
            className={`pointer-events-none absolute inset-0 z-[44] grid place-items-center transition-opacity duration-700 ${
              showBatteryPopup ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="rounded-[30px] bg-white/35 px-8 py-7 shadow-glass ring-1 ring-white/40 backdrop-blur-2xl dark:bg-slate-950/35 dark:ring-white/10">
              <div className="relative h-24 w-48 rounded-[24px] border-[6px] border-slate-700/80 p-2 dark:border-slate-100/80">
                <div className="h-full rounded-[14px] bg-slate-200/80 dark:bg-slate-800/70">
                  <div
                    className="h-full rounded-[14px] bg-gradient-to-r from-emerald-400 to-lime-400 transition-[width] duration-500"
                    style={{ width: `${Math.max(0, Math.min(100, batteryLevel ?? 0))}%` }}
                  />
                </div>
                <div className="absolute right-[-14px] top-1/2 h-9 w-3 -translate-y-1/2 rounded-r-md bg-slate-700/80 dark:bg-slate-100/80" />
                <div className="absolute inset-0 grid place-items-center text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  {batteryLevel !== null ? `${batteryLevel}%` : "\u26A1"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className="relative h-screen overflow-hidden bg-slate-100 text-ink transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100"
        onMouseDown={(event) => {
          if (!event.target.closest("[data-desktop-icon]") && !event.target.closest("[data-app-window]")) {
            setSelectedDesktopIcon("");
          }
        }}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${macosBg})` }}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${macosDarkBg})` }}
        />
        <div className="absolute inset-0 bg-white/[0.04] transition-colors duration-500 dark:bg-black/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%)]" />

        <div
          className={`absolute inset-0 z-[60] grid place-items-center bg-slate-950/35 px-6 backdrop-blur-md transition-opacity duration-300 ${
            showFullscreenPrompt ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="w-full max-w-md rounded-[32px] border border-white/25 bg-white/30 p-7 text-center shadow-window backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/35">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">Best Experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">Open in Full Screen?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              This portfolio is designed like a desktop workspace. Full screen gives the intended experience.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={requestFullscreenMode}
                className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-slate-900"
              >
                Open Full Screen
              </button>
              <button
                onClick={() => setShowFullscreenPrompt(false)}
                className="rounded-2xl bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-100"
              >
                Continue Anyway
              </button>
            </div>
          </div>
        </div>

        <div className={`pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center px-6 text-center text-white/95 transition-all duration-300 dark:text-slate-100 ${
          maximizedWindowId ? "opacity-0" : "opacity-100"
        }`}>
          <div className="max-w-[20rem] sm:max-w-[34rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 dark:text-slate-300/70">Portfolio Desktop</p>
          <h1 className="mt-2 min-h-[2.6em] max-h-[2.6em] max-w-full overflow-hidden text-2xl font-semibold leading-tight sm:min-h-[2.4em] sm:max-h-[2.4em] sm:text-5xl">
            <span className="typing-inline-caret">{typing.trimEnd()}</span>
          </h1>
          </div>
        </div>

        <div className={`absolute inset-x-3 top-2 z-50 rounded-xl border border-white/20 bg-white/15 px-3 py-1.5 shadow-glass backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/20 ${
          maximizedWindowId ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          <div className="flex items-center justify-between gap-2 text-[11px] text-slate-800 transition-colors duration-500 dark:text-slate-100">
            <div className="flex items-center gap-3">
              <button className="grid h-5 w-5 place-items-center rounded-full bg-white/30 font-semibold transition-colors duration-500 dark:bg-white/10 dark:text-slate-100">R</button>
              <span className="font-semibold">Rishabh Kumar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="group relative">
                <button
                  onClick={() => setWindows([])}
                  className="grid h-6 min-w-6 place-items-center rounded-full bg-white/25 px-2 py-1 font-medium text-slate-800 transition-colors duration-300 hover:bg-white/35 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
                >
                  🞫
                </button>
                <div className="pointer-events-none absolute top-full left-1/2 z-10 flex -translate-x-1/2 pt-1 opacity-0 transition duration-150 group-hover:translate-y-0.5 group-hover:opacity-100">
                  <div className="flex flex-col items-center">
                    <span className="mb-[-4px] h-2 w-2 rotate-45 rounded-[1px] bg-black/85" />
                    <span className="whitespace-nowrap rounded-lg bg-black/85 px-2 py-1 text-[10px] font-medium leading-none text-white shadow-lg">
                      Close All
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <button
                  onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
                  className="rounded-full bg-white/25 px-2 py-1 transition-colors duration-500 dark:bg-white/10 dark:text-slate-100"
                >
                  {theme === "light" ? "Dark" : "Light"}
                </button>
                <div className="pointer-events-none absolute top-full left-1/2 z-10 flex -translate-x-1/2 pt-1 opacity-0 transition duration-150 group-hover:translate-y-0.5 group-hover:opacity-100">
                  <div className="flex flex-col items-center">
                    <span className="mb-[-4px] h-2 w-2 rotate-45 rounded-[1px] bg-black/85" />
                    <span className="whitespace-nowrap rounded-lg bg-black/85 px-2 py-1 text-[10px] font-medium leading-none text-white shadow-lg">
                      Toggle Theme
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative">
              <button
                onClick={showBatteryStatusPopup}
                className="rounded-full bg-white/20 px-2 py-1 transition-colors duration-500 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15"
              >
                {batteryLevel !== null ? `\u26A1\uFE0E ${batteryLevel}%` : "\u26A1\uFE0E"}
              </button>
                <div className="pointer-events-none absolute top-full left-1/2 z-10 flex -translate-x-1/2 pt-1 opacity-0 transition duration-150 group-hover:translate-y-0.5 group-hover:opacity-100">
                  <div className="flex flex-col items-center">
                    <span className="mb-[-4px] h-2 w-2 rotate-45 rounded-[1px] bg-black/85" />
                    <span className="whitespace-nowrap rounded-lg bg-black/85 px-2 py-1 text-[10px] font-medium leading-none text-white shadow-lg">
                      Battery
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setCalendarMonth(startOfMonth(systemTime));
                  openWindow("calendar");
                }}
                className="rounded-full bg-white/20 px-2 py-1 transition-colors duration-500 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15"
              >
                {formattedDate}
              </button>
              <button
                onClick={() => openWindow("clock")}
                className="rounded-full bg-white/20 px-2 py-1 transition-colors duration-500 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15"
              >
                {formattedTime}
              </button>
            </div>
          </div>
        </div>

        <div className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ${
          maximizedWindowId ? "opacity-0" : "opacity-100"
        }`}>
          {desktopShortcuts.map((shortcut) => (
            <button
              key={shortcut.id}
              data-desktop-icon
              style={{
                position: "absolute",
                left: desktopPositions[shortcut.id]?.x ?? 16,
                top: desktopPositions[shortcut.id]?.y ?? 64,
              }}
              onPointerDown={(event) => {
                if (window.innerWidth < 768 || !isPrimaryPointerStart(event)) return;
                const target = event.currentTarget;
                desktopDragRef.current = {
                  id: shortcut.id,
                  startX: event.clientX,
                  startY: event.clientY,
                  x: desktopPositions[shortcut.id]?.x ?? 16,
                  y: desktopPositions[shortcut.id]?.y ?? 64,
                  moved: false,
                };
                setDraggingDesktopIcon(shortcut.id);
                target.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (!desktopDragRef.current || desktopDragRef.current.id !== shortcut.id) return;
                const iconWidth = 80;
                const nextX = Math.min(
                  window.innerWidth - iconWidth - 8,
                  Math.max(8, desktopDragRef.current.x + event.clientX - desktopDragRef.current.startX),
                );
                const nextY = desktopDragRef.current.y + event.clientY - desktopDragRef.current.startY;
                if (Math.abs(event.clientX - desktopDragRef.current.startX) > 4 || Math.abs(event.clientY - desktopDragRef.current.startY) > 4) {
                  desktopDragRef.current.moved = true;
                }
                setDesktopPositions((current) => ({
                  ...current,
                  [shortcut.id]: { x: nextX, y: nextY },
                }));
              }}
              onPointerUp={() => releaseDesktopDrag(shortcut.id)}
              onPointerCancel={() => releaseDesktopDrag(shortcut.id)}
              onClick={(event) => {
                event.stopPropagation();
                if (desktopClickBlockRef.current === shortcut.id) {
                  desktopClickBlockRef.current = "";
                  return;
                }
                setSelectedDesktopIcon("");
                handleDesktopIconOpen(shortcut.id);
              }}
              className={`pointer-events-auto flex w-20 flex-col items-center rounded-2xl p-2 text-center text-xs font-medium text-white dark:text-slate-100 ${
                draggingDesktopIcon === shortcut.id ? "cursor-grabbing select-none" : "cursor-grab transition duration-300"
              } ${
                selectedDesktopIcon === shortcut.id ? "bg-sky-400/25 ring-1 ring-white/40 dark:bg-sky-300/15 dark:ring-white/20" : ""
              }`}
            >
              <div
                className={`mx-auto mb-2 grid h-14 w-14 place-items-center overflow-hidden rounded-[18px] text-xl dark:text-slate-100 ${
                  draggingDesktopIcon === shortcut.id ? "" : "transition duration-300"
                } ${
                  appConfig[shortcut.id]?.transparentTile
                    ? "bg-transparent shadow-none ring-0 backdrop-blur-none"
                    : selectedDesktopIcon === shortcut.id
                      ? "bg-white/40 shadow-glass backdrop-blur-xl dark:bg-white/15"
                      : "bg-white/25 shadow-glass backdrop-blur-xl dark:bg-white/10"
                } ${
                  desktopIconAnimation === shortcut.id ? "scale-110 -translate-y-1" : ""
                }`}
              >
                {appConfig[shortcut.id]?.image ? (
                  <IconContent
                    label={shortcut.label}
                    icon={appConfig[shortcut.id]?.icon}
                    image={appConfig[shortcut.id]?.image}
                    imageClassName={appConfig[shortcut.id]?.imageClassName}
                    className="grid h-full w-full place-items-center"
                  />
                ) : (
                  <div
                    className={`grid h-full w-full place-items-center rounded-[inherit] text-xl font-semibold ${
                      appConfig[shortcut.id]?.iconTileClassName || ""
                    }`}
                  >
                    {appConfig[shortcut.id]?.icon}
                  </div>
                )}
              </div>
              <span
                className={`block w-full rounded-md px-1.5 py-0.5 text-center transition-colors duration-300 ${
                  selectedDesktopIcon === shortcut.id ? "bg-sky-500/30 dark:bg-sky-300/20" : ""
                }`}
              >
                {shortcut.label}
              </span>
            </button>
          ))}
        </div>

        <div className={`pointer-events-none absolute right-4 top-16 z-20 h-[22rem] w-[7.4rem] transition-all duration-300 sm:right-6 ${
          maximizedWindowId ? "pointer-events-none opacity-0" : "opacity-100"
        }`}>
          <div
            className={`pointer-events-auto absolute w-[7.4rem] ${draggingWidgetId === "calendar" ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ left: widgetPositions.calendar.x, top: widgetPositions.calendar.y }}
            onPointerDown={(event) => {
              if (window.innerWidth < 768 || !isPrimaryPointerStart(event)) return;
              const target = event.currentTarget;
              widgetDragRef.current = {
                id: "calendar",
                startX: event.clientX,
                startY: event.clientY,
                x: widgetPositions.calendar.x,
                y: widgetPositions.calendar.y,
                moved: false,
              };
              setDraggingWidgetId("calendar");
              target.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!widgetDragRef.current || widgetDragRef.current.id !== "calendar") return;
              const widgetWidth = 118;
              const nextX = Math.min(0, Math.max(-window.innerWidth + widgetWidth + 16, widgetDragRef.current.x + event.clientX - widgetDragRef.current.startX));
              const nextY = widgetDragRef.current.y + event.clientY - widgetDragRef.current.startY;
              if (Math.abs(event.clientX - widgetDragRef.current.startX) > 4 || Math.abs(event.clientY - widgetDragRef.current.startY) > 4) {
                widgetDragRef.current.moved = true;
              }
              setWidgetPositions((current) => ({
                ...current,
                calendar: { x: nextX, y: nextY },
              }));
            }}
            onPointerUp={() => releaseWidgetDrag("calendar")}
            onPointerCancel={() => releaseWidgetDrag("calendar")}
            onClick={() => {
              if (widgetClickBlockRef.current === "calendar") {
                widgetClickBlockRef.current = "";
                return;
              }
              setCalendarMonth(startOfMonth(systemTime));
              openWindow("calendar");
            }}
          >
            <GlassWidget
              label="Calendar"
              title={new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(systemTime)}
              subtitle={new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(systemTime)}
            />
          </div>
          <div
            className={`pointer-events-auto absolute w-[7.4rem] ${draggingWidgetId === "weather" ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ left: widgetPositions.weather.x, top: widgetPositions.weather.y }}
            onPointerDown={(event) => {
              if (window.innerWidth < 768 || !isPrimaryPointerStart(event)) return;
              const target = event.currentTarget;
              widgetDragRef.current = {
                id: "weather",
                startX: event.clientX,
                startY: event.clientY,
                x: widgetPositions.weather.x,
                y: widgetPositions.weather.y,
                moved: false,
              };
              setDraggingWidgetId("weather");
              target.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!widgetDragRef.current || widgetDragRef.current.id !== "weather") return;
              const widgetWidth = 118;
              const nextX = Math.min(0, Math.max(-window.innerWidth + widgetWidth + 16, widgetDragRef.current.x + event.clientX - widgetDragRef.current.startX));
              const nextY = widgetDragRef.current.y + event.clientY - widgetDragRef.current.startY;
              if (Math.abs(event.clientX - widgetDragRef.current.startX) > 4 || Math.abs(event.clientY - widgetDragRef.current.startY) > 4) {
                widgetDragRef.current.moved = true;
              }
              setWidgetPositions((current) => ({
                ...current,
                weather: { x: nextX, y: nextY },
              }));
            }}
            onPointerUp={() => releaseWidgetDrag("weather")}
            onPointerCancel={() => releaseWidgetDrag("weather")}
            onClick={() => {
              if (widgetClickBlockRef.current === "weather") {
                widgetClickBlockRef.current = "";
                return;
              }
              openWindow("weather");
            }}
          >
            <GlassWidget
              label="Weather"
              title={weatherData.current ? `${weatherData.current.temperature}°C` : "--"}
              subtitle={weatherData.current ? `${getWeatherLabel(weatherData.current.code)}\n${weatherLocation.name}` : `Loading\n${weatherLocation.name}`}
            />
          </div>
        </div>

        <div className={`hidden absolute right-4 top-16 z-20 grid w-[7.4rem] gap-2 transition-all duration-300 sm:right-6 ${
          maximizedWindowId ? "pointer-events-none opacity-0" : "opacity-100"
        }`}>
          <GlassWidget
            label="Calendar"
            title={new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(systemTime)}
            subtitle={new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(systemTime)}
            onClick={() => {
              setCalendarMonth(startOfMonth(systemTime));
              openWindow("calendar");
            }}
          />
          <GlassWidget
            label="Weather"
            title={weatherData.current ? `${weatherData.current.temperature}�C` : "--"}
            subtitle={weatherData.current ? `${getWeatherLabel(weatherData.current.code)}\n${weatherLocation.name}` : `Loading\n${weatherLocation.name}`}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-40 px-3 pb-24 pt-16 md:px-6">
          {windows.map((windowItem) => (
            <AppWindow
              key={windowItem.id}
              windowItem={windowItem}
              isActive={activeWindowId === windowItem.id}
              onFocus={focusWindow}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onToggleMaximize={toggleMaximize}
              onRestoreFromMaximized={restoreFromMaximized}
              onPersistPosition={updateWindowPosition}
            >
              {getWindowBody(windowItem.id, {
                openWindow,
                calendarMonth,
                setCalendarMonth,
                systemTime,
                weatherData,
                batteryLevel,
                certificatesLayout,
                setCertificatesLayout,
                certificatesIndex,
                setCertificatesIndex,
              })}
            </AppWindow>
          ))}
        </div>

        <div
          className={`pointer-events-none absolute inset-0 z-[44] grid place-items-center transition-opacity duration-700 ${
            showBatteryPopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-[30px] bg-white/35 px-8 py-7 shadow-glass ring-1 ring-white/40 backdrop-blur-2xl dark:bg-slate-950/35 dark:ring-white/10">
            <div className="relative h-24 w-48 rounded-[24px] border-[6px] border-slate-700/80 p-2 dark:border-slate-100/80">
              <div className="h-full rounded-[14px] bg-slate-200/80 dark:bg-slate-800/70">
                <div
                  className="h-full rounded-[14px] bg-gradient-to-r from-emerald-400 to-lime-400 transition-[width] duration-500"
                  style={{ width: `${Math.max(0, Math.min(100, batteryLevel ?? 0))}%` }}
                />
              </div>
              <div className="absolute right-[-14px] top-1/2 h-9 w-3 -translate-y-1/2 rounded-r-md bg-slate-700/80 dark:bg-slate-100/80" />
              <div className="absolute inset-0 grid place-items-center text-3xl font-semibold text-slate-900 dark:text-slate-100">
                {batteryLevel !== null ? `${batteryLevel}%` : "\u26A1"}
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute inset-x-0 bottom-3 z-[45] flex justify-center px-3 transition-all duration-300 ${
          maximizedWindowId ? "pointer-events-none opacity-0 translate-y-4" : "opacity-100"
        }`}>
          <div className="flex max-w-full items-end gap-1.5 rounded-[24px] border border-white/30 bg-white/20 px-3 py-2 shadow-dock backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/20">
            {dockApps.map((app) => (
              <button
                key={app.id}
                onClick={() => handleDockClick(app)}
                className={`group relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/70 text-sm font-semibold text-slate-700 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-[1.28] dark:bg-white/10 dark:text-slate-100 ${
                  appConfig[app.id]?.transparentTile ? "!bg-transparent !shadow-none ring-0 dark:!bg-transparent" : ""
                } ${
                  bounceId === app.id ? "animate-dock-bounce" : ""
                }`}
              >
                <div className="grid h-full w-full place-items-center overflow-hidden rounded-[inherit]">
                  {app.image ? (
                    <IconContent label={app.label} icon={app.icon} image={app.image} imageClassName={app.imageClassName} />
                  ) : (
                    <div
                      className={`grid h-full w-full place-items-center rounded-[inherit] font-semibold ${
                        appConfig[app.id]?.iconTileClassName || ""
                      }`}
                    >
                      {app.icon}
                    </div>
                  )}
                </div>
                <div className="pointer-events-none absolute -top-9 left-1/2 z-10 flex -translate-x-1/2 translate-y-0.5 flex-col items-center opacity-0 transition duration-150 group-hover:-translate-y-0.5 group-hover:opacity-100">
                  <span className="whitespace-nowrap rounded-lg bg-black/85 px-2.5 py-1 text-[10px] font-medium leading-none text-white shadow-lg">
                    {app.label}
                  </span>
                  <span className="-mt-1 h-2.5 w-2.5 rotate-45 rounded-[1px] bg-black/85" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 animate-boot-fade bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_35%),linear-gradient(145deg,#11192d,#1b3157)]" />
      </div>
    </div>
  );
}

function GlassWidget({ label, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-[98px] w-full flex-col rounded-[18px] border border-white/50 bg-white/80 px-3 py-3 text-left text-ink shadow-glass backdrop-blur-xl transition-colors duration-500 hover:bg-white/90 dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-100 dark:hover:bg-slate-900/70"
    >
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-500 dark:text-slate-400">{label}</p>
      <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      <p className="mt-auto whitespace-pre-line text-[11px] leading-4 text-slate-500 transition-colors duration-500 dark:text-slate-400">{subtitle}</p>
    </button>
  );
}

function DarkWidget({ label, rows }) {
  return (
    <div className="h-[122px] rounded-[18px] border border-white/10 bg-slate-900/85 px-3 py-3 text-white shadow-glass backdrop-blur-xl transition-colors duration-500 dark:bg-slate-950/80">
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">{label}</p>
      <div className="mt-2 space-y-2 text-[11px] text-white/85">
        {rows.map((row) => (
          <div key={row} className="rounded-xl bg-white/5 px-2 py-2">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

