import { useFavorite } from "../context/FavoriteContext";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorite();

  console.log("Favorites:", favorites); // Debugging line

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="mb-8 text-4xl font-black">
        My Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="aspect-square w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold capitalize">
                  {photo.title}
                </h3>

                <button
                  onClick={() => removeFavorite(photo.id)}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;