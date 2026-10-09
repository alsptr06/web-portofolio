import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Robotics", "Simulation", "Web Dev", "DevOps"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-6 animate-fadeIn my-auto text-left w-full py-4 max-h-[72vh] overflow-y-auto pr-2 custom-scrollbar">
      {/* Mini Tag & Judul */}
      <div className="space-y-2">
        <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">
          • Featured Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-white max-w-2xl leading-snug">
          Explore recent software, robotics simulations, and research initiatives.
        </h2>
      </div>

      {/* Filter Kategori */}
      <div className="flex flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm"
                : "bg-[#141419] text-gray-400 border border-gray-900 hover:text-white hover:border-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#141419] border border-gray-900/70 hover:border-purple-500/30 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-neutral-900 text-purple-300 border border-purple-900/40">
                  {project.category}
                </span>
                <div className="flex items-center gap-3 text-gray-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="Live Preview"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 mt-auto border-t border-gray-900/40">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded bg-neutral-900/70 text-gray-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
