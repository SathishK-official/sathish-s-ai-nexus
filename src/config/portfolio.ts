// Portfolio Configuration - Easily customizable
// Update this file to change content across the portfolio

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export const siteConfig = {
  name: "SATHISH K",
  role: "AI",
  roles: ["ENGINEER", "LLM SPECIALIST", "RAG DEVELOPER", "INNOVATOR"],
  email: "sathishkrishnamoorthi.contact@gmail.com",
  phone: "+91-8667017419",
  location: "Nagappattinam, Tamil Nadu, India - 611002",
  tagline: "AI Engineer Specializing in LLM Applications and RAG Systems",
  quote: "Building production-ready AI solutions that serve real users with 90%+ accuracy.",
  
  // Social Links
  social: {
    github: "https://github.com/SathishK-official",
    linkedin: "https://linkedin.com/in/sathishkrishnamoorthi-lnkin",
    gmail: "mailto:sathishkrishnamoorthi.contact@gmail.com",
    instagram: "https://www.instagram.com/sathish.offixial/",
  },

  // About Section
  about: {
    greeting: "Hello, I'm",
    description: `AI Engineer specializing in LLM applications and RAG systems. Built 5 production-ready AI projects serving 100+ users with 90%+ accuracy. Proficient in Python, LangChain, OpenAI APIs, and vector databases. Strong expertise in prompt engineering, NLP, and deploying scalable ML applications. Passionate about building innovative AI products.`,
    highlights: [
      "5 Production-ready AI projects with 100+ users",
      "Expert in LangChain, RAG Systems & OpenAI APIs",
      "Strong in Prompt Engineering & NLP",
      "Proficient in Python, TensorFlow & PyTorch",
    ],
  },

  // Navigation
  navigation: [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
  ],
};

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Sir Issac Newton College of Engineering and Technology",
    year: "2022 - 2026",
    description: "Relevant Coursework: Machine Learning, Deep Learning, NLP, RAG Systems, Linear Algebra, Statistics",
    gpa: "7.5/10 CGPA",
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Technical Workshop Coordinator",
    company: "College",
    year: "2023 - 2024",
    description: "Coordinated AI/ML workshops for 100+ students focusing on LLM applications and RAG systems. Mentored peers on project development, prompt engineering, and production deployment.",
    type: "Leadership",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "DocuMind AI - RAG Document Intelligence",
    category: "RAG / LLM",
    thumbnail: project1,
    description: "Built RAG pipeline for multi-format documents achieving 90%+ answer accuracy with semantic search. Reduced document search time by 80% with intelligent context retrieval and source citations. Deployed with Streamlit and Docker, serving 100+ users with <3s response time.",
    technologies: ["LangChain", "ChromaDB", "OpenAI", "Streamlit", "Docker"],
    demoUrl: "",
    githubUrl: "https://github.com/sathishk",
    images: [project1],
    videoUrl: "",
  },
  {
    id: 2,
    title: "CareerGPT - AI Career Platform",
    category: "NLP / AI",
    thumbnail: project2,
    description: "Developed resume parser with 95%+ accuracy and job matching system with 88% fit accuracy. Integrated GPT-4 for personalized learning roadmaps and interview question generation. Created interactive dashboard with skill gap analysis and salary benchmarking.",
    technologies: ["GPT-4", "spaCy", "NLP", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sathishk",
    images: [project2],
    videoUrl: "",
  },
  {
    id: 3,
    title: "YouTube Video Summarizer",
    category: "RAG / NLP",
    thumbnail: project3,
    description: "Implemented RAG architecture with FAISS for semantic search with timestamp citations. Generated summaries with 85%+ comprehension accuracy across 10+ languages.",
    technologies: ["LangChain", "FAISS", "RAG", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sathishk",
    images: [project3],
    videoUrl: "",
  },
  {
    id: 4,
    title: "ATS Resume Analyzer",
    category: "NLP / ML",
    thumbnail: project4,
    description: "Built resume parser with 96% accuracy and ATS scoring algorithm with visual analytics. Helps job seekers optimize their resumes for applicant tracking systems.",
    technologies: ["spaCy", "GPT-3.5", "TF-IDF", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sathishk",
    images: [project4],
    videoUrl: "",
  },
  {
    id: 5,
    title: "LinkedIn Post Generator",
    category: "Generative AI",
    thumbnail: project5,
    description: "Engineered prompt templates with 92% user satisfaction and engagement prediction. Generates professional LinkedIn content with AI-powered optimization.",
    technologies: ["GPT-3.5", "LangChain", "NLP", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sathishk",
    images: [project5],
    videoUrl: "",
  },
];

export const skillsData = {
  libsAndAlgorithms: [
    { name: "RAG Systems", level: 92 },
    { name: "Prompt Engineering", level: 95 },
    { name: "NLP (spaCy/NLTK)", level: 88 },
    { name: "CNN/Transfer Learning", level: 82 },
    { name: "Vector Databases", level: 88 },
    { name: "LLMs (GPT/Gemini)", level: 90 },
    { name: "Deep Learning", level: 85 },
  ],
  tools: [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 90 },
    { name: "LangChain", level: 92 },
    { name: "OpenAI APIs", level: 90 },
    { name: "Hugging Face", level: 85 },
  ],
  libraries: [
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 92 },
    { name: "Matplotlib", level: 85 },
    { name: "Seaborn", level: 85 },
  ],
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 85 },
    { name: "Java", level: 30, isLearning: true },
  ],
  applications: [
    { name: "Git & GitHub", level: 90 },
    { name: "Jupyter", level: 95 },
    { name: "Docker", level: 80 },
    { name: "Flask", level: 85 },
    { name: "Streamlit", level: 88 },
    { name: "VS Code", level: 90 },
  ],
  mathematics: [
    { name: "Linear Algebra", level: 85 },
    { name: "Statistics", level: 88 },
    { name: "Probability", level: 85 },
  ],
};

export const achievementsData = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    category: "Certification",
    thumbnail: project1,
    description: "Completed comprehensive Machine Learning course covering supervised, unsupervised learning, and best practices.",
    date: "2024",
    organization: "Coursera",
    images: [project1],
  },
  {
    id: 2,
    title: "Deep Learning Certification",
    category: "Certification",
    thumbnail: project2,
    description: "Advanced deep learning course covering neural networks, CNNs, and modern architectures.",
    date: "2024",
    organization: "Great Learning",
    images: [project2],
  },
  {
    id: 3,
    title: "AI/ML Workshop Organizer & Mentor",
    category: "Leadership",
    thumbnail: project3,
    description: "Coordinated AI/ML workshops for 100+ students focusing on LLM applications and RAG systems. Mentored peers on project development and production deployment.",
    date: "2023 - 2024",
    organization: "College",
    images: [project3],
  },
  {
    id: 4,
    title: "5 Production AI Projects",
    category: "Development",
    thumbnail: project4,
    description: "GitHub portfolio with 5 production projects with live demos and 100+ combined users.",
    date: "2024 - 2025",
    organization: "GitHub",
    images: [project4],
  },
  {
    id: 5,
    title: "ATS Resume Analyzer Featured",
    category: "Recognition",
    thumbnail: project5,
    description: "ATS Resume Analyzer project featured on LinkedIn for its innovative approach to resume optimization.",
    date: "2024",
    organization: "LinkedIn",
    images: [project5],
  },
];
