// --------------------------------------- Project List
export const ProjectList = [
  {
    img: "/assets/project_0.png",
    title: "Devhub",
    description:
      "Devhub is the ultimate social platform designed exclusively for developers. Join Devhub today to showcase your skills and connect.",
    tech_stack: "React js, Redux, Node js, Express js, MongoDb",
    github_url: "https://github.com/optimm/DevHub",
    demo_url: "https://devhubb.netlify.app/",
    demo: true,
  },
  {
    img: "/assets/project_3.png",
    title: "AlgoX",
    description:
      "Algox is a sorting visualization platform with clear and custom visualizations",
    tech_stack: "Reactjs, Css",
    github_url: "https://github.com/optimm/AlgoX",
    demo_url: "https://algox.netlify.app/",
    demo: true,
  },
  {
    img: "/assets/project_1.png",
    title: "Shoppy",
    description:
      "Shoppy is fullstack shopping website cum clothing store management system with advanced features",
    tech_stack: "React js, Node js, Express js, Mysql",
    github_url: "https://github.com/optimm/shoppy",
    demo_url: "https://www.youtube.com/watch?v=CTgu2v0mg30&feature=youtu.be",
    demo: true,
  },
  {
    img: "/assets/project_6.png",
    title: "Findit",
    description:
      "Findit is a web app for recommending and exploring nearby stores and facilities according to user's needs.",
    tech_stack: "ReactJs, Redux",
    github_url: "https://github.com/optimm/store-app",
    demo_url: "https://findittt.netlify.app/",
    demo: true,
  },
  {
    img: "/assets/newsit.png",
    title: "NewsIt",
    description:
      "NewsIt is a cross platform mobile application for news and articles",
    tech_stack: "React native, Context API",
    github_url: "https://github.com/optimm/Newsit",
    demo_url: "https://github.com/optimm/Newsit/blob/master/NewsIt.apk",
    demo: true,
  },
];

export const ExperienceList = [
  {
    title: "Meesho",
    role: "Software Developer 1 (July 2024 - Present)",
    description: [
      "Contributing to the development of scalable and innovative GenAI solutions, shaping the future of AI-driven e-commerce.",
      "Designed and built India's first GenAI-powered voicebot for customer support, scaling it to handle over 100,000 calls per day with near-zero latency.",
      "Developed a multimodal and DAG-based architecture for the LLM-powered chatbot, efficiently managing over 1 million queries daily while significantly reducing LLM inference costs.",
      "Engineered generative vision model solutions for catalogue enrichment, enhancing product discovery and boosting engagement.",
      "Optimized real-time experimentation infrastructure, enabling concurrent A/B tests for GenAI-driven catalogue enrichment, leading to more effective and data-driven improvements.",
    ],
    isc: false,
    media_links: [
      {
        label: "News Feature",
        url: "https://timesofindia.indiatimes.com/business/india-business/meesho-launches-voicebot-to-cut-customer-support-costs-by-one-fourth/articleshow/115706660.cms",
      },
    ],
  },
  {
    title: "Meesho",
    role: "Software Developer Intern (Jan 2024 - June 2024)",
    description: [
      "I conceptualized and executed the migration of the complete return shipment tracking flow from a legacy PHP service to an event-based Java (Spring Boot) service, which nowhandles over 5 million requests per day. Demonstrating rapid development, I completed the project within a tight deadline, writing over 20,000 lines of code in a month.",
      "In another project, I upgraded the experimentation infrastructure to enable simultaneous A/B experiments on catalogue images. Previously, the infrastructure did not support running multiple experiments concurrently which was required as a part of GenAI catalogue enrichment. My enhancements allowed for this functionality, significantly improving the experimentation process.",
    ],
    isc: false,
  },
  {
    title: "Summer of Bitcoin @Eye of Satoshi",
    description: [
      "I played a pivotal role in enhancing the lightning watchtower system. Leveraging technologies such as TypeScript, ReactJS, NestJS, and Rust. I crafted an intuitive web-based graphical user interface (GUI) that significantly enhanced data visualization and analysis for over 20 tower administrators.",
      "I fortified the error-handling mechanisms in teos-cli, providing clearer error identification and messages.",
      "One of my significant accomplishments was the inception of a scalable and maintainable project from the ground up, which now serves as a solid foundation for contributions for a thriving community of 55+ Eye of Satoshi enthusiasts.",
    ],
    role: "Software Developer Intern (May 2023 - Aug 2023)",
    certificate:
      "https://drive.google.com/file/d/1yAZErlQMqWm-TkBjrWShaDGPJ4i3U-Ab/view?usp=sharing",
    isc: true,
  },
  {
    title: "ProbeAI",
    description: [
      "At Probe AI, a copilot for data analysts that generates queries from text based on specific databases, I spearheaded efforts to bolster the platform's functionality. I harnessed the power of NestJS, ReactJS, AWS, and Metabase to develop ingenious back-end solutions for query auto-fix and dry run query features, resulting in an impressive surge in query accuracy from 85% to 94%.",
      "I empowered Probe AI users by seamlessly integrating support for four distinct types of databases, including MySQL, PostgreSQL, BigQuery, and Snowflake, to be used simultaneously on the platform.",
      "Collaborating with a talented team of developers, I contributed to the creation of a Probe AI Chrome extension for the Metabase platform, which rapidly garnered over 50 downloads within just one week of its release.",
    ],
    role: "Software Developer Intern (Apr 2023 - May 2023)",
    isc: false,
  },
  {
    title: "Fyntune Solutions Pvt. Ltd.",
    description: [
      "My tenure as a ReactJs Developer Intern at Fyntune Solutions Private Ltd was marked by transformative contributions to more than 10 digital insurance products.",
      "Employing ReactJS, Redux, and impeccable API integration, I successfully led the launch of six projects and implemented a comprehensive front-end overhaul. This strategic restructuring led to a remarkable 36% reduction in load times and a 20% decrease in API calls through the implementation of client-side caching mechanisms. These optimizations significantly improved the user experience while simultaneously enhancing the overall efficiency and performance of the digital insurance products.",
    ],
    role: "ReactJs Developer Intern (Jun 2022 - Nov 2022)",
    certificate:
      "https://drive.google.com/file/d/1nrqwePMKE9kkETIBW1JKFjjUIW4DZFQx/view?usp=sharing",
    isc: true,
  },
];

export const BlogList = [
  {
    title: "What is Redis and how does it work Internally",
    description:
      "Deep dive into the redis and its internal working.",
    date: "March 2024",
    url: "https://medium.com/@ayushsaxena823/what-is-redis-and-how-does-it-work-cfe2853eb9a9",
    tags: ["Redis", "Architecture"],
  },
  {
    title: "My Summer of Bitcoin Story",
    description:
      "My complete journey of Summer of bitcoin 2023 at Eye of Satoshi",
    date: "August 2024",
    url: "https://medium.com/@ayushsaxena823/my-summer-of-bitcoin-story-4f576b03ad03",
    tags: ["Summer of Bitcoin", "Eye of Satoshi"],
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "/assets/skill/python.png",
    name: "Python",
  },
  {
    img: "/assets/skill/flask.png",
    name: "Flask",
  },
  {
    img: "/assets/skill/ai.png",
    name: "Generative AI/ LLM",
  },
  {
    img: "/assets/skill/fastapi.png",
    name: "FastAPI",
  },
  {
    img: "/assets/skill/java.png",
    name: "Java",
  },
  {
    img: "/assets/skill/spring.png",
    name: "Spring Boot",
  },
  {
    img: "/assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "/assets/skill/typescript.png",
    name: "TypeScript",
  },
  {
    img: "/assets/skill/nodejs.png",
    name: "Node Js",
  },
  {
    img: "/assets/skill/nestjs.svg",
    name: "Nest Js",
  },
  {
    img: "/assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: "/assets/skill/nextjs.svg",
    name: "Next Js",
  },
  {
    img: "/assets/skill/c.png",
    name: "C/C++",
  },
  {
    img: "/assets/skill/mysql.png",
    name: "MySQL",
  },
  {
    img: "/assets/skill/mongo.png",
    name: "MongoDB",
  },
  {
    img: "/assets/skill/postgre.png",
    name: "Postgre SQL",
  },
  {
    img: "/assets/skill/elastic.png",
    name: "Elastic Search",
  },
  {
    img: "/assets/skill/redis.png",
    name: "Redis",
  },
  {
    img: "/assets/skill/kafka.png",
    name: "Kafka",
  },
  {
    img: "/assets/skill/rust.svg",
    name: "Rust",
  },
];

export const toolist = [
  {
    img: "/assets/skill/cursor.png",
    name: "Cursor",
  },
  {
    img: "/assets/skill/chat-gpt.png",
    name: "ChatGPT",
  },
  {
    img: "/assets/skill/ubuntu.png",
    name: "Ubuntu",
  },
  {
    img: "/assets/skill/vs.png",
    name: "Vs code",
  },
  {
    img: "/assets/skill/intellij.png",
    name: "IntelliJ",
  },
  {
    img: "/assets/skill/docker.png",
    name: "Docker",
  },
  {
    img: "/assets/skill/grafana.png",
    name: "Grafana",
  },
  {
    img: "/assets/skill/jenkins.png",
    name: "Jenkins",
  },
  {
    img: "/assets/skill/postman.png",
    name: "Postman",
  },
  {
    img: "/assets/skill/argocd.png",
    name: "ArgoCD",
  },
  {
    img: "/assets/skill/azure.png",
    name: "Azure",
  },
  {
    img: "/assets/skill/aws.png",
    name: "Aws",
  },
];
