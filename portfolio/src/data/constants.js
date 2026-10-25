import {
  FaBrain,
  FaRobot,
  FaDatabase,
  FaMicrophone,
  FaMagic,
  FaPlug,
  FaCubes,
  FaVideo,
  FaGlobe,
  FaFlask,
  FaUserShield,
  FaSearch,
  FaLayerGroup,
  FaKey,
} from "react-icons/fa";
import { SiAmazonaws, SiAmazons3, SiAmazoncloudwatch, SiApacheairflow } from "react-icons/si";

// Pinned devicon release so logos don't change unexpectedly
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const icon = (name) => `${DEVICON}/${name}/${name}-original.svg`;

export const Bio = {
  name: "Vishal Jadhav",
  roles: [
    "Full Stack Java Developer",
    "Spring Boot & React Developer",
    "AI / LLM Integration Engineer",
  ],
  description:
    "Full Stack Java Developer with 1.5+ years of experience building scalable enterprise applications using Java, Spring Boot, React.js, Next.js, and AI-driven solutions. Experienced in REST APIs, LLM integrations, RAG architectures, real-time systems, and AWS ML services like Bedrock and SageMaker.",
  location: "Chh. Sambhajinagar (Aurangabad), Maharashtra, India",
  email: "vj7708152@gmail.com",
  phone: "+91 99604 39680",
  github: "https://github.com/vishaljadhav207",
  resume:
    "https://drive.google.com/file/d/1tJoS67bWHseAmzatjtnmmOH2r6qkQM1Y/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/vishal-jadhav-609a3a222/",
  twitter: "https://twitter.com/vishalj2012?t=7VJMGrDy4r1DD0w-YUMeQA&s=08",
  insta: "https://www.instagram.com/vishal_patil207/",
};

/**
 * Each skill has either an `image` URL or an `icon` (react-icons component).
 * `invert: true` flips dark logos so they stay visible on the dark theme.
 */
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Java", image: icon("java") },
      { name: "Python", image: icon("python") },
      { name: "JavaScript", image: icon("javascript") },
      { name: "TypeScript", image: icon("typescript") },
      { name: "C++", image: icon("cplusplus") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", image: icon("react") },
      { name: "Next.js", image: icon("nextjs"), invert: true },
      { name: "HTML5", image: icon("html5") },
      { name: "CSS3", image: icon("css3") },
      { name: "Tailwind CSS", image: icon("tailwindcss") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", image: icon("spring") },
      { name: "NestJS", image: icon("nestjs") },
      { name: "FastAPI", image: icon("fastapi") },
      { name: "REST APIs", icon: FaPlug },
      { name: "Microservices", icon: FaCubes },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "LLM Integration", icon: FaRobot },
      { name: "RAG", icon: FaBrain },
      { name: "Vector Databases", icon: FaDatabase },
      { name: "Speech-to-Text", icon: FaMicrophone },
      { name: "Prompt Engineering", icon: FaMagic },
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      { name: "Amazon Bedrock", icon: SiAmazonaws },
      { name: "SageMaker", icon: FaFlask },
      { name: "IAM (Cross-Account)", icon: FaUserShield },
      { name: "Amazon S3", icon: SiAmazons3 },
      { name: "Athena", icon: FaSearch },
      { name: "Glue / Iceberg", icon: FaLayerGroup },
      { name: "CloudWatch", icon: SiAmazoncloudwatch },
      { name: "KMS", icon: FaKey },
      { name: "Airflow (MWAA)", icon: SiApacheairflow },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", image: icon("mongodb") },
      { name: "PostgreSQL", image: icon("postgresql") },
      { name: "MySQL", image: icon("mysql") },
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Git", image: icon("git") },
      { name: "GitHub", image: icon("github"), invert: true },
      { name: "Postman", image: icon("postman") },
      { name: "SonarQube", image: icon("sonarqube") },
      { name: "WebRTC", icon: FaVideo },
      { name: "Tauri", image: icon("tauri") },
      { name: "Ngrok", icon: FaGlobe },
    ],
  },
];

/**
 * Work experience. Wrap text in **double asterisks** to render it bold.
 */
export const experience = [
  {
    id: 0,
    company: "Ampcus Tech Pvt Ltd",
    role: "Full Stack Java Developer",
    date: "Feb 2025 - Present",
    location: "Chh. Sambhajinagar (Aurangabad), MH",
    projects: [
      {
        name: "HighScope",
        bullets: [
          "Contributed to a production-scale platform of **7 modules**, owning development of **2 major modules** and improving feature delivery speed by **30%**.",
          "Designed and developed scalable **REST APIs** using **Spring Boot** and integrated them with **React.js / Next.js** frontends.",
          "Built the **Student Growth Report** module using **MongoDB**, enabling dynamic data processing and reporting.",
          "Used **SonarQube** to identify code smells, reduce technical debt, and improve maintainability.",
          "Optimized performance through refactoring, API improvements, and best practices in **API design, database modeling, and scalable architecture**.",
        ],
        tags: ["Spring Boot", "React.js", "Next.js", "MongoDB", "SonarQube"],
      },
      {
        name: "Helpdesk AI Platform",
        bullets: [
          "Developed a cross-platform **Remote Support module** using **Python, WebRTC, and Tauri** for real-time remote assistance.",
          "Implemented **RAG (Retrieval-Augmented Generation)** for AI-powered chat and knowledge-base search using vector databases.",
          "Integrated **LLM-powered workflows** for intelligent support query handling and contextual responses.",
          "Developed scalable **Spring Boot APIs** to capture and store remote session information for session tracking and history.",
        ],
        tags: ["Python", "WebRTC", "Tauri", "RAG", "LLM", "Spring Boot"],
      },
      {
        name: "APM Talent IQ",
        bullets: [
          "Developed a full-stack assessment platform supporting **Recruiter, Evaluator, and Admin** role-based workflows.",
          "Enabled recruiters to generate and share assessment links and track candidate performance.",
          "Implemented a secure online assessment system with **Python-based proctoring** for malpractice detection.",
          "Designed backend services using **NestJS** and **PostgreSQL** and built a responsive UI with **React.js (TypeScript)**.",
          "Implemented **LLM-based skill extraction** from candidate resumes to generate personalized assessments.",
        ],
        tags: ["NestJS", "PostgreSQL", "React", "TypeScript", "Python", "LLM"],
      },
      {
        // Kept generic on purpose: no client name, internal service or table names on a public site
        name: "LLM Classification Pipeline on AWS",
        bullets: [
          "Built an LLM-based classification pipeline on **Amazon Bedrock** (batch and real-time invocation) to label records as person, company, or unsure.",
          "Ran the pipeline as **SageMaker Processing Jobs** and used a **SageMaker notebook** for prompt testing and validation.",
          "Configured least-privilege, multi-account **IAM roles and trust policies** with **KMS**-encrypted cross-account data access.",
          "Orchestrated cross-account runs with **Apache Airflow (MWAA)**, storing batch records and Bedrock job artifacts in **Amazon S3**.",
          "Wrote results to **Glue-cataloged Iceberg tables** and used **Athena** for stratified sampling and validation.",
          "Adding **CloudWatch** metrics and alarms for classification monitoring (in progress).",
        ],
        tags: ["Bedrock", "SageMaker", "IAM", "S3", "Athena", "Glue", "Iceberg", "MWAA", "KMS"],
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/png;base64,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",
    school:
      "Deogiri Institute of Engineering and Management Studies, Chh. Sambhajinagar (Aurangabad)",
    date: "Nov 2020 - Jun 2024",
    grade: "8.0 CGPA",
    desc: "Completed a Bachelor of Technology in Electronics and Telecommunication Engineering at DIEMS with a CGPA of 8.0. Coursework included Object-Oriented Programming and Computer Networks, alongside self-driven full stack development projects.",
    degree:
      "Bachelor of Technology - BTech, Electronics and Telecommunication Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtPikbNrKGHetv_JPmjuoCA5uNXETltihkQ&usqp=CAU",
    school: "Devgiri College,Aurangabad",
    date: "Apr 2018 - Apr 2020",
    grade: "63.85%",
    desc: "I completed my class 12 high school education at Devgiri College, Aurangabad, where I studied in Science Stream.",
    degree: "HSC(XII), Science",
  },
  {
    id: 2,
    img: "",
    school: "Shree Vyanktesh Highschool, Aurangabad",
    date: "Apr 2011 - Apr 2018",
    grade: "92.60%",
    desc: "I completed my class 10 education at Shree Vyanktesh Highschool, Aurangabad",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    title: "Hotel and Trip Management System",
    date: "Feb 2025 - May 2025",
    description:
      "A full-stack system for hotel and multi-modal trip bookings (bus/train/flight), built as 3 microservices: Hotel, Trip (PostgreSQL) and Seat Management (MongoDB). Scalable Spring Boot APIs integrated with a React.js frontend reduced integration issues by 40%, with MongoDB powering flexible seat data and real-time availability.",
    // No screenshot yet: the card shows a gradient placeholder. Add an image path here when you have one.
    image: "",
    tags: ["React.js", "Spring Boot", "PostgreSQL", "MongoDB", "Microservices"],
    webapp: "https://github.com/vishaljadhav207/HotelBookingAndTravelPlanner",
  },
  {
    title: "Eraser Clone",
    date: "Mar 2024 - Mar 2024",
    description:
      "Developed an Eraser Clone project using Next.js, TypeScript, and Tailwind CSS for a modern tech stack.",
    image: `${process.env.PUBLIC_URL}/images/eraser.jpg`,
    tags: ["Next.js", "TypeScript", "ConvexDB", "Tailwind CSS", "shadcn"],
    webapp: "https://eraser-clone-sooty.vercel.app/",
  },
  {
    title: "Thread Clone",
    date: "Dec 2023 - Jan 2024",
    description:
      "Developed a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack to create a scalable and efficient image storage platform. Integrated Cloudinary for seamless image management and storage.",
    image: `${process.env.PUBLIC_URL}/images/post.jpg`,
    tags: ["MERN", "chakraUI", "custom hooks", "REST-API", "Cloudinary"],
    webapp: "https://github.com/vishaljadhav207/MERN-Thread-clone",
  },
  {
    title: "Real-time Document Editor",
    date: "Jan 2024 - Jan 2024",
    description:
      "Implemented collaborative document editing using WebSocket for real-time communication.",
    image: `${process.env.PUBLIC_URL}/images/docs.jpg`,
    tags: ["Document Editor", "Collaborative Editing", "WebSocket", "React", "Quill","SocketIO","MongoDB","Expressjs"],
    webapp: "https://github.com/vishaljadhav207/Document-Editor",
  },
  {
    title: "OpenAI-ChatBot",
    date: "Dec 2023 - Jan 2024",
    description:
      "A full-stack AI chatbot built with React, Node.js, Express and MongoDB that uses the OpenAI API to answer questions and keep conversation history.",
    image: `${process.env.PUBLIC_URL}/images/chatbot.webp`,
    tags: ["OpenAI", "React", "Nodejs", "Express", "MongoDB",],
    webapp: "https://github.com/vishaljadhav207/ChatBot",
  },
  {
    title: "Real Time Chat WebApp",
    date: "Apr 2023 - May 2023",
    description:
      "A Firebase Realtime Chat App allows users to send and receive messages in real-time. When one user sends a message, it is immediately delivered to the recipient, ensuring a seamless and instant chat experience.",
    image:`${process.env.PUBLIC_URL}/images/chatapp.jpg`,
    tags: ["React Js", "HTML", "CSS", "FireBase", "ChatApp", "googleauth"],
    webapp: "https://chatapp-ac9c8.web.app/",
  },
];
