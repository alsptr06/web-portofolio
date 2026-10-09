import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const menus = ["Home", "Portfolio", "About Me", "Resume", "Contact"];

  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return <Home onNavigate={setCurrentPage} />;
      case "Portfolio":
        return <Portfolio />;
      case "About Me":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return (
          <div className="text-sm text-gray-500 animate-fadeIn pt-16">
            Halaman {currentPage} sedang disiapkan...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-[#bcbcbc] font-sans flex p-4 md:p-8 justify-center relative overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* 🔮 EFEK GLOW BACKGROUND (Aura Ungu) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Container Utama */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 z-10">
        {/* ==================== SIDEBAR KIRI ==================== */}
        <Sidebar />

        {/* ==================== KONTEN KANAN ==================== */}
        <div className="flex-1 flex flex-col justify-between min-h-[85vh] lg:py-2">
          {/* Top Bar Navigasi */}
          <Navbar
            menus={menus}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          {/* Isi Konten Dinamis Halaman */}
          <main className="flex-1 flex flex-col justify-between w-full max-w-full text-left pb-4">
            {renderContent()}
          </main>

          {/* Footer Bar */}
          <Footer onWorkClick={() => setCurrentPage("Portfolio")} />
        </div>
      </div>
    </div>
  );
}
