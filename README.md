from pathlib import Path

# USER DIRECTORY APP
# ⚡ React + Vite Starter Template

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some basic ESLint rules.

## 📦 Features

- ⚛️ React with Vite
- 🔁 Fast Refresh using `@vitejs/plugin-react` or `@vitejs/plugin-react-swc`
- ✅ ESLint setup
- 💨 Optional Tailwind CSS support

---

## 🚀 Installation & Setup Guide

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git

if you find any error after installing wont be able to run it, then check the vite.config.js and install all the dependency and then change directroy to "User-directory" and you can run the project.

# User Directory App (React + Vite)

A responsive Single Page Application (SPA) built with React and Vite that displays user details in a grid tile format. The app features real-time search functionality, light/dark theme toggle, and global state management using React Context API.

## 🚀 Features

- User Grid View: Fetches and displays user data in a beautiful grid tile layout on the home page.
- Search Functionality: Search users by name, email, or country in real-time.
- Theme Toggle: Switch between Light and Dark themes using the toggle button at the top-right corner.
- Global State Management: Uses React's Context API to manage and share state across the entire application without prop drilling.
- SPA Navigation: Built with react-router-dom to provide seamless single-page navigation.

## 🔧 Tech Stack

- React (with Hooks)
- Vite (for fast bundling and dev experience)
- React Router DOM (SPA routing)
- Context API (for state management)
- CSS / TailwindCSS / Styled-components (mention what you're using for styling)

## 🧠 Architecture Overview

- Context Provider: Wraps the application to provide global access to user data and theme state.
- Routes*: Defined using `react-router-dom` for component-based navigation.
- Components:
  - `UserGrid`: Displays users in tile view.
  - `SearchBar`: Handles filtering based on input.
  - `ThemeToggle`: Allows switching between themes.
  
## 📂 Folder Structure

src/
├── components/
│ ├── UserCard.jsx
│ ├── SearchBar.jsx
│ └── ThemeToggle.jsx
├── context/
│ └── AppContext.jsx
├── pages/
│ └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
