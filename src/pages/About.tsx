
import {
  FaCameraRetro,
  FaHeart,
  FaImages,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  return (
    <main className="bg-gradient-to-br from-violet-50 via-white to-orange-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-xl shadow-violet-200">
              <FaCameraRetro size={28} />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              About PhotoGallery
            </p>

            <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Every photo has a
              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                story to tell.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              PhotoGallery is a simple place to discover beautiful
              photographs, explore different collections, and keep the
              moments that inspire you.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://picsum.photos/seed/about-gallery/900/700"
                alt="Beautiful photography"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur sm:right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white">
                  <FaHeart size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Moments that matter
                  </p>
                  <p className="text-xs text-gray-500">
                    Made for photography lovers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-fuchsia-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              A place to explore and enjoy photography.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We created PhotoGallery with one simple idea: make discovering
              photographs enjoyable and effortless.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From beautiful landscapes to everyday moments, our gallery
              brings different photographs together in one clean and
              enjoyable experience.
            </p>

            <a href="/gallery" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              Explore Gallery
              <FaArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Why PhotoGallery
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Built around beautiful moments
            </h2>

            <p className="mt-4 text-gray-500">
              Everything you need to explore, discover, and enjoy
              photography.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                <FaImages size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Discover Photos
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Browse through a collection of beautiful photographs and
                discover something new every time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-600 transition group-hover:bg-fuchsia-600 group-hover:text-white">
                <FaHeart size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Save Favorites
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Keep track of the photographs you love and easily return to
                your favorite moments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                <FaUsers size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                For Everyone
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Whether you love taking photos or simply enjoy looking at
                them, PhotoGallery is made for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-14 text-center text-white shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Discover beautiful photographs and find the moments that inspire
            you.
          </p>

          <a href="/gallery" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Explore Photos
            <FaArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;

