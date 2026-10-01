
import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";
import type { IPhoto } from "../../types/Phototypes";


interface PhotoCardProps {
  photo: IPhoto;
  isFavorite?: boolean;
  onFavorite?: (photo: IPhoto) => void;
  onView?: (photo: IPhoto) => void;
}

const PhotoCard = ({
  photo,
  isFavorite = false,
  onFavorite,
  onView,
}: PhotoCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={photo.url}
          alt={photo.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Favorite */}
        <button
          type="button"
          onClick={() => onFavorite?.(photo)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-110"
        >
          {isFavorite ? (
            <FaHeart color="#ec4899" size={17} />
          ) : (
            <FaRegHeart color="#374151" size={17} />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-bold capitalize text-gray-800">
          {photo.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <p>Photo #{photo.id}</p>
            <p>Album #{photo.albumId}</p>
          </div>

          {/* View Details */}
          <button
            type="button"
            onClick={() => onView?.(photo)}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-2 text-xs font-bold text-white transition hover:opacity-90"
          >
            <FaExpand size={12} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;

