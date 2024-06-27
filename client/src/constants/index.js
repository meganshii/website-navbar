import {
  FaLeaf,
  FaProjectDiagram,
  FaLightbulb,
  FaRecycle,
  AiOutlineCar,
  AiOutlineShopping,
  AiOutlineCompass,
  AiOutlineDollarCircle,
  AiOutlineRadarChart,
  AiOutlineThunderbolt,
} from "../components";
import {
  missionImage,
  companyImage,
  strengthImage,
  pinkCityImage,
} from "../Assests";
// items
export const items = [
  {
    title: "Sustainability",
    description:
      "Paper industry adopts biodegradable materials and enhances recycling efforts.",
    color: "bg-green-100",
    icon: FaLeaf,
  },
  {
    title: "Featured Projects",
    description:
      "Paper industry adopts biodegradable materials and enhances recycling efforts.",
    color: "bg-purple-100",
    icon: FaProjectDiagram,
  },
  {
    title: "Innovation",
    description: "New technologies in paper manufacturing increase efficiency.",
    color: "bg-blue-100",
    icon: FaLightbulb,
  },
  {
    title: "Recycling",
    description:
      "Recycling initiatives in the paper industry have grown significantly.",
    color: "bg-yellow-100",
    icon: FaRecycle,
  },
];

export const titlesWithImages = [
  { title: "Mission & Vision", image: missionImage },
  { title: "Our Company", image: companyImage },
  { title: "Our Strength", image: strengthImage },
  { title: "The Pink City", image: pinkCityImage },
];
// links for navbar
export const links = [
  {
    name: "About Us",
    comp: "AboutUs",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Products",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Application",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Solutions",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Mediaroom",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Other",
    submenu: false,
    sublinks: [],
  },
  // {
  //   name: "Other2",
  //   submenu: false,
  //   sublinks: [],
  // },
  // {
  //   name: "Other3",
  //   submenu: false,
  //   sublinks: [],
  // },
  // {
  //   name: "Other4",
  //   submenu: false,
  //   sublinks: [],
  // },
];
// items for banners.jsx
export const cars = [
  { name: "i1", image: "i1", category: "Paper Cup Machine" },
  { name: "i2", image: "i2", category: "Paper Cup Machine" },
  { name: "i3", image: "i3", category: "Paper Cup Machine" },
  { name: "i4", image: "i4", category: "Paper Cup Machine" },
  { name: "i5", image: "i5", category: "Paper Cup Machine" },
  { name: "i6", image: "i6", category: "Paper Cup Machine" },
  { name: "i7", image: "i7", category: "Paper Plate Machine" },
  { name: "i8", image: "i8", category: "Paper Plate Machine" },
  { name: "a", image: "second", category: "Paper Bowl Machine" },
  { name: "b", image: "second", category: "Paper Bowl Machine" },
  { name: "c", image: "second", category: "Paper Bowl Machine" },
  { name: "d", image: "second", category: "Paper Bowl Machine" },
  { name: "Cybertruck", image: "first", category: "Paper Plate Machine" },
  { name: "Help Me Choose", image: "second", category: "Paper Lid Machine" },
  { name: "a", image: "second", category: "Paper Bag Machine" },
  { name: "b", image: "second", category: "Paper Straw Machine" },
];

export const SidebarLinks = [
  {
    name: "Paper Cup Machine",
    link: "/Paper Cup Machine",
    icon: AiOutlineCar,
  },
  {
    name: "Paper Bowl Machine",
    link: "/used-cars",
    icon: AiOutlineShopping,
  },
  {
    name: "Paper Plate Machine",
    link: "/demo-drive",
    icon: AiOutlineCompass,
  },
  {
    name: "Paper Lid Machine",
    link: "/Paper Lid Machine",
    icon: AiOutlineDollarCircle,
  },
  {
    name: "Paper Bag Machine",
    link: "/Paper Bag Machine",
    icon: AiOutlineRadarChart,
  },
  {
    name: "Paper Straw Machine",
    link: "/help-me-charge",
    icon: AiOutlineThunderbolt,
  },
];
