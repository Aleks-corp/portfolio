export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  company: string;
  year: number;
};

export const projects = [
  {
    id: 1,
    title: "Design Lab Web Application",
    slug: "design-lab-application",
    description: "Creating full-stack web application",
    tags: [
      "TypeScript",
      "Node",
      "React",
      "Express.js",
      "MongoDB",
      "Redux",
      "SASS",
      "AWS",
      "WayForPay API",
      "JWT",
    ],
    images: [
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865106/portfolio/designlab/DesignLab-mikaila-macbook-22_kqkmwh.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865106/portfolio/designlab/DesignLab-mikaila-iphone-2_ymzk8v.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865107/portfolio/designlab/DesignLab-mikaila-macbook-3_pufmdp.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865104/portfolio/designlab/DesignLab-p3_eojh1p.webp",
    ],
    company: "Freelance",
    year: 2024,
  },
  {
    id: 2,
    title: "Drink Master Website",
    slug: "drink-master-website",
    description: "New brand look and website",
    tags: ["Node", "React", "Express.js", "MongoDB", "Redux", "SASS"],
    images: [
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2020/v1743865109/portfolio/drinkmaster/DrinkMaster-4small_iuzmfq.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2020/v1743865110/portfolio/drinkmaster/DrinkMaster-mikaila-small-4_v3fmgz.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2020/v1743865104/portfolio/drinkmaster/DrinkMaster-mikaila-iphone-6_k3pyue.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2020/v1743865111/portfolio/drinkmaster/DrinkMaster-mikaila-iphone-4_ouy6sh.webp",
    ],
    company: "GOIT",
    year: 2022,
  },
  {
    id: 3,
    title: "Design Lab Application",
    slug: "design-lab-v2",
    description: "Creating full-stack application",
    tags: [
      "TypeScript",
      "Node",
      "React",
      "Express.js",
      "MongoDB",
      "Redux",
      "SASS",
      "AWS",
      "WayForPay API",
      "JWT",
    ],
    images: [
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865105/portfolio/designlab/DesignLab-p2_qguprp.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865108/portfolio/designlab/DesignLab-mikaila-macbook-5_p25mzn.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865105/portfolio/designlab/DesignLab-mikaila-macbook-2_jpteiv.webp",
      "https://res.cloudinary.com/deeooeyeg/image/upload/c_pad,w_2048/v1743865106/portfolio/designlab/DesignLab-mikaila-iphone-2_ymzk8v.webp",
    ],
    company: "Freelance",
    year: 2025,
  },
];
