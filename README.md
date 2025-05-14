# TestWeb – 3D React TypeScript Website

## 🧾 Overview

**TestWeb** is a modern 3D website built using **React**, **TypeScript**, and **Three.js**, via **React Three Fiber**. It provides a dynamic, interactive frontend experience, leveraging WebGL capabilities in a React-style declarative approach.

This README is intended for developers seeking to understand the architecture, tooling, and deployment procedures for this project.

---

## 🧰 Tech Stack

- **React** – UI library for building component-based interfaces  
- **TypeScript** – Strongly typed JavaScript  
- **Three.js** – Low-level 3D rendering engine  
- **React Three Fiber** – React renderer for Three.js  
- **@react-three/drei** – Useful helpers for React Three Fiber  
- **Vite** – Lightning-fast development and build tooling  
- **Node.js** – Runtime environment for running scripts and building  
- **npm** – Package manager  

---

## 📁 Folder Structure

testweb/
├── public/ # Static files
│ └── index.html # HTML template
├── src/ # Main source directory
│ ├── App.tsx # Root component for routing/layout
│ ├── main.tsx # Entry point for rendering
│ ├── assets/ # Images, models, textures (optional)
│ ├── components/ # Reusable 3D & UI components
│ ├── styles/ # CSS or Tailwind if used (not confirmed)
│ └── utils/ # Utility functions or hooks (if applicable)
├── .gitignore # Ignored files for git
├── index.html # Entry HTML file
├── package.json # Project metadata and scripts
├── tsconfig.json # TypeScript compiler configuration
├── vite.config.ts # Vite build & dev server configuration
└── README.md # Project documentation (this file)


---

## ⚙️ Installation & Local Development

### Prerequisites

- Node.js (v16 or later recommended)  
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/tentax143/testweb.git
cd testweb
npm install
# or
yarn install
npm run dev
# or
yarn dev
npm run build
# or
yarn build
npm run preview
# or
yarn preview
