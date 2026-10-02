import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IPhoto } from "../types/Phototypes";
import PhotoCard from "../components/gallery/PhotoCard";

    

const Gallery = () => {
      const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
    useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data: IPhoto[] = await response.json();

        setPhotos(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleView = (photo: IPhoto) => {
    navigate(`/photos/${photo.id}`);
  };

  if (loading) {
    return <p>Loading photos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return(
   <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
          Explore Gallery
        </p>

        <h2 className="mt-2 text-4xl font-black text-gray-900">
          Beautiful Moments
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onView={handleView}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;