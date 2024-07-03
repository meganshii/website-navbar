import {
  FaLeaf,
  FaProjectDiagram,
  FaLightbulb,
  FaRecycle,
} from "../components";
import {
  papercup,
  paperplate2,
  paperbowl,
  paperlid,
  paperstraw,
  allproduct,
  paperbag1,
} from "../assets";
import {
  missionImage,
  companyImage,
  strengthImage,
  pinkCityImage,
} from "../Assests";


import img1 from "../Assests/bg-2.jpg";
import img2 from "../Assests/bg3.jpg";
import img3 from "../Assests/bg4.jpg";
import img4 from "../Assests/image.png";
import img5 from "../Assests/Disposable-Spoons-1.jpeg";
import img6 from "../Assests/bg-5.jpg";
import bgimg1 from "../Assests/outlin.png";
import bgimg2 from "../Assests/outlinebowl.jpg";
import bgimg3 from "../Assests/outlinespoon.png";

import image1 from "../Assests/banner.jpg";
import image2 from "../Assests/banner1.jpg"


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
    name: "AboutUs",
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
  {
    name: "NS-015",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-016",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-017",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-018",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-019",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-020",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-021",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "NS-022",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "Cybertruck",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "a",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "b",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "c",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "d",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },

  {
    name: "Help Me Choose",
    image: "second",
    category: "Paper Lid Machine,All Products",
    icon: paperlid,
  },
  {
    name: "a",
    image: "second",
    category: "Paper Bag Machine,All Products",
    icon: paperbag1,
  },
  {
    name: "b",
    image: "second",
    category: "Paper Straw Machine,All Products",
    icon: paperstraw,
  },
];

export const SidebarLinks = [
  {
    name: "All Products",
    link: "/all",
    icon: allproduct,
  },

  {
    name: "Paper Cup Machine",
    link: "/Paper Cup Machine",
    icon: papercup,
  },

  {
    name: "Paper Plate Machine",
    link: "/demo-drive",
    icon: paperplate2,
  },
  {
    name: "Paper Bowl Machine",
    link: "/used-cars",
    icon: paperbowl,
  },
  {
    name: "Paper Lid Machine",
    link: "/Paper Lid Machine",
    icon: paperlid,
  },
  {
    name: "Paper Bag Machine",
    link: "/Paper Bag Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Straw Machine",
    link: "/help-me-charge",
    icon: paperstraw,
  },
];
//applcation item data



  export const item = [
      { src: img1, alt: "Cups", name: "Paper Bowl",
         description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
      { src: img2, alt: "Item 2", name: "Paper Cups", description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",bgpic:bgimg2 },
      { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg3},
      { src: img2, alt: "Item 2", name: "Paper Cups", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",bgpic:bgimg2},
      { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry" ,bgpic:bgimg1},
      { src: img5, alt: "Item 5", name: "Paper Spoon", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg1 },
      { src: img6, alt: "Item 6", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg1},
      { src: img4, alt: "Item 4", name: "Paper Bucket", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be" ,bgpic:bgimg3},
      { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
      { src: img3, alt: "Item 3", name: "Paper Bowl", description: "Description for Paper bag Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to p" ,bgpic:bgimg2},
      { src: img5, alt: "Item 5", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2},
      { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag" ,bgpic:bgimg2},
      { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
      { src: img2, alt: "Item 2", name: "Paper Cup", description:"Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg2 },
      { src: img1, alt: "Cups", name: "Paper Bowl", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
      { src: img2, alt: "Item 2", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry"},
      { src: img3, alt: "Item 3", name: "Paper Plate", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
      { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" },
      { src: img3, alt: "Item 3", name: "Paper Cup", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" },
      { src: img4, alt: "Item 4", name: "Paper Spoon", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },
      { src: img1, alt: "Cups", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage" ,bgpic:bgimg3},
      { src: img2, alt: "Item 2", name: "Paper Glass", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",bgpic:bgimg3},
      { src: img3, alt: "Item 3", name: "Paper Bag", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",bgpic:bgimg3},
      { src: img4, alt: "Item 4", name: "Paper Spoons", description: "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",bgpic:bgimg3 },
  
    ];

// Solution item data

export const Items = [
  {
    id: 1,
    name: "All Solutions",
    img: image1,
    description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 2,
    name: "Paper Cup Plant setup",
    img: image2,
    description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production.",
  },
  {
      id: 3,
      name: "Raw Material Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. ",
    },
    {
      id: 4,
      name: "Printing & Die Cutting setup",
      img: image2,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 5,
      name: "Paper Straw Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 6,
      name: "Paper Bag Plant Setup",
      img: image2,
      description: "technology for sustainable, high-volume output.",
    },
    {
      id: 7,
      name: "Paper Plate Plant Setup",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
    },
    {
      id: 8,
      name: "Molds & Die Solutions",
      img: image2,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
    {
      id: 9,
      name: "Sterio Solutions",
      img: image1,
      description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
    },
  // Add more items as needed
];

