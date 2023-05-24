import { Projects } from "@/types/blog";

const ProjectsDataHome: projectsdataHome[] = [
  {
    id: 1,
    title: "Residential Interior Design",
    paragraph:
      "Residential interior design creates personalized living spaces that blend functionality, comfort, and aesthetic appeal to enhance everyday life.",
    image: "/images/project/project-1.jpg",
    author: {
      name: "Krupali Shah",
      image: "/images/project/krupali-shah.jpg",
      designation: "Owner",
    },
    tags: ["Design"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    paragraph:
      "Commercial interior design transforms spaces into dynamic environments that prioritize functionality, brand identity, and user experience to optimize business productivity and create impactful impressions.",
    image: "/images/project/project-2.jpg",
    author: {
      name: "Krupali Shah",
      image: "/images/project/krupali-shah.jpg",
      designation: "Owner",
    },
    tags: ["Design"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Space Planning",
    paragraph:
      "Space planning involves strategically organizing and arranging the layout of a physical area to maximize efficiency, functionality, and flow, taking into account factors such as traffic patterns, furniture placement, and spatial requirements.",
    image: "/images/project/project-3.jpg",
    author: {
      name: "Krupali Shah",
      image: "/images/project/krupali-shah.jpg",
      designation: "Owner",
    },
    tags: ["Planning"],
    publishDate: "2023",
  },
];
export default ProjectsDataHome;
