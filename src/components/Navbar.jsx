import { socialLinks } from "../data/portfolioData";

export default function Navbar({ menus, currentPage, setCurrentPage }) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
      <nav className="flex items-center gap-1 sm:gap-2 md:gap-3 bg-[#131318]/60 p-1.5 rounded-full border border-gray-900/60 backdrop-blur-md">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setCurrentPage(menu)}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all duration-300 font-medium ${
              currentPage === menu
                ? "bg-neutral-800 text-white border border-gray-700/50 shadow-inner"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {menu}
          </button>
        ))}
      </nav>

      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-gradient-to-r from-purple-300 to-pink-200 text-neutral-900 text-xs font-bold rounded-full hover:opacity-90 shadow-lg shadow-purple-900/20 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
      >
        Let's Talk <span className="text-[10px]">💬</span>
      </a>
    </header>
  );
}
