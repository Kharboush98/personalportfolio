import type { Project } from "@/app/DataTypes/ProjectType";

export const projects: Project[] = [
  {
    //1
    slug: "freshcart",
    title: "FreshCart",
    description:
      "Full e-commerce platform for a marketplace like business where you can look for your desired \
        by name, category or Brand. Add them to your wishlist or cart then checkout when you're ready!.",
    category: "Front-End",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 5,
    mobileOrder : 1,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js" , "REST API"],
    dates: { start: "2026-04", end: "2026-05" },
    links: {
      live: "https://fresh-cart-rosy-ten.vercel.app/",
      repo: "https://github.com/Kharboush98/FreshCart.git",
    },
    highlights: [
      "Built a full-feature e-commerce platform with server-side rendering.",
      "Implemented NextAuth.js session-based authentication.",
    ],
  },
  {
    //2
    slug: "routeposts",
    title: "Route Posts",
    description:
      "Complete social media platform with With all the functionalities you can expect from one. \
        Create an account find friends post what's on your mind and interact with others by liking, commenting or \
        sharing their posts and following each others.",
    category: "Front-End",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 2,
    mobileOrder : 2,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "HeroUI" , "REST API"],
    dates: { start: "2026-2", end: "2026-04" },
    links: {
      live: "https://route-posts.vercel.app/",
      repo: "https://github.com/Kharboush98/Route-Posts.git",
    },
    highlights: [
      "Built a full-featured social media platform in React.js with complete CRUD operation for all expected actions",
      "Delivered a fully responsive, accessible UI using Tailwind CSS and HeroUI, incorporating skeleton loaders, toast \
        notifications, modals, and dropdown menus.",
    ],
  },
  {
    //3
    slug: "restaurant-website",
    title: "Tasty Restaurant",
    description:
      "Responsive WordPress site built from a Figma design, with custom widgets and post types for meals, events, menus and a gallery.",
    category: "Front-End",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 4,
    mobileOrder : 3,
    tech: ["WordPress", "Elementor", "Custom Post Types", "Figma"],
    dates: { start: "2024-02", end: "2024-04" },
    links: {},
    highlights: [
      "Converted a Figma design into a responsive WordPress site.",
      "Built custom widgets for meals, events and the gallery",
      "Used Custom Post Types to manage meals, events and menus.",
      "Delivered intro, menus, events, reservations and gallery sections.",
    ],
  },
  {
    //4
    slug: "nutriplan",
    title: "Nutriplan",
    description:
      "Food Logging website to check meal ingredients and recipes see how to make them and log your calories, protein, cars and fat to stay healthy and organized.",
    category: "Front-End",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 3,
    mobileOrder : 4,
    tech: ["JavaScript", "HTML", "CSS", "Telwind CSS" , "REST API"],
    dates: { start: "2025-12", end: "2026-01" },
    links: {
      live: "https://kharboush98.github.io/NutriPlan/",
      repo: "https://github.com/Kharboush98/NutriPlan.git",
    },
    highlights: [
      "Built a recipe discovery app in vanilla JavaScript that consumes a REST API (categories, search and category filtering) using fetch and async/await.",
      "Generated the interface dynamically, rendering category and recipe cards from API data with template literals and injecting them into the DOM, along with a live results count.",
      "Used event delegation: a single click listener on the categories grid, with closest() and data-* attributes, loads the meals for whichever category is clicked, instead of attaching a listener to every card.",
      "Designed a responsive card UI with hover and scale transitions, gradient styling, lazy-loaded images and line-clamped text.",
    ],
  },
  {
    //5
    slug: "contactHub",
    title: "ContactHub",
    description:
      "Contact Logging website to add your Family and Friends save their numbers, emails and search for an contact them in an easier manner!.",
    category: "Front-End",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 6,
    mobileOrder : 6,
    tech: ["JavaScript", "HTML", "CSS"],
    dates: { start: "2025-11", end: "2026-11" },
    links: {
      live: "https://kharboush98.github.io/Assignment9/",
      repo: "https://github.com/Kharboush98/Assignment9.git",
    },
    highlights: [
      "Built a contact management app in vanilla JavaScript where users can add contacts with a name, address, email, phone number and relationship (family, friend, coworker and others)",
      "Rendered the contact list dynamically from a data array, updating the DOM whenever contacts are added or changed.",
      "Validated form input (such as email and phone format) before saving. (Keep this only if you did it.)",
    ],
  },
  {
    //6
    slug: "spacestrikers",
    title: "Space Strikers",
    description:
      "A 2D Shoot'em up style arcade game developed in unity C# where you go through levels of increasing difficulty get as high of a score as you can and progress an older demo is also available on Itch!",
    category: "VideoGame",
    featured: true,
    thumbnail: "/profile.jpeg",
    slot: 1,
    mobileOrder : 5,
    tech: ["Unity", "C#", "ScriptableObjects" , "Procreate"],
    dates: { start: "2025-05", end: "2026-" },
    links: {
      live: "https://kharboush.itch.io/space-striker",
      repo: "https://github.com/Kharboush98/Space-Strikers.git",
    },
    highlights: [
      "Designed, programmed and illustrated a [genre] game from scratch in Unity and C#, handling art, game design and all gameplay systems.",
      "Implemented enemy AI using [state machine / behavior tree], with [patrol, chase, attack] behaviors that react to the player",
      "Desgined the Player movement system and input behaviours as well as the Combat and spawining system for each wave in each level",
    ],
  },
];
