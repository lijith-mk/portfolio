export const personalInfo = {
  name: "Lijith MK",
  title: "Full Stack Developer",
  subtitle: "MCA Graduate | MERN Stack | Problem Solver",
  email: "lijithmk@email.com",
  phone: "+91 6238308205",
  location: "Kannur, Kerala",
  github: "https://github.com/lijithmk",
  linkedin: "https://linkedin.com/in/lijithmk",
  bio: "Passionate MCA graduate with expertise in building modern, scalable web applications using the MERN stack. I love turning complex problems into elegant, user-friendly solutions.",
  resumeLink: "#",
  photo: "https://res.cloudinary.com/dxspcarx8/image/upload/v1776607217/rcwknmjqpdu71824mfnj.jpg",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Redux", level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 82 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Linux", level: 72 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Blockchain-Based Job & Credential Verification Platform",
    description:
      "Built an advanced job portal integrating AI/ML and blockchain to enable secure hiring, fraud detection, and verifiable credentials. The system combines XGBoost, Graph Neural Networks, and SHAP explainability to provide intelligent and transparent decision-making.",
    tech: ["React", "Node.js", "MongoDB", "Blockchain", "XGBoost", "GNN", "SHAP", "Web3.js"],
    category: "Blockchain",
    github: "#",
    live: "#",
    image: "🔐",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Job & Credential Verification Mobile App (React Native - Expo)",
    description:
      "Developed a cross-platform mobile application using React Native (Expo) for job discovery, credential verification, and fraud detection. The app integrates AI models and blockchain verification to provide secure, real-time, and intelligent hiring solutions.",
    tech: ["React Native", "Expo", "Blockchain", "AI/ML", "Node.js", "MongoDB"],
    category: "AI",
    github: "#",
    live: "#",
    image: "📱",
    featured: true,
  },
  {
    id: 3,
    title: "Flutter E-Commerce Shopping App",
    description:
      "Developed a cross-platform shopping application using Flutter, featuring product browsing, cart management, and order processing with a clean and responsive UI. Includes product listing with categories, add to cart & cart management, order placement, user authentication, product details with images, and smooth navigation transitions.",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    category: "MERN",
    github: "#",
    live: "#",
    image: "🛍️",
    featured: true,
  },
  {
    id: 4,
    title: "Shope – React Shopping Cart Web Application",
    description:
      "Developed a responsive e-commerce web application using React.js that allows users to browse products, manage a shopping cart, and simulate a complete checkout experience with dynamic state management. Features product listing with images and pricing, add/remove from cart, real-time quantity updates, cart total calculation, and smooth navigation using React Router.",
    tech: ["React.js", "React Router", "Context API", "Tailwind CSS"],
    category: "MERN",
    github: "#",
    live: "#",
    image: "🛒",
    featured: false,
  },
  {
    id: 5,
    title: "SeatSmart Dashboard",
    description:
      "A real-time dashboard for monitoring seat occupancy using FSR (Force Sensing Resistor) and PIR (Passive Infrared) sensors with an ESP32 microcontroller. Sensor data is transmitted via serial communication to a Node.js server and pushed live to the web dashboard using WebSocket technology. Features real-time occupancy detection, visual sensor data display, and a responsive UI for desktop and mobile.",
    tech: ["Node.js", "WebSocket", "ESP32", "Arduino", "FSR Sensor", "PIR Sensor", "Docker"],
    category: "AI",
    github: "#",
    live: "#",
    image: "🪑",
    featured: false,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag-and-drop, team workspaces, and JWT authentication.",
    tech: ["React", "Express", "MongoDB", "Socket.io", "Redux"],
    category: "MERN",
    github: "#",
    live: "#",
    image: "📋",
    featured: true,
  },
  {
    id: 3,
    title: "Blog CMS Platform",
    description:
      "Content management system with rich text editor, user roles, comments, and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB", "Quill.js"],
    category: "MERN",
    github: "#",
    live: "#",
    image: "✍️",
    featured: true,
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot powered by OpenAI API with context memory, markdown rendering, and conversation history.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    category: "AI",
    github: "#",
    live: "#",
    image: "🤖",
    featured: false,
  },
  {
    id: 5,
    title: "AI Image Generator",
    description:
      "Generate stunning images from text prompts using Stable Diffusion API with gallery and download features.",
    tech: ["React", "Python", "Stable Diffusion", "FastAPI"],
    category: "AI",
    github: "#",
    live: "#",
    image: "🎨",
    featured: false,
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description:
      "Decentralized NFT marketplace on Ethereum with wallet connect, minting, buying and selling functionality.",
    tech: ["React", "Solidity", "Web3.js", "Hardhat", "IPFS"],
    category: "Blockchain",
    github: "#",
    live: "#",
    image: "🔗",
    featured: false,
  },
  {
    id: 7,
    title: "DeFi Dashboard",
    description:
      "Decentralized finance dashboard to track wallet assets, token prices, and liquidity pool positions.",
    tech: ["React", "Ethers.js", "Web3", "Tailwind CSS"],
    category: "Blockchain",
    github: "#",
    live: "#",
    image: "💎",
    featured: false,
  },
  {
    id: 8,
    title: "Chat Application",
    description:
      "Real-time chat app with private/group messaging, online status, and media sharing.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "MERN",
    github: "#",
    live: "#",
    image: "💬",
    featured: false,
  },
];

export const experience = [
  {
    role: "Flutter Developer Intern",
    company: "RISS Technologies",
    duration: "April 2025 – April 2025 (1 Month)",
    description: [
      "Completed a one-month internship as a Flutter Developer at RISS Technologies",
      "Built and enhanced mobile application interfaces using Flutter",
      "Developed cross-platform applications and implemented UI components",
      "Gained hands-on experience in real-world app development workflows",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University Name, Kerala",
    year: "2022 – 2024",
    grade: "CGPA: 8.5/10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "College Name, Kerala",
    year: "2019 – 2022",
    grade: "CGPA: 8.2/10",
  },
];
