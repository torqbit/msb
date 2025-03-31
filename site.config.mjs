//import { link } from "fs";

export const siteConfig = {
  name: "My Site",
  description: "Welcome to my website",
  url: "https://mysite.com",
  // Add any other site-wide configuration values you need
  social: {
    twitter: "https://twitter.com/username",
    github: "https://github.com/aisha",
  },
  talks: ["https://youtube.com/watch?v=293939"],
  nav:{
    firstName: "JOHN",
    lastName: "DOE",
    links: [
      { name: "About", href: "/about" },
      { name: "Articles", href: "/articles" },
      { name: "Projects", href: "/projects" },
      { name: "Talks", href: "/talks" },
    ],
    contact:{text:"Contact Me", link:"tel: +15551234567"}
},
about:{
  img: "images/uifaces-popular-image.jpg",
  name: "John",
  description: "I help Startsups through fast-paced full stack software development"
}
};
