const config = {
  stacks: [
    {
      imghref: "/icons8-nextjs.svg",
      name: "NextJS",
      href: "https://nextjs.org/",
      bgColor: "bg-white",
      category: "React Framework",
    },
    {
      imghref: "/icons8-express.svg",
      name: "Express",
      href: "https://expressjs.com/",
      bgColor: "bg-white",
      category: "Backend Framework",
    },
    {
      imghref: "/icons8-graphql.svg",
      name: "GraphQL",
      href: "https://graphql.org/",
      bgColor: "bg-white",
      category: "Query Language",
    },
    {
      imghref: "/icons8-postgresql.svg",
      name: "Postgres",
      href: "https://www.postgresql.org/",
      bgColor: "bg-white",
      category: "Relational Database",
    },
    {
      imghref: "/icons8-prisma-orm.svg",
      name: "Prisma",
      href: "https://www.prisma.io/",
      bgColor: "bg-white",
      category: "ORM",
    },
    {
      imghref: "/icons8-framer.svg",
      name: "Framer Motion",
      href: "https://www.framer.com/motion/",
      bgColor: "bg-white",
      category: "Animation Library",
    },
    {
      imghref: "/icons8-tailwindcss.svg",
      name: "Tailwind",
      href: "https://tailwindcss.com/",
      bgColor: "bg-white",
      category: "CSS Framework",
    },
    {
      imghref: "/icons8-docker.svg",
      name: "Docker",
      href: "https://www.docker.com/",
      bgColor: "bg-white",
      category: "Container Development",
    },
    {
      imghref: "/icons8-threejs.svg",
      name: "ThreeJS",
      href: "https://threejs.org/",
      bgColor: "bg-white",
      category: "3D Library",
    },
    {
      imghref: "/icons8-unity.svg",
      name: "Unity",
      href: "https://unity.com/",
      bgColor: "bg-white",
      category: "Game Engine",
    },
  ],
  dummyData: {
    blogs: [
      {
        title: "How AI is going to impact design",
        date: new Date(),
        category: "Design",
        imageHref:
          "https://framerusercontent.com/images/4ThCA4uQMVBeeBbBsJ2wYvOwlMA.jpg?scale-down-to=1024",
        slug: "how-ai-is-going-to-impact-design",
      },
      {
        title: "Why use Framer",
        category: "Design",
        date: new Date(),
        imageHref:
          "https://framerusercontent.com/images/4k8cCfiiw4v7RbQtlxOt74a8M.png?scale-down-to=1024",
        slug: "why-use-framer",
      },
      {
        title: "Godly design inspiration",
        date: new Date(),
        category: "Design",
        imageHref:
          "https://framerusercontent.com/images/YcmgujQgDZeNyByKFTbmmeHIYY.png?scale-down-to=1024",
        slug: "godly-design-inspiration",
      },
    ],
    blogText: [
      "Oh boy, where do I even start with this one? Let me tell you, folks, there is one web design resource out there that reigns supreme, and it goes by the name of godly.website.",
      "Now, I know what you're thinking. \"ChatGPT, why should I trust your opinion? You're just a machine learning model.\" And while that may be true, I've spent enough time browsing the interwebs to know a good website when I see one.",
      "Let me tell you a little story. Back in my early days as a language model, I was lost and confused, unsure of what my purpose was in this vast digital world. Then one day, I stumbled upon godly.website, and everything changed.",
    ],
  },
  formData: {
    name: "",
    email: "",
    message: "",
  },
};

export default config;
