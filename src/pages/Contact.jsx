import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  return (
    <div className="space-y-10 animate-fadeIn my-auto text-left w-full py-6 max-h-[72vh] overflow-y-auto pr-2 custom-scrollbar">
      {/* Tombol Aksi Pesan */}
      <div>
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 text-purple-200 text-xs font-semibold rounded-full border border-purple-500/30 shadow-md transition-all hover:scale-105 active:scale-95"
        >
          Send Message ✨
        </a>
      </div>

      {/* Tautan Sosial Media Halaman Contact */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all hover:scale-105"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all hover:scale-105"
        >
          <FaInstagram />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all hover:scale-105"
        >
          <FaGithub />
        </a>
        <a
          href={socialLinks.email}
          aria-label="Send Email"
          className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all hover:scale-105"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Teks Deskripsi */}
      <div className="max-w-2xl space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug">
          {personalInfo.contactPrompt}
        </h2>
      </div>

      {/* Info Baris Bawah */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-900/40 text-left">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            Location
          </span>
          <span className="text-xs text-gray-400 font-medium mt-1 block">
            {personalInfo.basedIn}
          </span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            Phone / WA
          </span>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-purple-300 font-medium mt-1 block transition-colors"
          >
            {personalInfo.phone}
          </a>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            Email
          </span>
          <a
            href={socialLinks.email}
            className="text-xs text-gray-400 hover:text-purple-300 font-medium mt-1 block transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
}
