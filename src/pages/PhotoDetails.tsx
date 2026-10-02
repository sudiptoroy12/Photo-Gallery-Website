
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import type { IPhoto } from "../types/Phototypes";
import { useFavorite } from "../context/FavoriteContext";

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorite();

  const [photo, setPhoto] = useState<IPhoto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );

        if (!response.ok) {
          throw new Error("Photo not found");
        }

        const data: IPhoto = await response.json();

        setPhoto(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load photo.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-xl font-bold text-violet-600">
          Loading photo...
        </p>
      </div>
    );
  }

  if (error || !photo) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold text-red-500">
          {error || "Photo not found"}
        </p>

        <button
          onClick={() => navigate("/")}
          className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-bold text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  const favorite = isFavorite(photo.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(photo.id);
    } else {
      addFavorite(photo);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-orange-50 px-5 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm transition hover:text-violet-600"
        >
          <FaArrowLeft size={14} />
          Back to Gallery
        </button>

        {/* Details */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

          {/* Image */}
          <div className="aspect-square lg:aspect-auto">
            <img
              src={photo.url}
              alt={photo.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12">

            <span className="mb-4 w-fit rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-600">
              Album #{photo.albumId}
            </span>

            <h1 className="text-3xl font-black capitalize leading-tight text-gray-900 sm:text-4xl">
              {photo.title}
            </h1>

            <p className="mt-5 leading-7 text-gray-500">
              Explore this beautiful photograph from our gallery
              collection. You can save your favorite photos and
              discover more moments from the same album.
            </p>

            {/* Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Photo ID
                </p>

                <p className="mt-1 font-bold text-gray-800">
                  #{photo.id}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Album ID
                </p>

                <p className="mt-1 font-bold text-gray-800">
                  #{photo.albumId}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">

              {/* Favorite Button */}
              <button
                type="button"
                onClick={handleFavorite}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1"
              >
                {favorite ? (
                  <>
                    <FaHeart />
                    Remove Favorite
                  </>
                ) : (
                  <>
                    <FaRegHeart />
                    Add Favorite
                  </>
                )}
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-bold text-gray-700 transition hover:border-violet-300 hover:text-violet-600"
              >
                Back
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoDetails;

