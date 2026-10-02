# 📸 PhotoGallery

### A modern, responsive photo gallery built with React, TypeScript & Tailwind CSS.

Explore beautiful photos, view detailed information, and save your favorite moments in one simple and elegant gallery experience.

<p align="center">
  <a href="https://resplendent-medovik-c7fc22.netlify.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-7C3AED?style=for-the-badge" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 🌐 Live Website

🚀 **[Visit PhotoGallery](https://resplendent-medovik-c7fc22.netlify.app/)**

---

## ✨ About The Project

**PhotoGallery** is a responsive photo browsing application designed to provide a smooth and enjoyable way to explore images.

The application fetches photo data from the **JSONPlaceholder API** and presents it through a clean card-based gallery interface.

Users can:

* 🖼️ Browse photos
* 🔍 View photo details
* ❤️ Add photos to favorites
* 💔 Remove photos from favorites
* 🧭 Navigate between pages without full page reloads
* 📱 Use the website comfortably on mobile, tablet, and desktop

The project was built to practice **React, TypeScript, Context API, API integration, routing, and responsive UI development**.

---

## 🎨 Preview

### 🏠 Home

A colorful landing page introducing the gallery and guiding users toward exploring the collection.

### 🖼️ Gallery

A responsive grid displaying the photo collection with reusable photo cards.

### 🔎 Photo Details

A dedicated details page for viewing an individual photo and managing its favorite status.

### ❤️ Favorites

A personal collection containing all photos saved by the user.

### ℹ️ About

A simple introduction to the PhotoGallery project and its purpose.

---

## 🚀 Features

| Feature                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| 📸 Photo Gallery       | Browse a collection of 100 photos                 |
| ❤️ Favorites           | Save and remove favorite photos                   |
| 🔍 Photo Details       | View individual photo information                 |
| 🧭 Client-Side Routing | Navigate without unnecessary page reloads         |
| 📱 Responsive UI       | Optimized for mobile, tablet & desktop            |
| ⚡ API Integration      | Fetches real data from JSONPlaceholder            |
| 🎨 Modern Design       | Gradient-based colorful interface                 |
| 🧩 Reusable Components | Modular React component structure                 |
| 🔷 TypeScript          | Strong typing throughout the application          |
| 📜 Scroll To Top       | Automatically scrolls to the top after navigation |
| 🎯 React Icons         | Consistent icon system throughout the UI          |

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ **React.js**
* 🔷 **TypeScript**
* 🎨 **Tailwind CSS**
* 🧭 **React Router DOM**
* ⭐ **React Icons**
* ⚡ **Vite**

### API

* 📡 **JSONPlaceholder**

### Deployment

* ▲ **Netlify**

---

## 📡 API

Photo data is provided by the JSONPlaceholder Photos API.

```text
https://jsonplaceholder.typicode.com/photos
```

The application fetches the available photos and displays the first **100 photos** in the gallery.

### API Response Structure

Each photo contains:

```ts
export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

---

## 🧠 Application Architecture

The application follows a simple and reusable React architecture.

```text
                    PhotoGallery
                         │
            ┌────────────┼────────────┐
            │            │            │
          Home        Gallery       About
                         │
                    PhotoCard
                         │
                  ┌──────┴──────┐
                  │             │
             Favorite       Details
                  │             │
                  └──────┬──────┘
                         │
                  FavoriteContext
                         │
                    Favorites
```

---

## ❤️ Favorites System

Favorites are managed globally using the **React Context API**.

The `FavoriteContext` provides three main functions:

```ts
addFavorite(photo);
removeFavorite(photoId);
isFavorite(photoId);
```

### How it works

When a user clicks the ❤️ button:

```text
PhotoCard
    ↓
addFavorite()
    ↓
FavoriteContext
    ↓
favorites[]
    ↓
Favorites Page
```

The same favorite state is available on both:

* Gallery cards
* Photo Details page

This allows users to manage favorites from different parts of the application.

---

## 🧭 Routing

The application uses **React Router DOM** for navigation.

| Route         | Page          |
| ------------- | ------------- |
| `/`           | Home          |
| `/gallery`    | Photo Gallery |
| `/favorites`  | Favorites     |
| `/about`      | About         |
| `/photos/:id` | Photo Details |

### Dynamic Photo Route

For example:

```text
/photos/10
```

The photo ID is retrieved with:

```tsx
const { id } = useParams();
```

The application then requests the corresponding photo from the API.

---

## 🧩 Component Structure

The project is organized into reusable components and pages.

```text
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Banner.tsx
│   ├── PhotoCard.tsx
│   ├── PhotoGallery.tsx
│   └── ScrollToTop.tsx
│
├── context/
│   └── FavoriteContext.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Gallery.tsx
│   ├── Favorites.tsx
│   ├── About.tsx
│   └── PhotoDetails.tsx
│
├── types/
│   └── Phototypes.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 Design System

The UI uses a colorful modern visual style built around:

* 🟣 Violet
* 🩷 Fuchsia
* 🟠 Orange
* ⚪ White
* 🌫️ Soft gray

### Design Characteristics

* Gradient buttons
* Rounded cards
* Glassmorphism navigation
* Soft shadows
* Smooth hover effects
* Large photography-focused layouts
* Responsive grid system
* Clean typography
* Interactive favorite buttons

---

## 📱 Responsive Design

PhotoGallery is designed to work across different screen sizes.

```text
📱 Mobile
    ↓
📱 Tablet
    ↓
💻 Desktop
    ↓
🖥️ Large Screens
```

The gallery automatically changes its column layout using Tailwind CSS:

```tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd photo-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🔥 What I Practiced

Building this project helped me strengthen my understanding of:

* ⚛️ React components
* 📦 Props
* 🔄 State management
* 🪝 React Hooks
* 🌐 API fetching
* ⏳ Loading states
* ❌ Error handling
* 🔷 TypeScript interfaces
* ❤️ React Context API
* 🧭 React Router
* 🔗 Dynamic routes
* 🎨 Tailwind CSS
* 📱 Responsive design
* 🧩 Reusable components
* 🖱️ Interactive UI
* 🚀 Netlify deployment

---

## 🔮 Future Improvements

Some features I may add in the future:

* 🔐 User authentication
* 💾 Persistent favorites with LocalStorage
* 🔎 Photo search
* 🗂️ Album filtering
* ❤️ Favorite counter
* 🌙 Dark mode
* 📥 Image download
* 🖼️ Full-screen image preview
* 📄 Pagination
* ♾️ Infinite scrolling
* 🔔 Toast notifications
* ⚡ Improved image loading

---

## 🌍 Deployment

The project is deployed on **Netlify**.

### Live Website

🚀 **[resplendent-medovik-c7fc22.netlify.app](https://resplendent-medovik-c7fc22.netlify.app/)**

---

## 👨‍💻 Author

### Sudipto Roy

**Frontend / Full Stack Developer**

I enjoy building modern, responsive web applications and continuously improving my skills in **React, TypeScript, JavaScript, Node.js, MongoDB, and the MERN stack**.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

It helps and motivates me to keep building and learning!

---

## 📄 License

This project was created for **learning and portfolio purposes**.

---

<p align="center">
  <strong>📸 Capture. Explore. Save.</strong>
  <br />
  Built with ❤️ using React & TypeScript.
</p>
