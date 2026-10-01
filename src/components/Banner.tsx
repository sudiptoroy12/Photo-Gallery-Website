
import { FaArrowRight, FaImages, FaHeart } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-orange-50">
      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        
        {/* Left Content */}
        <div className="max-w-xl">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm backdrop-blur">
            <FaImages size={14} />
            Explore beautiful moments
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Capture the
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
              beauty of life.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Discover stunning photographs, explore unique albums, and save
            the moments that inspire you.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/albums"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Gallery
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight size={14} />
              </span>
            </a>

            <a
              href="/favorites"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:text-fuchsia-600"
            >
              <FaHeart size={15} />
              My Favorites
            </a>
          </div>

          {/* Small Stats */}
          <div className="mt-10 flex items-center gap-8 border-t border-gray-200 pt-6">
            <div>
              <p className="text-2xl font-black text-gray-900">500+</p>
              <p className="text-sm text-gray-500">Photos</p>
            </div>

            <div className="h-10 w-px bg-gray-200" />

            <div>
              <p className="text-2xl font-black text-gray-900">20+</p>
              <p className="text-sm text-gray-500">Albums</p>
            </div>

            <div className="h-10 w-px bg-gray-200" />

            <div>
              <p className="text-2xl font-black text-gray-900">100+</p>
              <p className="text-sm text-gray-500">Favorites</p>
            </div>
          </div>
        </div>

        {/* Right Image Collage */}
        <div className="relative mx-auto h-[480px] w-full max-w-lg">
          
          {/* Main Image */}
          <div className="absolute right-0 top-4 h-[340px] w-[72%] overflow-hidden rounded-3xl border-8 border-white shadow-2xl rotate-2">
            <img
              src="https://picsum.photos/seed/gallery-main/700/900"
              alt="Beautiful gallery photograph"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
              <p className="text-sm font-semibold text-white">
                Discover beautiful moments
              </p>
            </div>
          </div>

          {/* Top Left Image */}
          <div className="absolute left-0 top-20 z-10 h-44 w-40 overflow-hidden rounded-2xl border-8 border-white shadow-xl -rotate-6">
            <img
              src="https://picsum.photos/seed/gallery-one/500/600"
              alt="Gallery photograph"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-4 left-8 z-20 h-48 w-44 overflow-hidden rounded-2xl border-8 border-white shadow-xl rotate-6">
            <img
              src="https://picsum.photos/seed/gallery-two/500/600"
              alt="Gallery photograph"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Bottom Right Small Image */}
          <div className="absolute bottom-0 right-8 z-20 h-40 w-36 overflow-hidden rounded-2xl border-8 border-white shadow-xl -rotate-3">
            <img
              src="https://picsum.photos/seed/gallery-three/500/600"
              alt="Gallery photograph"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Floating Favorite Card */}
          <div className="absolute bottom-24 right-0 z-30 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white">
              <FaHeart size={14} />
            </div>

            <div>
              <p className="text-xs font-bold text-gray-900">
                Your favorites
              </p>
              <p className="text-xs text-gray-500">
                Save moments you love
              </p>
            </div>
          </div>

          {/* Decorative Gradient Circle */}
          <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

