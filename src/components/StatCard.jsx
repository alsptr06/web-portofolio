
export default function StatCard({ title, sub }) {
  return (
    <div className="bg-[#141419] border border-gray-900/60 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-xl hover:border-purple-500/20 transition-all">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold max-w-[120px] leading-normal">
        {sub}
      </p>
    </div>
  );
}
