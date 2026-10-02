````md
# 📸 PhotoGallery

A modern and responsive photo gallery website built with **React.js, TypeScript, Tailwind CSS, and React Router**.

PhotoGallery allows users to explore beautiful photographs, view photo details, and save their favorite photos in a dedicated Favorites page.

---

## 🌐 Live Demo

🔗 https://resplendent-medovik-c7fc22.netlify.app/

---

## ✨ Features

- 📸 Browse a collection of photos
- 🖼️ Display 100 photos using `map()`
- 🔍 View individual photo details
- ❤️ Add photos to Favorites
- 💔 Remove photos from Favorites
- 🔄 Favorite state shared using React Context API
- 🧭 Client-side navigation with React Router
- 📱 Fully responsive design
- 🎨 Modern gradient-based UI
- ⚡ Loading and error states
- ⬆️ Automatically scroll to the top when changing pages
- 🧩 Reusable React components
- 🔤 Fully typed with TypeScript
- 🎯 Icons from `react-icons`

---

## 🛠️ Technologies Used

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- React Icons
- Vite

### API

This project uses the JSONPlaceholder Photos API:

`https://jsonplaceholder.typicode.com/photos`

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
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
````

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

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

## 📡 API Integration

PhotoGallery fetches photo data from the JSONPlaceholder API.

```ts
const response = await fetch(
  "https://jsonplaceholder.typicode.com/photos"
);

const data: IPhoto[] = await response.json();

setPhotos(data.slice(0, 100));
```

The application displays the first **100 photos** from the API.

---

## 🔷 TypeScript Data Type

The photo data is represented using a TypeScript interface:

```ts
export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

Using TypeScript helps keep the photo data consistent and provides better development-time type checking.

---

## ❤️ Favorites Feature

The Favorites feature is managed using the **React Context API**.

Instead of keeping favorite data separately inside different components, the application uses a global `FavoriteContext`.

### Available functions

```ts
addFavorite(photo)
```

Adds a photo to the Favorites list.

```ts
removeFavorite(photoId)
```

Removes a photo from the Favorites list.

```ts
isFavorite(photoId)
```

Checks whether a photo has already been added to Favorites.

### Data
