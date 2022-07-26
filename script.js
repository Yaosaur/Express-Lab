const { response } = require("express");
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3003;

const flowers = [
  {
    name: "Babys Breath",
    price: 16,
    description:
      "A bunch of loosely branching clusters of numerous small, delicate, usually white or pink flowers",
    image:
      "https://images.unsplash.com/photo-1608153918613-9c2be8d9f11f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Peony",
    price: 100,
    description:
      "Glossy large single and double flowers of white, pink, rose, and deep crimson colour",
    image:
      "https://images.unsplash.com/photo-1626976109816-08cef8600d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80",
  },
  {
    name: "Protea",
    price: 133,
    description:
      "A cone-like head or cluster of individual, long, tubular flowers",
    image:
      "https://images.unsplash.com/photo-1617587693798-25ba81c6198e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    name: "Pincushion",
    price: 170,
    description:
      "Bounties of button-like flowers atop wiry stems that flutter in the breeze",
    image:
      "https://images.unsplash.com/photo-1622913884982-4221ddee15fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const arrangements = [
  {
    name: "Garden of Life",
    price: 78,
    description:
      "A gorgeous mix of beautiful, bright summer flowers offers an uplifting expression of your sympathy and love.",
    image:
      "https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/S5321S_LOL_preset_ftd-mx-hero-mv-new.jpeg?v=1622649395",
  },
  {
    name: "The Firecracker",
    price: 70,
    description:
      "A fiery mix of texture and color, this vibrant bouquet is the perfect fit for the one who's looking for something out of the norm this season. Cool blue tones from thistle fit perfectly alongside bursts of orange roses and bright, golden craspedia.",
    image:
      "https://media.urbanstems.com/image/upload/f_auto/w_900,c_fit,q_80/Catalogs/urbanstems-master/Fall%202021/The%20Firecracker/The%20Firecracker/Firecracker_Carousel.jpg",
  },
  {
    name: "Beautiful Cream",
    price: 65,
    description: "Beautiful cascading bouquet with mother of pearl accents.",
    image:
      "https://i.etsystatic.com/5674495/r/il/7c11da/1852495110/il_570xN.1852495110_g8kx.jpg",
  },
  {
    name: "Farmer's Market Wreath",
    price: 60,
    description:
      "Hand made on a family-owned farm, our popular wreath and garland celebrate this tradition with a medley of colorful dried flowers and fragrant herbs that add natural beauty to the home.",
    image:
      "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202217/0092/img16o.jpg",
  },
  {
    name: "Zen",
    price: 48,
    description:
      "With a modern sculpture design, this floral bouquet is created with purple orchids, mini bamboo and green carnations will improve a home's feng shui.",
    image:
      "https://fyf.tac-cdn.net/images/products/large/T81-1.jpg?auto=webp&quality=80&width=590",
  },
];
const bonsais = [
  {
    name: "Apple",
    price: 160,
    description:
      "Also known as Pitch Apple and Monkey Apple, you can expect to see beautiful white and pink flowers in summertime, while the tree is in bloom.",
    image:
      "https://548038.smushcdn.com/934934/wp-content/uploads/2015/04/apple-bonsai-tree-1024x955.jpg?lossy=1&strip=0&webp=1",
  },
  {
    name: "Azalea",
    price: 50,
    description:
      "When shaped with care and precision, your tiny Azalea tree can reward you with dazzling clouds of blossoms in pink, red or white.",
    image:
      "https://548038.smushcdn.com/934934/wp-content/uploads/2015/04/azalea-bonsai-tree-1024x952.jpg?lossy=1&strip=0&webp=1",
  },
  {
    name: "Bahama Berry",
    price: 170,
    description:
      "Bahama Berry Bonsais smell heavenly and despite the high-maintenance, they make a wonderfully rewarding experience for the more seasoned Bonsai cultivators.",
    image:
      "https://548038.smushcdn.com/934934/wp-content/uploads/2015/04/bahama-berry-bonsai-tree-841x1024.jpg?lossy=1&strip=0&webp=1",
  },
  {
    name: "Cherry",
    price: 60,
    description:
      "You might be surprised to find out that a Cherry Bonsai tree comes from something as simple as a cherry seed!",
    image:
      "https://548038.smushcdn.com/934934/wp-content/uploads/2015/04/cherry-bonsai-tree-1024x768.jpg?lossy=1&strip=0&webp=1",
  },
  {
    name: "Hibiscus",
    price: 120,
    description:
      "although it is almost impossible to compare various bonsais in terms of their incredible appearance, for sure, there is no other flowering species like the Hibiscus, growing strikingly vibrant flowers.",
    image:
      "https://548038.smushcdn.com/934934/wp-content/uploads/2015/04/hibiscus-bonsai-tree-1024x1001.jpg?lossy=1&strip=0&webp=1",
  },
];

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("info", {
    title: "Full Bloom",
    header: "Welcome to Full Bloom!",
    message: "We sell flowers, bonsais, and bouquets. Feel free to explore!",
  });
});

app.get("/aboutme", (req, res) => {
  res.render("info", {
    title: "About Me",
    header: "About Me",
    message:
      "My name is Yao. I am a software engineering candidate at Per Scholas. This is my virtual flower shop.",
  });
});

app.get("/inspiration", (req, res) => {
  res.render("info", {
    title: "Inspiration",
    header: "Inspiration",
    message:
      "My inspiration for this site was from our class activity, The Botany Express. I am also inspired by the HBO Max original series, Full Bloom. The show is made up of multiple contests where contestants take a theme, flowers, and other assets to build a project live. Most challenges are solo challenges except for the team projects, which can get astronomical. ",
  });
});

app.get("/special", (req, res) => {
  res.render("info", {
    title: "Special Requests",
    header: "Special Requests",
    message:
      "We also custom make arrangements. Please reach out to us with a description and flowers you want us to include in your final piece.",
  });
});

app.get("/flowers", (req, res) => {
  res.render("show", { title: "Flowers", category: flowers });
});

app.get("/arrangements", (req, res) => {
  res.render("show", { title: "Arrangements", category: arrangements });
});

app.get("/bonsais", (req, res) => {
  res.render("show", { title: "Bonsais", category: bonsais });
});

app.get("/flowers/:id", (req, res) => {
  res.render("listing", {
    title: "Flowers",
    id: req.params.id,
    category: flowers,
  });
});

app.get("/arrangements/:id", (req, res) => {
  res.render("listing", {
    title: "Arrangements",
    id: req.params.id,
    category: arrangements,
  });
});

app.get("/bonsais/:id", (req, res) => {
  res.render("listing", {
    title: "Bonsais",
    id: req.params.id,
    category: bonsais,
  });
});

app.listen(port, () => {
  console.log("I am listening on port", port);
});
