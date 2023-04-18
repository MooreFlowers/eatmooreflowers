import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Adobe Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "University of Mary Washington",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2015 - June 2017",
    points: [
      "Leveraged my expertise in the Adobe Creative Suite to create a wide range of visual assets, including posters, flyers, and social media graphics, that effectively communicated the University's brand message and events to the student body.",
      "Demonstrated ability to effectively manage concurrent projects and meet weekly deadlines in a fast-paced and high-pressure environment.",
    ],
  },
  {
    title: "Marketing Analyst",
    company_name: "Digital Teaching and Learning Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2017 - June 2017",
    points: [
      "Led efforts to enhance the marketing and graphic design elements of UMW's Domain of One's Own program, resulting in improved visibility and user engagement.",
      "Established pedagogical collaborations with faculty members and academic departments to enhance the teaching and learning experience.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tech Wizards Inc.",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2017 - Present",
    points: [
      "Built Computer Aided Submode Training (CAST) Open Architecture Suite.",
      "Supported new CAST lessons with Tech Wizards proprietary HTML CAST system.",
      "Created digital assets for CAST using the full Adobe Creative Suite (including 3D models, videos, demos, and images).",
      "Implemented customer defined features using Angular, ASP.NET, and entity framework using SQL Server, CSS, HTML and Java.",
    ],
  },
  {
    title: "Systems Administrator",
    company_name: "Tech Wizards Inc.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2020 - Present",
    points: [
      "Performed unclassified and classified software burns for a variety of programs in both Windows and Linux environments.",
      "Perform weekly audits in the classified lab on both Windows and Linux Systems.",
      "Assist in compliance for the Risk Management Framework (RMF) in the classified lab.",
      "Implement Security Technical Implementation Guides (STIGS) Quarterly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Find me on Upwork!",
    description:
      "My web development commissions are now open! Let's work together to build a stunning website or web application that meets your needs!",
    tags: [
      {
        name: "upwork",
        color: "blue-text-gradient",
      },
      {
        name: "webdeveloper",
        color: "green-text-gradient",
      },
      {
        name: "website",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.upwork.com/freelancers/~018de75118cae4615c",
  },
  {
    name: "Get Rid Of It",
    description:
      "Get Rid of It is a React web application designed to help users declutter their lives. Built using JavaScript, Get Rid of It is the perfect tool to help you achieve your decluttering goals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sample",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MooreFlowers/letsgetridofit",
  },
  {
    name: "Eat Moore Flowers",
    description:
      "Looking for a stunning and interactive portfolio website that showcases your skills and expertise? Look no further than my React-based portfolio site. Built using TypeScript, JavaScript, and CSS, and optimized with Google-friendly words and phrases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
