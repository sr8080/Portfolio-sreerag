import craftai from "../assets/projects/craftai.png";
import project2 from "../assets/projects/image.png";
import project3 from "../assets/projects/placement.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in designing and building scalable web applications. As a self-taught MERN stack developer with experience working on multiple projects, I have honed my expertise in front-end technologies like React and TypeScript, and back-end technologies like Node.js, MongoDB, and Express.js.

My goal is to leverage my technical skills and critical thinking abilities to create innovative solutions that enhance user experiences and drive business success. I am committed to continuous learning and thrive on tackling challenging problems while exploring new technologies and trends in software development.`;

export const ABOUT_TEXT = `I am a committed and resourceful full-stack developer passionate about building efficient, scalable, and user-focused web applications. With a strong foundation in technologies like React, TypeScript, Node.js, MongoDB, and Express.js, I continuously seek to improve and adapt to the ever-evolving landscape of web development.

My journey into software development started with a curiosity to solve real-world problems through technology, and it has grown into a rewarding career where I take pride in delivering high-quality solutions. I excel in collaborative settings, tackling complex challenges, and leveraging innovative technologies to create meaningful user experiences.

Beyond coding, I enjoy exploring emerging tech trends, expanding my knowledge, and sharing my expertise with the developer community.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Craft AI",
    image: craftai,
    description:
      "A Next.js application for AI-powered social media content generation designed to create engaging posts for Twitter, Instagram, and LinkedIn.",
    technologies: ["Next.js", "Google Generative AI (Gemini)", "Drizzle ORM", "Neon", "Stripe"],
    features: [
      "AI-generated personalized content",
      "Subscription payment functionality using Stripe",
      "Responsive design for a seamless user experience",
    ],
  },
  {
    title: "Food Delivery Application",
    image: project2,
    description:
      "A feature-rich web application that allows users to browse restaurants, order food, and track delivery in real-time.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redux"],
    features: [
      "Real-time chat functionality between users and restaurants",
      "JWT authentication for secure sessions",
      "Real-time notifications for order updates",
      "Efficient state management with Redux",
    ],
  },
  {
    title: "Placement Management System",
    image: project3,
    description:
      "A comprehensive web application to manage placement activities within educational institutions.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    features: [
      "Role-based access control for different user types",
      "JWT authentication for secure access",
      "Responsive design using Bootstrap",
    ],
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A dynamic e-commerce platform with product catalog, user authentication, cart management, and payment gateway integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"],
    features: [
      "Secure user authentication",
      "Product catalog and shopping cart functionality",
      "Payment gateway integration",
    ],
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "6238009157 ",
  email: "sreeragm8080@gmail.com",
};
