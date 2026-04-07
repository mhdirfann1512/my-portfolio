export interface Project {
  id: number;
  title: string;
  description: string;
  techHighlight: string;
  tags: string[];
  githubLink: string;
  image: string; // This remains your primary thumbnail
  screenshots?: string[]; // New: Array for the hover gallery
}

export const projects: Project[] = [

    {
    id: 1,
    title: "Personal Expenses Tracker",
    description: "Record management system with visual analytics dashboards.",
    techHighlight: "Developed a modern full-stack application using Laravel 12 and Alpine.js, featuring dynamic month-over-month financial trend analysis and an optimized asset pipeline via Vite 7.0.",
    tags: ["Laravel", "PHP", "MySQL", "Chart.js", "Blade", "Tailwind", "Vite"],
    githubLink: "https://github.com/mhdirfann1512/Personal-expenses-tracker",
    image: "/project4/home.png",
    screenshots: [
      "/project4/home.png",
      "/project4/login.png",
      "/project4/register.png",
      "/project4/dashboard1.png",
      "/project4/dashboard2.png",
      "/project4/add.png",
      "/project4/analysis1.png",
      "/project4/analysis2.png",
    ]
  },
  {
    id: 2,
    title: "Laboratory Sample Management System",
    description: "A web-based system for tracking clinical samples and automating notifications.",
    techHighlight: "Engineered an AI-integrated(OpenAI) Node.js platform featuring a predictive expiry engine and automated cron-job notifications to ensure sample integrity and laboratory efficiency.",
    tags: ["Node.js", "MySQL", "OpenAI API", "Express", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/mhdirfann1512/Web-Based-Laboratory-Sample-Management-System-Final-Year-Project-",
    image: "/project1/homepage.png",
    screenshots: [
      "/project1/homepage.png",
      "/project1/userdashboard.png",
      "/project1/registersample.png",
      "/project1/managesample.png",
      "/project1/managesample2.png",
      "/project1/disposesample.png",
      "/project1/profile.png",
      "/project1/ranking.png",
      "/project1/admindashboard.png",
      "/project1/managesampletype.png",
      "/project1/managesample2.png",
      "/project1/managestaff.png",
      "/project1/report.png",
    ]
  },
  {
    id: 3,
    title: "Stock Management System",
    description: "Full-stack inventory tracking and product analytics system.",
    techHighlight: "Architected a high-performance Java Spring Boot and PostgreSQL backend with a reactive JavaScript dashboard to provide real-time inventory analytics and secure, role-based resource tracking.",
    tags: ["Spring Boot", "PostgreSQL", "HTML", "CSS", "JavaScript", "Tailwind"],
    githubLink: "https://github.com/mhdirfann1512/Stock-management-system",
    image: "/project3/dashboard.png",
    screenshots: [
      "/project3/dashboard.png",
      "/project3/inventory.png",
      "/project3/category.png",
      "/project3/alert.png",
      "/project3/settings.png",
    ]
  },
  {
     id: 4,
    title: "MediMap Clinic Locator Android App",
    description: "Location-based clinic discovery application with authentication.",
    techHighlight: "Built a native Android application integrating Google Maps API and Firebase to deliver real-time geospatial navigation and seamless healthcare accessibility for local communities",
    tags: ["Java", "Firebase", "Google Maps API", "Android SDK"],
    githubLink: "https://github.com/mhdirfann1512/MediMap-Clinik-Locator-Mobile-App",
    image: "/project2/welcome.jpg",
    screenshots: [
      "/project2/map.jpg",
      "/project2/welcome.jpg",
      "/project2/map.jpg",
      "/project2/details.jpg",
      "/project2/navigation.jpg",
      "/project2/details.jpg",
      "/project2/call.jpg",
      "/project2/feedback.jpg",
    ]
  }
];