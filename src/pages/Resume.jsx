import {
  SiPython,
  SiOpenjdk,
  SiRos,
  SiLinux,
  SiBlender,
  SiDocker,
  SiGit,
  SiReact,
  SiThreedotjs,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { educationData, experienceData, toolsData } from "../data/portfolioData";

export default function Resume() {
  const getToolIcon = (key) => {
    switch (key) {
      case "ros":
        return <SiRos className="text-3xl text-gray-400 group-hover:text-[#22314E] transition-colors duration-300" />;
      case "python":
        return <SiPython className="text-3xl text-gray-400 group-hover:text-[#3776AB] transition-colors duration-300" />;
      case "java":
        return <SiOpenjdk className="text-3xl text-gray-400 group-hover:text-[#EA2D2E] transition-colors duration-300" />;
      case "blender":
        return <SiBlender className="text-3xl text-gray-400 group-hover:text-[#F5792A] transition-colors duration-300" />;
      case "linux":
        return <SiLinux className="text-3xl text-gray-400 group-hover:text-[#FCC624] transition-colors duration-300" />;
      case "vscode":
        return <VscCode className="text-3xl text-gray-400 group-hover:text-[#007ACC] transition-colors duration-300" />;
      case "git":
        return <SiGit className="text-3xl text-gray-400 group-hover:text-[#F05032] transition-colors duration-300" />;
      case "docker":
        return <SiDocker className="text-3xl text-gray-400 group-hover:text-[#2496ED] transition-colors duration-300" />;
      case "react":
        return <SiReact className="text-3xl text-gray-400 group-hover:text-[#61DAFB] transition-colors duration-300" />;
      case "three":
        return <SiThreedotjs className="text-3xl text-gray-400 group-hover:text-white transition-colors duration-300" />;
      default:
        return <VscCode className="text-3xl text-gray-400 group-hover:text-purple-400 transition-colors" />;
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn my-auto text-left w-full py-6 max-h-[72vh] overflow-y-auto pr-2 custom-scrollbar">
      {/* 🎓 MY EDUCATION */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          My education
        </h2>
        <div className="border-t border-gray-900/60 divide-y divide-gray-900/40">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-4 items-start text-xs"
            >
              <div className="text-gray-500 font-medium">{edu.period}</div>
              <div className="sm:col-span-2 space-y-1">
                <h3 className="text-white font-medium text-sm">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
              <div className="text-gray-400/80 leading-relaxed">
                {edu.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💼 WORK EXPERIENCE */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          Work experience
        </h2>
        <div className="border-t border-gray-900/60 divide-y divide-gray-900/40">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-4 items-start text-xs"
            >
              <div className="text-gray-500 font-medium">{exp.period}</div>
              <div className="sm:col-span-2 space-y-1">
                <h3 className="text-white font-medium text-sm">{exp.title}</h3>
                <p
                  className={
                    exp.isHighlighted
                      ? "text-purple-400/90 font-medium"
                      : "text-gray-400"
                  }
                >
                  {exp.organization}
                </p>
              </div>
              <div className="text-gray-400/80 leading-relaxed">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠️ MY FAVOURITE TOOLS */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          My favourite tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 pt-2">
          {toolsData.map((tool) => (
            <div
              key={tool.key}
              className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group"
            >
              {getToolIcon(tool.key)}
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
