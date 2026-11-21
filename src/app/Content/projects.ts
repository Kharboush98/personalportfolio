import type { Project } from "@/app/DataTypes/ProjectType";

export const projects: Project[] = [
  {
    //1
    slug: "freshcart",
    title: "FreshCart",
    description:
      "A modern online marketplace built for effortless product discovery, complete with brand and category filtering, wishlist saving, and smooth checkout.",
    overview: [
      "Engineered as the capstone project for Route Academy’s React Front-End Development program, synthesizing modern React architecture, state management, and API integration into a production-ready application.",
      "Translated high-fidelity Figma wireframes into a pixel-accurate, fully responsive web application optimized for seamless performance across mobile, tablet, and desktop viewports.",
    ],
    category: "Front-End",
    featured: true,
    thumbnail: "/freshcarthero.webp",
    images: [
      { src: "/freshcart/FreshCart.png" },
      { src: "/freshcart/FreshCart1.png" },
      { src: "/freshcart/FreshCart2.png", fit: "contain" },
      { src: "/freshcart/FreshCart3.png" },
      { src: "/freshcart/FreshCart4.png", fit: "contain" },
      { src: "/freshcart/FreshCart5.png" },
      { src: "/freshcart/FreshCart6.png" },
      { src: "/freshcart/FreshCart7.png", fit: "contain" },
    ],
    slot: 5,
    mobileOrder: 1,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "REST API",
      "swiper",
      "shadcn",
      "Zod",
    ],
    dates: { start: "2026-04", end: "2026-05" },
    links: {
      live: "https://fresh-cart-rosy-ten.vercel.app/",
      repo: "https://github.com/Kharboush98/FreshCart.git",
    },
    highlights: [
      "Implemented secure user registration and login flows with NextAuth.js and Zod schema validation, protecting user sessions and personalizing the shopping experience",
      "Built a responsive, mobile-first interface with Tailwind CSS, integrating accessible shadcn/ui components (such as dynamic breadcrumbs) and Swiper.js carousels for interactive product browsing.",
      "Engineered full CRUD operations across user accounts, product catalogs, category/brand filtering, wishlists, and real-time shopping cart updates.",
      "Enhanced user experience with interactive toast notifications, loading skeletons, and graceful API error handling.",
      "Built a streamlined multi-step checkout experience supporting shipping address management and real-time order summaries.",
      "Built dynamic product detail pages displaying star ratings, customer reviews, shipping and return policies, interactive cart/wishlist controls, and a related products carousel.",
    ],
  },
  {
    //2
    slug: "routeposts",
    title: "Route Posts",
    description:
      "A full-featured social media platform enabling users to create accounts, connect and follow friends, publish posts, and engage through real-time likes, comments, and shares.",
    overview: [
      "Built as the first of two production-level projects for Route Academy’s React Front-End Development program, emulating a full-scale social media platform using React and JavaScript.",
      "Engineered complete CRUD functionality across posts, comments, likes, and user follow systems—allowing users to create, edit, and delete their own content in real time.",
      "Implemented dynamic feed filtering across public posts, friends, and saved bookmarks, paired with user search and profile analytics displaying follower stats and post history.",
    ],
    category: "Front-End",
    featured: true,
    thumbnail: "/routeposts/RouteHero.png",
    images: [
      { src: "/routeposts/RouteHero.png" },
      { src: "/routeposts/RouteP1.png", fit: "contain" },
      { src: "/routeposts/RouteP2.png" },
      { src: "/routeposts/RouteP3.png", fit: "contain" },
      { src: "/routeposts/RouteP5.png" },
      { src: "/routeposts/RouteP6.png", fit: "contain" },
    ],
    slot: 2,
    mobileOrder: 2,
    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HeroUI",
      "REST API",
      "Framer-motion",
    ],
    dates: { start: "2026-2", end: "2026-04" },
    links: {
      live: "https://route-posts.vercel.app/",
      repo: "https://github.com/Kharboush98/Route-Posts.git",
    },
    highlights: [
      "Built a full-featured social media platform in React.js with complete CRUD for posts and comments, image uploads via the FormData API, and dynamic routing using React Router.",
      "Delivered a responsive, accessible UI using Tailwind CSS and HeroUI, incorporating skeleton loaders, toast notifications, modals, and dropdown menus.",
      "Managed global authentication and profile state via React Context API, implementing protected route guards to control access for authenticated and guest users.",
      "Engineered a real-time like/unlike toggle with optimistic UI updates and a nested comment system with ownership-based edit and delete permissions.",
      "Developed dynamic feed filtering and bookmarking, allowing users to seamlessly toggle between all public posts, followed accounts, and saved bookmarks.",
      "Built real-time user search and dynamic profile pages, enabling users to discover accounts, follow/unfollow peers, and view individual post histories and follower metrics.",
    ],
  },
  {
    //3
    slug: "restaurant-website",
    title: "Tasty Restaurant",
    description:
      "A responsive custom WordPress theme built from a Figma design for a restaurant, featuring custom post types and widgets for menus, featured dishes, events, and photo galleries.",
    overview: [
      "Engineered a custom WordPress restaurant website during my internship at AlexWeb, extending Elementor’s visual builder with custom-built widgets and structured post types for menus, events, and galleries.",
    ],
    category: "Front-End",
    featured: true,
    thumbnail: "/tastyhero.png",
    images: [
      { src: "/tastyhero.png" },
      { src: "/tasty/tasty1.png", fit: "contain" },
      { src: "/tasty/tasty2.png" },
      { src: "/tasty/tasty3.png" },
      { src: "/tasty/tasty4.png" },
    ],
    slot: 4,
    mobileOrder: 3,
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Elementor",
      "Custom Post Types",
      "Figma",
      "SCSS",
    ],
    dates: { start: "2024-02", end: "2024-04" },
    links: {
      live: "https://kharboush98.github.io/tasty/",
      repo: "https://github.com/Kharboush98/tasty.git",
    },
    highlights: [
      "Translated a high-fidelity Figma design into a responsive, mobile-friendly WordPress website showcasing the restaurant’s menu, story, and brand identity.",
      "Developed custom Elementor widgets for featured meals, upcoming events, and interactive photo galleries, giving non-technical editors seamless layout control.",
      "Architected Custom Post Types (CPTs) and custom fields to organize and manage meals, menus, and event schedules dynamically from the WordPress dashboard.",
    ],
  },
  {
    //4
    slug: "nutriplan",
    title: "Nutriplan",
    description:
      "A full-featured nutrition and meal-logging web application enabling users to explore recipes and ingredients, search dishes by region or food code, and track daily calories, protein, carbs, and fats.",
    overview: [
    ],
    category: "Front-End",
    featured: true,
    thumbnail: "/nutriPlanHero.png",
    images: [
      { src: "/nutriplan/nutriplan1.png" },
      { src: "/nutriplan/nutriplan2.png" },
      { src: "/nutriplan/nutriplan3.png" },
      { src: "/nutriplan/nutriplan4.png" },
      { src: "/nutriplan/nutriplan5.png" },
      { src: "/nutriplan/nutriplan6.png" },
      { src: "/nutriplan/nutriplan7.png" },
    ],
    slot: 3,
    mobileOrder: 4,
    tech: ["JavaScript", "HTML", "CSS", "Telwind CSS", "REST API"],
    dates: { start: "2025-12", end: "2026-01" },
    links: {
      live: "https://kharboush98.github.io/NutriPlan/",
      repo: "https://github.com/Kharboush98/NutriPlan.git",
    },
    highlights: [
      "Engineered dynamic meal discovery with search-by-name and regional filtering, rendering dedicated recipe detail pages complete with ingredients, full macronutrient breakdowns, preparation steps, and embedded YouTube video tutorials.",
      "Implemented barcode/food-code and keyword lookup paired with full CRUD food-logging workflows, enabling users to add, update, and manage daily meals inside a dedicated personal tracking dashboard.",
      "Built an interactive nutrition analytics dashboard that aggregates daily calories, protein, carbs, and fats—calculating real-time goal progress, proximity warnings, and exact surplus or deficit margins.",
    ],
  },
  {
    //5
    slug: "contactHub",
    title: "ContactHub",
    description:
      "An intuitive digital address book designed for effortless organization—complete with fast contact creation, real-time search filtering, and one-click phone and email access.",
    category: "Front-End",
    featured: true,
    thumbnail: "/contacthubHero.png",
    images: [
      { src: "/contacthub/contacthub1.png" },
      { src: "/contacthub/contacthub2.png" },
      { src: "/contacthub/contacthub3.png" },
      { src: "/contacthub/contacthub.png" , fit: "contain"},
    ],
    slot: 6,
    mobileOrder: 6,
    tech: ["JavaScript", "HTML", "CSS"],
    dates: { start: "2025-11", end: "2026-11" },
    links: {
      live: "https://kharboush98.github.io/Assignment9/",
      repo: "https://github.com/Kharboush98/Assignment9.git",
    },
    highlights: [
      "Engineered an interactive modal workflow with real-time form validation, enforcing format rules for names, phone numbers, and emails to prevent invalid or duplicate entries.",
      "A responsive contact management web application enabling users to organize personal and professional connections, store phone numbers and emails, and instantly search and reach contacts",
    ],
  },
  {
    //6
    slug: "spacestrikers",
    title: "Space Strikers",
    description:
      "A fast-paced 2D arcade shoot 'em up built with Unity and C#, featuring escalating level difficulty, high-score progression, and a playable demo on itch.io."    ,
    category: "VideoGame",
    overview: [
        "A 2D shoot 'em up arcade game developed in Unity and C#, challenging players to battle through waves of enemies across levels with progressively scaling difficulty.",
        "Features a dynamic scoring and progression system designed to reward replayability, complete with a playable demo published on itch.io for instant browser testing.",
      ],
    featured: true,
    thumbnail: "/spacestrikers/ss1.png",
    images: [
      { src: "/spacestrikers/ss1.png" },
      { src: "/ssHero.png" },
      { src: "/spacestrikers/ss2.png" },
      { src: "/spacestrikers/ss3.png" },
    ],
    slot: 1,
    mobileOrder: 5,
    tech: ["Unity", "C#", "ScriptableObjects", "Procreate"],
    dates: { start: "2025-05", end: "2026-" },
    links: {
      live: "https://kharboush.itch.io/space-striker",
      repo: "https://github.com/Kharboush98/Space-Strikers.git",
    },
    highlights: [
      "Designed, programmed and illustrated a Shoot'em up game from scratch in Unity and C#, handling art, game design and all gameplay systems.",
      "Implemented enemy AI using [state machine / behavior tree], with [patrol, chase, attack] behaviors that react to the player",
      "Utilized Object pooling to optimize performance and created Gameobjects ahead of time instead of continuously creating and destroying them.",
      "Desgined the Player movement system and input behaviours as well as the Combat and spawining system for each wave in each level",
      "Designed and implemented interactive UI menus and C# event listeners supporting independent audio/VFX mixer controls, instant level retries, and persistent high-score tracking."    ],
  },
];
