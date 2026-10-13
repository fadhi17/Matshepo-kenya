export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  role: string;
  location: string;
  projectCategory: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "Matshepo Africa products have given us reliable performance on our projects. Their technical support is always helpful.",
    name: "Project Contractor",
    company: "Commercial Contracting Services",
    role: "Lead Project Contractor",
    location: "Nairobi, Kenya",
    projectCategory: "Commercial & Residential Builds",
    avatar: "/assets/team/avatar_1.jpg",
  },
  {
    id: "2",
    quote:
      "The waterproofing solutions worked very well for our swimming pool project. Good quality and professional service.",
    name: "Construction Company",
    company: "Civil & Structural Engineering Ltd",
    role: "Project Manager",
    location: "Nairobi, Kenya",
    projectCategory: "Swimming Pool Waterproofing",
    avatar: "/assets/team/avatar_2.jpg",
  },
  {
    id: "3",
    quote:
      "We have been using Simba Grip for our tile installations and the quality has been excellent.",
    name: "Building Contractor",
    company: "Premier Interior Solutions",
    role: "Senior Tile Installation Specialist",
    location: "Nairobi, Kenya",
    projectCategory: "Tile Adhesives & Grouting",
    avatar: "/assets/team/avatar_3.jpg",
  },
];
