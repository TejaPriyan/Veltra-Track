# Veltra Track — Personal Operating System

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25_Ready-brightgreen.svg)](manifest.json)
[![Architecture](https://img.shields.io/badge/Architecture-100%25_Local--First-8A2BE2.svg)](#privacy--local-first)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero_Build-orange.svg)](#tech-stack)
[![Deploy with GitHub Pages](https://github.com/TejaPriyan/Veltra-Track/actions/workflows/deploy.yml/badge.svg)](https://github.com/TejaPriyan/Veltra-Track/actions/workflows/deploy.yml)

**A high-performance, private, zero-dependency personal OS for habits, workouts, budgeting, vitals, and flow-state focus.**

[🌐 Live Web App](https://tejapriyan.github.io/Veltra-Track/) • [📦 Installation](#progressive-web-app-pwa--offline-install) • [✨ Key Features](#key-features) • [🚀 Deployment](#deployment)

</div>

---

## 🌟 Overview

**Veltra Track** is an all-in-one personal dashboard engineered for absolute speed, privacy, and aesthetic clarity. Built completely with vanilla web technologies, it runs directly in any modern browser on desktop and mobile without requiring build scripts, bundlers, external frameworks, or remote databases.

Your data is stored strictly on your device inside your browser's local storage.

---

## ✨ Key Features

### 📅 1. Today Dashboard & Veltra Pulse AI
- **Contextual Daily Briefing**: Intelligent dynamic synthesis of your sleep recovery, pending habits, movement metrics, and remaining daily budget.
- **2027 Life Score Index (0–100)**: Real-time wellness index balancing habit execution, physical movement, restorative sleep, hydration, and screen time balance.
- **Quick-Add Actions**: Single-tap logging for habits, water increments, transactions, or workouts.

### 🎯 2. Habits & Consistency Heatmap
- **20-Week Density Heatmap**: GitHub-style activity calendar visualizing multi-month consistency.
- **Dynamic Recurrence**: Configure daily, weekday, weekend, or custom weekly schedules.
- **Streak Tracker**: Tracks current streak, best record, and 30-day success percentages with delightful haptic feedback and celebratory micro-interactions.

### ⚡ 3. Move & Live Workout Tracking
- **Live GPS Pace & Route**: Uses browser `Geolocation` API to calculate live pace, speed, and real-time distance.
- **Built-in Pedometer**: Connects to mobile accelerometer (`DeviceMotionEvent`) for real-time step counting with automatic route polyline rendering.
- **Screen WakeLock**: Keeps phone display awake during runs, walks, or cycling sessions.
- **Strength Training Ledger**: Log sets, reps, and weights with automated Personal Best tracking.

### 💳 4. Money & Expense Ledger
- **Category Budgets**: Set total monthly budgets and individual category allowances.
- **Interactive Daily Burn Chart**: Visual bar charts tracking spending velocity and daily pacing.
- **Multi-Currency Support**: Automatically formats in INR (`₹`), USD (`$`), EUR (`€`), GBP (`£`), JPY (`¥`), and other global currencies.
- **Instant Search & Filters**: Search transaction notes and filter by category on the fly.

### 🌿 5. Health & Vitals
- **Step Target**: Daily step tracker with 14-day history trend lines.
- **Hydration Tracker**: 1-click water logger with customizable unit systems (Metric `ml` / Imperial `oz`).
- **Sleep Quality**: Log sleep hours and subjective sleep quality scores.
- **Screen Time & App Breakdown**: Digital wellbeing monitor tracking total screen time, pickup counts, and per-app usage.

### 🧘 6. Focus & Flow State Engine
- **Interval Timers**: Presets for 25m Pomodoro, 50m Deep Work, 90m Flow State, and 5m Reset.
- **Web Audio Chimes**: Synthesizes pleasant harmonic notification bells directly using the Web Audio API without needing external sound files.
- **Focus Logging**: 1-click export of completed deep work intervals directly into your daily journal note.

### 🔍 7. Global Command Palette (`⌘K` / `Ctrl+K`)
- Rapid keyboard-driven navigation across all views, settings, and instant quick-logging actions.

### 🛡️ 8. Data Sovereignty & Portability
- **JSON Backup**: Complete export and restore of all habits, logs, expenses, and workouts.
- **CSV Data Exports**: Dedicated spreadsheets for expenses, workouts, and daily vitals.
- **Sample Data Playground**: 1-click demo data loading to test all charts, with 1-click clean removal anytime.

---

## 📱 Progressive Web App (PWA) & Offline Install

Veltra Track is a fully certified Progressive Web App:
- **Offline First**: A lightweight Service Worker (`sw.js`) caches app shell files, vector icons, and typography.
- **Install on iOS**: In Safari, tap **Share** (`⎋`) → **Add to Home Screen** (`⊕`).
- **Install on Android / Chrome / Edge**: Click the **Download App** button in the header or the browser install prompt in the address bar.
- **Standalone Offline Bundle**: Click **Download App** → **Download Standalone HTML** to save an autonomous single-file version that runs even without an internet connection or web server!

---

## 🛠️ Tech Stack

Veltra Track is proudly built with zero external framework dependencies:
- **Markup**: Semantic HTML5 (Single-file core app shell).
- **Styling**: Vanilla CSS (Tailored HSL design tokens, Glassmorphism, Adaptive Dark/Light modes).
- **Logic**: Modern Vanilla JavaScript (ES6+).
- **APIs**:
  - `localStorage` (Local persistence)
  - `ServiceWorker` & `CacheStorage` (PWA Offline caching)
  - `Web Audio API` (Procedural sound synthesis)
  - `Geolocation API` (Outdoor speed and distance)
  - `DeviceMotionEvent` (In-browser pedometer motion engine)
  - `Screen Wake Lock API` (Display keep-awake during training)

---

## 🚀 Deployment

### Deploy to GitHub Pages (Automatic)
This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.
1. Push to your `main` branch.
2. Go to **Settings** → **Pages** in your GitHub repository.
3. Under **Source**, choose **GitHub Actions**.
4. Your application will be live at:
   ```
   https://<your-username>.github.io/Veltra-Track/
   ```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
Drag and drop this repository folder onto [Netlify Drop](https://app.netlify.com/drop).

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` / `⌘ + K` | Open Command Palette |
| `Escape` | Close dialogs, command palette, or modals |
| `Arrow Up` / `Down` | Navigate command palette items |
| `Enter` | Execute selected command |

---

## 🔒 Privacy & Local-First Philosophy

- **Zero Cloud Tracking**: No Google Analytics, no Facebook Pixels, no third-party trackers.
- **Client-Side Storage**: Your habits, finances, health data, and daily notes never leave your personal browser.
- **Your Data is Yours**: Export everything to open JSON and CSV anytime in Settings.

---

## 📄 License

Distributed under the [MIT License](LICENSE). Copyright &copy; 2026 Teja Priyan.
