export const METADATA = {
  author: "Pranav Niranjan",
  title: "Portfolio | Pranav Niranjan",
  description:
    "Pranav Niranjan is a passionate MERN Stack Developer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Pranav Niranjan",
    "Mern Developer",
    "Frontend Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "An aspiring MERN Stack Developer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: jpranavniran@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/pranav-niranjan-j-b12a87236/",
  },
  {
    name: "github",
    url: "https://github.com/curry-burken",
  },
];

export const SKILLS = {
  frontend: [
    "react",
    "reactnative",
    "bootstrap",
    "tailwindcss",
  ],
  backend:[
    "nodejs",
    "expressjs",
  ],
  databases: [
    "mongodb",
    "ssms",
  ],
  programming:[
    "java",
    "javascript",
    "sql",
  ],
  tools: [
    "git",
    "github",
    "vscode",
    "androidstudio",
    "postman",
    "vercel",
    "netlify",
    "docker",
  ],
};

export const PROJECTS = [
  {
    name: "Product Store",
    image: "/projects/productstore.png",
    blurImage: "/projects/blur/brr.png",
    description: "A simple Product Store using MERN.",
    gradient: ["#F14658", "#DC2537"],
    url: "https://simple-mern-project-alpha.vercel.app/",
    tech: [],
  },
  {
    name: "Chatbot",
    image: "/projects/chatbot.png",
    blurImage: "/projects/blur/brr.png",
    description: "A responsive React Chatbot built with the help of Gemini LLM.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://chatbot-using-gemini-api.vercel.app/",
    tech: [],
  },
  {
    name: "Dotify",
    image: "/projects/dotify.png",
    blurImage: "/projects/blur/brr.png",
    description: "A music streaming application made with the help of React and Tailwind CSS.",
    gradient: ["#000066", "#6699FF"],
    url: "https://music-streaming-application-seven.vercel.app/",
    tech: [],
  },
  {
    name: "Cloth Shop",
    image: "/projects/clothshop.png",
    blurImage: "/projects/blur/brr.png",
    description: "An Ecommerce website created using React.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://ecommerce-project-iota-red.vercel.app/",
    tech: [],
  },
  {
    name: "Pharma Guard",
    image: "/projects/pharmaguard.png",
    blurImage: "/projects/blur/brr.png",
    description: "A system to trace pharmaceutical products along the supply chain using Blockchain Technology.",
    gradient: ["#76ddc5", "#2E4964"],
    url: "https://final-year-project-nu-three.vercel.app/",
    tech: [],
  },
];

export const WORK_CONTENTS = {
  DATTAM: [
    {
      title: "Access Mobile React Native App",
      description:
        "Built multiple modular page and screen components for a React Native application. Integrated APIs with the frontend by collaborating closely with the backend team.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4">
          <div>Junior Frontend Developer</div>
          <div>April 2025 - May 2025</div>
        </div>
      ),
    },
    {
      title: "Resume Parser MVP",
      description:
        "Created a resume parser MVP from scratch using Next.js and Material UI. The application handles multiple resume uploads and parses them with the help of Gemini LLM.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4">
          <div>Junior Frontend Developer</div>
          <div>April 2025 - May 2025</div>
        </div>
      ),
    },
  ],
  DELOITTE: [
    {
      title: "",
      description:
        "Acquired expertise in front-end development using HTML5, CSS3, Bootstrap, JavaScript, and React.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4">
          <div>Analyst Trainee (Frontend)</div>
          <div>February 2025 - April 2025</div>
        </div>
      ),
    },
  ],
  SYSTECH: [
    {
      title: "",
      description:
        "Had the opportunity to learn about data handling using SQL and Python, gaining valuable insights into data analysis.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4">
          <div>Data Engineer (Intern)</div>
          <div>April 2024 - June 2024</div>
        </div>
      ),
    },
  ],
  DUCONT: [
    {
      title: "",
      description:
        "Gained hands-on experience in building and managing small-scale APIs. Performed as an Intern Leader, effectively coordinating tasks among team members.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4">
          <div>API Developer (Student Intern)</div>
          <div>March 2023 - March 2023</div>
        </div>
      ),
    },
  ],
};

