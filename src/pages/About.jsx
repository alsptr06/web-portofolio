import StatCard from "../components/StatCard";
import { personalInfo, statsData, socialLinks } from "../data/portfolioData";

export default function About() {
  return (
    <div className="space-y-6 animate-fadeIn my-auto text-left w-full py-4 max-h-[72vh] overflow-y-auto pr-2 custom-scrollbar">
      {/* Mini Tag */}
      <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">
        • About Me
      </p>

      {/* Slogan */}
      <h2 className="text-3xl md:text-4xl font-medium text-white max-w-2xl leading-snug">
        {personalInfo.aboutSlogan}
      </h2>

      {/* 3 Kolom Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 w-full">
        {statsData.map((stat, idx) => (
          <StatCard key={idx} title={stat.title} sub={stat.sub} />
        ))}
      </div>

      {/* Deskripsi & Informasi Kontak */}
      <div className="grid md:grid-cols-3 gap-8 text-xs leading-relaxed text-gray-400 pt-2">
        <div className="space-y-4 md:col-span-2">
          <p>{personalInfo.aboutBio1}</p>
          <p>{personalInfo.aboutBio2}</p>
          <div className="pt-2">
            <a
              href={socialLinks.downloadCVGDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-gray-800 text-white rounded-full font-medium hover:bg-neutral-800 transition-all hover:scale-105"
            >
              Download CV 📄
            </a>
          </div>
        </div>

        {/* Tabel Metadata Kanan */}
        <div className="space-y-4 border-l border-gray-900/60 pl-6">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">
              Name
            </span>
            <span className="text-gray-200 font-medium">{personalInfo.name}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">
              Email
            </span>
            <span className="text-gray-200 font-medium">{personalInfo.email}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">
              Location
            </span>
            <span className="text-gray-200 font-medium">{personalInfo.basedIn}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
