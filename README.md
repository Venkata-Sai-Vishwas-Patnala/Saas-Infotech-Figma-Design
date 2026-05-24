<div align="center">

# 🚀 Infotech SaaS Dashboard

### A modern, animated, full-featured SaaS dashboard built with React, Tailwind CSS & shadcn/ui

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> Originally designed in Figma · [View Original Design](https://www.figma.com/design/M7zbhMTr6Ue5vKLN1j22ux/SaaS-Dashboard)

</div>

---

## ✨ Features

- 📊 **Analytics Dashboard** — Revenue, user activity, profit trends & category breakdown charts
- 👥 **User Management** — Team table with roles, status badges & action menus
- 🔔 **Notifications** — Read/unread state, mark-all & clear-all support
- 🎬 **Media Section** — Video player with play/mute/fullscreen controls + uploads grid
- ⚙️ **Settings** — Tabbed settings: Profile, Notifications, Security, Billing & Appearance
- 🌙 **Dark / Light Mode** — Seamless theme toggle via `next-themes`
- 🎨 **Animated Background** — Floating particle effects with smooth motion
- 🔔 **Toast Notifications** — Rich toasts on every interaction via Sonner
- 📱 **Fully Responsive** — Works on all screen sizes

---

## 📸 Screenshots

<div align="center">

### 🏠 Dashboard Overview
<img src="screenshots/Screenshot 2026-05-25 011834.png" width="100%" alt="Dashboard Overview"/>

<br/><br/>

### 📈 Analytics & Charts
<img src="screenshots/Screenshot 2026-05-25 011851.png" width="100%" alt="Analytics Charts"/>

<br/><br/>

### 👥 User Management
<img src="screenshots/Screenshot 2026-05-25 011902.png" width="100%" alt="User Management"/>

<br/><br/>

### 🔔 Notifications
<img src="screenshots/Screenshot 2026-05-25 011916.png" width="100%" alt="Notifications"/>

<br/><br/>

### 🎬 Media Section
<img src="screenshots/Screenshot 2026-05-25 011930.png" width="100%" alt="Media Section"/>

<br/><br/>

### ⚙️ Settings Page
<img src="screenshots/Screenshot 2026-05-25 011953.png" width="100%" alt="Settings Page"/>

<br/><br/>

### 🌙 Dark Mode
<img src="screenshots/Screenshot 2026-05-25 012013.png" width="100%" alt="Dark Mode"/>

<br/><br/>

### 📱 Responsive Layout
<img src="screenshots/Screenshot 2026-05-25 012051.png" width="100%" alt="Responsive Layout"/>

</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| ⚛️ Framework | React 18 + TypeScript |
| ⚡ Build Tool | Vite 6 |
| 🎨 Styling | Tailwind CSS 4 + shadcn/ui |
| 📊 Charts | Recharts |
| 🎞️ Animations | Motion (Framer Motion v12) |
| 🌗 Theming | next-themes |
| 🔔 Toasts | Sonner |
| 🧩 UI Primitives | Radix UI |
| 🔷 Icons | Lucide React + MUI Icons |
| 🗺️ Routing | React Router 7 |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Venkata-Sai-Vishwas-Patnala/Saas-Infotech-Figma-Design.git

# Navigate into the project
cd Saas-Infotech-Figma-Design

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── main.tsx                        # Entry point
├── app/
│   ├── App.tsx                     # Root layout (sidebar + routing)
│   └── components/
│       ├── analytics-dashboard.tsx # Charts & KPI cards
│       ├── notifications.tsx       # Notification feed
│       ├── settings-page.tsx       # Tabbed settings
│       ├── user-management.tsx     # User table
│       ├── video-section.tsx       # Media player
│       ├── animated-background.tsx # Particle background
│       ├── figma/
│       │   └── ImageWithFallback.tsx
│       └── ui/                     # 40+ shadcn/ui components
└── styles/
    ├── index.css
    ├── fonts.css
    ├── tailwind.css
    └── theme.css
```

---

## 🎨 Design

Original Figma design by the Infotech team.
View it here → [Figma Design File](https://www.figma.com/design/M7zbhMTr6Ue5vKLN1j22ux/SaaS-Dashboard)

---

<div align="center">

Made with ❤️ by [Venkata Sai Vishwas Patnala](https://github.com/Venkata-Sai-Vishwas-Patnala)

</div>
