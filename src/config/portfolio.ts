// Portfolio Configuration - Easily customizable
// Update this file to change content across the portfolio

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

export const siteConfig = {
  name: "SATHISH KRISHNAMOORTHI",
  role: "AI/ML",
  roles: ["ENGINEER", "DEVELOPER", "RESEARCHER", "INNOVATOR"],
  email: "sathish@example.com",
  tagline: "Transforming Data into Intelligence, One Algorithm at a Time",
  quote: "In the realm of artificial intelligence, we don't just write code — we architect the future of human-machine collaboration.",
  
  // Social Links
  social: {
    github: "https://github.com/sathishkrishnamoorthi",
    linkedin: "https://linkedin.com/in/sathishkrishnamoorthi",
    gmail: "mailto:sathish@example.com",
    instagram: "https://instagram.com/sathishkrishnamoorthi",
  },

  // About Section
  about: {
    greeting: "Hello, I'm",
    description: `A passionate AI/ML Engineer with expertise in developing cutting-edge machine learning solutions. 
    I specialize in deep learning, natural language processing, and computer vision. 
    With a strong foundation in mathematics and programming, I transform complex data into actionable insights 
    and build intelligent systems that solve real-world problems.`,
    highlights: [
      "5+ years of experience in AI/ML development",
      "Expertise in Python, TensorFlow, and PyTorch",
      "Published research in machine learning conferences",
      "Built production-ready ML pipelines for enterprises",
    ],
  },

  // Navigation
  navigation: [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
  ],
};

export const educationData = [
  {
    id: 1,
    degree: "Master of Science in Artificial Intelligence",
    institution: "Stanford University",
    year: "2020 - 2022",
    description: "Specialized in Deep Learning and Natural Language Processing. Thesis on Transformer architectures for code generation.",
    gpa: "3.9/4.0",
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology",
    year: "2016 - 2020",
    description: "Major in Computer Science with focus on Machine Learning and Data Structures. Dean's List all semesters.",
    gpa: "9.2/10",
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Central Board of Secondary Education",
    year: "2014 - 2016",
    description: "Science stream with Computer Science. School topper in Mathematics and Physics.",
    gpa: "95%",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    category: "Deep Learning",
    thumbnail: project1,
    description: "An interactive web application that visualizes neural network architectures and training processes in real-time. Built with TensorFlow.js and React.",
    technologies: ["TensorFlow.js", "React", "D3.js", "Python"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/nn-visualizer",
    images: [project1],
    videoUrl: "https://youtube.com/example",
  },
  {
    id: 2,
    title: "Sentiment Analysis Engine",
    category: "NLP",
    thumbnail: project2,
    description: "A robust sentiment analysis system using BERT transformers for analyzing customer reviews and social media content with 94% accuracy.",
    technologies: ["PyTorch", "Transformers", "FastAPI", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/sentiment",
    images: [project2],
    videoUrl: "",
  },
  {
    id: 3,
    title: "Autonomous Drone Navigation",
    category: "Computer Vision",
    thumbnail: project3,
    description: "Computer vision system for autonomous drone navigation using YOLO object detection and path planning algorithms.",
    technologies: ["OpenCV", "YOLO", "ROS", "C++"],
    demoUrl: "",
    githubUrl: "https://github.com/example/drone-nav",
    images: [project3],
    videoUrl: "https://youtube.com/example",
  },
  {
    id: 4,
    title: "Stock Price Predictor",
    category: "Time Series",
    thumbnail: project4,
    description: "LSTM-based stock price prediction model with technical indicator analysis and automated trading signals.",
    technologies: ["TensorFlow", "Pandas", "Plotly", "Flask"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/stock-predict",
    images: [project4],
    videoUrl: "",
  },
  {
    id: 5,
    title: "Medical Image Segmentation",
    category: "Healthcare AI",
    thumbnail: project5,
    description: "U-Net based medical image segmentation for tumor detection in MRI scans with 97% accuracy on benchmark datasets.",
    technologies: ["PyTorch", "OpenCV", "MONAI", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/example/med-segment",
    images: [project5],
    videoUrl: "",
  },
  {
    id: 6,
    title: "Chatbot Framework",
    category: "Conversational AI",
    thumbnail: project6,
    description: "Enterprise-grade chatbot framework with multi-turn conversation support, intent recognition, and knowledge base integration.",
    technologies: ["Rasa", "Python", "PostgreSQL", "Redis"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/chatbot",
    images: [project6],
    videoUrl: "",
  },
];

export const skillsData = {
  languages: [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 75 },
    { name: "R", level: 70 },
    { name: "SQL", level: 88 },
    { name: "TypeScript", level: 80 },
  ],
  softwares: [
    { name: "VS Code", level: 95 },
    { name: "Jupyter", level: 92 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 70 },
    { name: "AWS", level: 82 },
    { name: "Git", level: 90 },
  ],
  tools: [
    { name: "TensorFlow", level: 92 },
    { name: "PyTorch", level: 90 },
    { name: "Scikit-learn", level: 95 },
    { name: "Keras", level: 88 },
    { name: "MLflow", level: 78 },
    { name: "Weights & Biases", level: 80 },
  ],
  libsAndAlgorithms: [
    { name: "Transformers", level: 88 },
    { name: "CNN/RNN/LSTM", level: 92 },
    { name: "GANs", level: 75 },
    { name: "Reinforcement Learning", level: 72 },
    { name: "NLP (BERT/GPT)", level: 85 },
    { name: "Computer Vision", level: 88 },
  ],
};

export const achievementsData = [
  {
    id: 1,
    title: "Best Paper Award - ICML 2023",
    category: "Research",
    thumbnail: project1,
    description: "Received best paper award for research on efficient transformer architectures for edge devices.",
    date: "July 2023",
    organization: "International Conference on Machine Learning",
    images: [project1],
  },
  {
    id: 2,
    title: "Google AI Residency",
    category: "Fellowship",
    thumbnail: project2,
    description: "Selected for the prestigious Google AI Residency program, working on large language models.",
    date: "2022 - 2023",
    organization: "Google Research",
    images: [project2],
  },
  {
    id: 3,
    title: "Kaggle Grandmaster",
    category: "Competition",
    thumbnail: project3,
    description: "Achieved Kaggle Grandmaster status with 5 gold medals in machine learning competitions.",
    date: "2021",
    organization: "Kaggle",
    images: [project3],
  },
  {
    id: 4,
    title: "AWS Machine Learning Specialty",
    category: "Certification",
    thumbnail: project4,
    description: "Professional certification for designing and implementing ML solutions on AWS.",
    date: "2022",
    organization: "Amazon Web Services",
    images: [project4],
  },
  {
    id: 5,
    title: "TensorFlow Developer Certificate",
    category: "Certification",
    thumbnail: project5,
    description: "Official TensorFlow certification demonstrating proficiency in building ML models.",
    date: "2021",
    organization: "Google",
    images: [project5],
  },
  {
    id: 6,
    title: "Hackathon Winner - AI for Good",
    category: "Competition",
    thumbnail: project6,
    description: "First place in international hackathon for developing AI solution for healthcare accessibility.",
    date: "2023",
    organization: "Microsoft",
    images: [project6],
  },
];
