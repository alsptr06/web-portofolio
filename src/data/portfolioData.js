import profileImg from "../assets/profile.jpeg";

export const personalInfo = {
  name: "Alwisyah Putra",
  shortName: "Alwi",
  avatar: profileImg,
  statusEmoji: "🐱",
  specialization: "Software Engineering and Robotics Simulation",
  basedIn: "Jakarta, Indonesia",
  email: "alwisyah61@gmail.com",
  phone: "+62 812-3456-7890",
  tagline: "Let's meet!",
  headline: "I'm Alwisyah Putra",
  subHeadline1: "Robotics Simulation",
  subHeadline2: "and software dev.",
  aboutSlogan: "Turning complex problems into functional robotics simulation.",
  aboutBio1:
    "An INFJ Computer Science student specializing in Software Engineering and Robotics Simulation. Experienced in building rigorous environment simulations using ROS/ROS2 and Gazebo, as well as applying numerical methods to model complex dynamics.",
  aboutBio2:
    "Driven by a professional 'silent but impactful' ethos, I focus on bridging the gap between advanced software design patterns and sustainable computing to create clean, optimized robotic systems.",
  contactPrompt:
    "Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/alwisyah-putra-87887a326/",
  instagram: "https://instagram.com/alsptr06_",
  github: "https://github.com/PutraUp",
  email: "mailto:alwisyah61@gmail.com",
  whatsapp:
    "https://wa.me/6281234567890?text=Halo%20Alwisyah,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda.",
  myWorksGDrive: "https://drive.google.com/drive/folders/MASUKKAN_ID_FOLDER_GDRIVE_KAMU",
  downloadCVGDrive: "https://drive.google.com/file/d/MASUKKAN_ID_FILE_CV_KAMU/view?usp=sharing",
};

export const statsData = [
  { title: "4th", sub: "Semester Student" },
  { title: "2+ Years", sub: "Robotics Research Experience" },
  { title: "10+", sub: "Simulations Done" },
];

export const educationData = [
  {
    period: "2024 - Present",
    title: "Undergraduate Computer Science",
    institution: "Universitas Pertamina",
    description:
      "Fokus mendalami Rekayasa Perangkat Lunak, Metode Numerik, dan aktif sebagai Koordinator Mata Kuliah.",
  },
  {
    period: "2026",
    title: "Numerical Methods & Data Modeling",
    institution: "Academic Project Course",
    description:
      "Menerapkan metode Runge-Kutta Orde 4 (RK4) menggunakan Python untuk simulasi perubahan polutan udara lingkungan.",
  },
];

export const experienceData = [
  {
    period: "2026 - Present",
    title: "Robotics Research Assistant",
    organization: "Robotics Laboratory Project",
    isHighlighted: true,
    description:
      "Membangun lingkungan simulasi robotik yang rigid menggunakan ekosistem Robot Operating System (ROS/ROS2) dan Gazebo.",
  },
  {
    period: "2026",
    title: "Ketua Divisi Minat & Bakat",
    organization: "Himpunan Mahasiswa Ilmu Komputer (HMIK)",
    isHighlighted: false,
    description:
      "Memimpin perancangan program kerja divisi, koordinasi internal kepengurusan organisasi, serta manajemen acara tahunan.",
  },
];

export const toolsData = [
  { name: "ROS / ROS2", key: "ros", iconName: "SiRos", hoverColor: "text-[#22314E]" },
  { name: "Python", key: "python", iconName: "SiPython", hoverColor: "text-[#3776AB]" },
  { name: "Java", key: "java", iconName: "SiOpenjdk", hoverColor: "text-[#EA2D2E]" },
  { name: "Blender", key: "blender", iconName: "SiBlender", hoverColor: "text-[#F5792A]" },
  { name: "Linux OS", key: "linux", iconName: "SiLinux", hoverColor: "text-[#FCC624]" },
  { name: "VS Code", key: "vscode", iconName: "VscCode", hoverColor: "text-[#007ACC]" },
  { name: "Git", key: "git", iconName: "SiGit", hoverColor: "text-[#F05032]" },
  { name: "Docker", key: "docker", iconName: "SiDocker", hoverColor: "text-[#2496ED]" },
  { name: "React", key: "react", iconName: "SiReact", hoverColor: "text-[#61DAFB]" },
  { name: "Three.js", key: "three", iconName: "SiThreedotjs", hoverColor: "text-[#FFFFFF]" },
];

export const projectsData = [
  {
    id: 1,
    title: "Autonomous Robot 3D Simulation",
    category: "Robotics",
    description:
      "Simulasi kinematika dan navigasi otonom robotik di lingkungan Gazebo terintegrasi dengan ROS2 Navigation Stack.",
    tags: ["ROS2", "Gazebo", "Python", "URDF"],
    githubUrl: "https://github.com/PutraUp",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Air Pollutant Diffusion Simulation (RK4)",
    category: "Simulation",
    description:
      "Implementasi pemodelan matematis difusi polutan udara menggunakan Runge-Kutta Order 4 berbasis komputasi Python.",
    tags: ["Python", "NumPy", "Matplotlib", "Numerical Method"],
    githubUrl: "https://github.com/PutraUp",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Cyberpunk 3D Portfolio Web",
    category: "Web Dev",
    description:
      "Situs portofolio interaktif dengan model 3D Three.js GLTF, animasi dinamis Tailwind CSS v4, dan arsitektur modular React.",
    tags: ["React 19", "Vite", "Three.js", "Tailwind CSS"],
    githubUrl: "https://github.com/PutraUp/Alwisyah-Portofolio_Web",
    liveUrl: "http://70.153.85.175:3000",
  },
  {
    id: 4,
    title: "Microservices Deployment Pipeline",
    category: "DevOps",
    description:
      "Automated CI/CD workflow GitHub Actions ke Azure VPS VM dengan Docker containerization dan Nginx reverse proxy.",
    tags: ["Docker", "GitHub Actions", "Azure VM", "Nginx"],
    githubUrl: "https://github.com/PutraUp",
    liveUrl: null,
  },
];

