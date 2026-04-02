export interface Project {
  id: number;
  title: string;
  description: string;
  techHighlight: string; // The "How" for recruiters
  tags: string[];
  githubLink: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Laboratory Sample Management System",
    description: "A web-based system for tracking clinical samples and automating notifications.",
    techHighlight: "Integrated OpenAI API for predictive bottleneck analysis and built a Node.js notification engine for real-time sample status.",
    tags: ["Node.js", "MySQL", "OpenAI API", "Express"],
    githubLink: "https://github.com/yourusername/lab-system",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 2,
    title: "MediMap Android App",
    description: "Location-based clinic discovery application with authentication.",
    techHighlight: "Optimized Google Maps API integration with Firebase for real-time location querying and user data persistence.",
    tags: ["Kotlin", "Firebase", "Google Maps API", "Android SDK"],
    githubLink: "https://github.com/yourusername/medimap",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 3,
    title: "Stock Management System",
    description: "Full-stack inventory tracking and product analytics system.",
    techHighlight: "Built a robust Spring Boot REST API with PostgreSQL to manage complex relational data for inventory auditing.",
    tags: ["Spring Boot", "PostgreSQL", "React", "TypeScript"],
    githubLink: "https://github.com/yourusername/stock-system",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 4,
    title: "Personal Expenses Tracker",
    description: "Record management system with visual analytics dashboards.",
    techHighlight: "Developed complex MySQL queries to generate monthly financial reports visualized via Chart.js integration.",
    tags: ["Laravel", "PHP", "MySQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/expense-tracker",
    image: "https://picsum.photos/400/250",
  }
];