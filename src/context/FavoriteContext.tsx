import { createContext, useContext, useState, type ReactNode } from "react";
import type { IPhoto } from "../types/Phototypes";

interface FavoriteContextType {
  favorites: IPhoto[];
  addFavorite: (photo: IPhoto) => void;
  removeFavorite: (photoId: number) => void;
  isFavorite: (photoId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<IPhoto[]>([]);

  const addFavorite = (photo: IPhoto) => {
    console.log("Adding favorite:", photo);
    setFavorites((prev) => {
      const alreadyExists = prev.some((item) => item.id === photo.id);
      if (alreadyExists) {
        console.log("Already exists:", photo.id);
        return prev;
      }
      const updatedFavorites = [...prev, photo];
      console.log("Updated favorites:", updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (photoId: number) => {
    setFavorites((prev) => prev.filter((photo) => photo.id !== photoId));
  };

  const isFavorite = (photoId: number) => {
    return favorites.some((photo) => photo.id === photoId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used inside FavoriteProvider");
  }

  return context;
};
