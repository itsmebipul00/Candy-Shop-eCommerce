import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Marshmallows",
    image: "/images/Pink-White-Marshmallows.webp",
    price: "180",
    categoryName: "marshmello",
    countInStock: 2,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Choco-Vanilla Fudge",
    image: "/images/CHOCOVANILLAFUDGE.webp",
    price: "120",
    categoryName: "chocolates",
    countInStock: 8,
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "Dark-Choco Almonds",
    image: "/images/Dark-Chocolate-Almonds.webp",
    price: "90",
    categoryName: "dark-chocolates",
    countInStock: 7,
    rating: 2.5,
  },
  {
    _id: uuid(),
    title: "Fizzy-Cola Bottle",
    image: "/images/Fizzycolabottle.webp",
    price: "40",
    categoryName: "fizzy",
    countInStock: 4,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Gummybears",
    image: "/images/Gummybears.webp",
    price: "100",
    categoryName: "gummies",
    countInStock: 4,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Jellysnakes",
    image: "/images/Jellysnakes.webp",
    price: "90",
    categoryName: "jellies",
    countInStock: 7,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "WaterMelon Lollipop",
    image: "/images/Whoa-ter-Melon-Lollipop.webp",
    price: "70",
    categoryName: "lollipops",
    countInStock: 5,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Raspberry blast",
    image: "/images/Raspberry_blast.webp",
    price: "110",
    categoryName: "rasberry",
    countInStock: 5,
    rating: 5,
  },
  {
    _id: uuid(),
    title: "Rainbow Bites",
    image: "/images/RainbowBites.webp",
    price: "120",
    categoryName: "fizzy",
    countInStock: 6,
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "Fizzy Peaches",
    image: "/images/FizzyPeaches.webp",
    price: "130",
    categoryName: "fizzy",
    countInStock: 3,
    rating: 3.5,
  },
];
