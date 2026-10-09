import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[320px] bg-[#131318] border border-gray-900/60 rounded-3xl p-6 flex flex-col justify-between items-center shadow-2xl shrink-0 min-h-[inherit]">
      {/* Bagian Atas: Nama & Foto Profil */}
      <div className="w-full space-y-5">
        {/* Header: Nama & Icon */}
        <div className="flex items-center gap-3 w-full px-1">
          <div className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center border border-gray-700">
            <span className="text-xs">{personalInfo.statusEmoji}</span>
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm leading-tight">
              {personalInfo.name}
            </h2>
          </div>
        </div>

        {/* Foto Profil */}
        <div className="w-full aspect-[4/4.5] bg-[#1a1a24] rounded-2xl flex items-center justify-center overflow-hidden shadow-inner border border-gray-900/40">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Bagian Tengah: Info Teks Detail & Sosmed */}
      <div className="w-full flex-1 flex flex-col justify-center items-center my-8 space-y-6">
        <div className="space-y-4 text-center w-full">
          <div>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              Specialization:
            </p>
            <p className="text-sm text-gray-200 font-medium mt-1 px-2 leading-relaxed">
              {personalInfo.specialization}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              Based in:
            </p>
            <p className="text-sm text-gray-200 font-medium mt-1">
              {personalInfo.basedIn}
            </p>
          </div>
        </div>

        {/* Tautan Sosial Media Sidebar Kiri */}
        <div className="flex justify-center gap-4 text-lg text-gray-400 pt-2">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email"
            className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bagian Bawah: Tombol Kapsul Gradasi */}
      <div className="w-full mt-auto">
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center py-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 text-purple-200 text-xs font-semibold rounded-full border border-purple-500/30 shadow-lg shadow-purple-950/20 transition-all tracking-wide"
        >
          Let's Work Together!
        </a>
      </div>
    </aside>
  );
}
