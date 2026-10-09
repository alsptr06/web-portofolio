import RobotModel from "../components/RobotModel";
import { personalInfo } from "../data/portfolioData";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-between animate-fadeIn text-left">
      {/* Area Model Robot Interaktif */}
      <div className="w-full flex justify-center items-center py-2 mt-4 pb-4">
        <RobotModel fileName="robot.glb" />
      </div>

      {/* Area Teks Hero */}
      <div className="space-y-5 mt-auto pt-4 pb-2">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 tracking-wider">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></span>
          {personalInfo.tagline}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.2]">
          {personalInfo.headline} <br />
          <span className="text-neutral-400 font-normal">
            {personalInfo.subHeadline1}
          </span>{" "}
          <br />
          <span className="text-neutral-400 font-normal">
            {personalInfo.subHeadline2}
          </span>
        </h1>
      </div>
    </div>
  );
}
