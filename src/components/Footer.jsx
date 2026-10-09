import { socialLinks } from "../data/portfolioData";

export default function Footer({ onWorkClick }) {
  return (
    <footer className="flex justify-between items-center pt-6 border-t border-gray-900/40 w-full mt-auto">
      <div className="flex gap-3">
        <button
          onClick={onWorkClick}
          className="flex items-center gap-2 px-5 py-2 bg-neutral-900 text-white border border-gray-800 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all shadow-md hover:scale-105 active:scale-95"
        >
          My Works <span className="text-[10px]">📊</span>
        </button>
        <a
          href={socialLinks.downloadCVGDrive}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 text-gray-400 border border-transparent hover:border-gray-800 rounded-full text-xs font-medium hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          Download CV <span className="text-[10px]">📥</span>
        </a>
      </div>

      <div
        onClick={onWorkClick}
        className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-gray-800/80 rounded-full group cursor-pointer hover:border-purple-500/40 transition-colors"
        title="Explore Works"
      >
        <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
          ↓
        </span>
        <div className="absolute inset-0 border border-dashed border-gray-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
      </div>
    </footer>
  );
}
