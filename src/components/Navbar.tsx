
import { useState } from "react";
import {
  Menu,
  X,
  Images,
  Heart,

  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Albums", href: "/albums" },
  { name: "Favorites", href: "/favorites" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/20 bg-white/80 shadow-lg shadow-purple-100/50 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-5 sm:px-6">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-md">
              <Images size={21} />
              
              <div className="absolute -right-1 -top-1">
                <Sparkles size={13} fill="white" />
              </div>
            </div>

            <div className="text-xl font-extrabold tracking-tight">
              <span className="text-gray-900">Photo</span>
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full bg-gray-100/80 p-1 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-white text-violet-600 shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-violet-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Favorite Button */}
          <a
            href="/favorites"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:flex"
          >
            <Heart size={17} />
            <span>Favorites</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl bg-gray-100 p-2.5 text-gray-700 transition hover:bg-violet-100 hover:text-violet-600 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200/70 px-4 pb-4 md:hidden">
            <div className="mt-3 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-violet-50 text-violet-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Favorite Button */}
              <a
                href="/favorites"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-md"
              >
                <Heart size={17} />
                Favorites
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

