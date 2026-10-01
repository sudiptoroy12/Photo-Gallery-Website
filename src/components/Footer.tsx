
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
 
  Images,
  

  Sparkles,
} from "lucide-react";

import {
  
  MdFavorite,
  MdArrowOutward,
 
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#0B0B12] text-white">
      {/* Top Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-md">
              <Images size={21} />
              
              <div className="absolute -right-1 -top-1">
                <Sparkles size={13} fill="white" />
              </div>
            </div>

            <div className="text-xl font-extrabold tracking-tight">
              <span className="text-white">Photo</span>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </div>
          </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Discover beautiful moments, explore amazing collections, and
              create your own visual journey with our modern photo gallery.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-fuchsia-500/40 hover:bg-fuchsia-500 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-blue-500/40 hover:bg-blue-500 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-sky-500/40 hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter size={17} />
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FaGithub size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 transition hover:text-violet-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/albums"
                  className="text-sm text-gray-400 transition hover:text-violet-400"
                >
                  Albums
                </a>
              </li>

              <li>
                <a
                  href="/favorites"
                  className="text-sm text-gray-400 transition hover:text-violet-400"
                >
                  Favorites
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-400 transition hover:text-violet-400"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-1 text-sm text-gray-400 transition hover:text-fuchsia-400"
                >
                  Community
                  <MdArrowOutward
                    size={16}
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-fuchsia-400"
                >
                  Photography Tips
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-fuchsia-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-fuchsia-400"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-orange-400/10 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">
                Stay inspired ✨
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Get photography inspiration and new gallery updates.
              </p>
            </div>

            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-fuchsia-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PhotoGallery. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with
            <MdFavorite
              size={16}
              color="#d946ef"
            />
            for photography lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



