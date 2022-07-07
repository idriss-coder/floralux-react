/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { articleProps, ctgProps } from "../interfaces/dataProps";

import demo from "../assets/illustration/demo.webp";
import demo2 from "../assets/illustration/demo-permut.webp";
import demoCtg from "../assets/illustration/demo-ctg.jpg";

const articlesData: Array<articleProps> = [
  {
    id: 1,
    title: "Fleur rose",
    slug: "fleur-rose",
    image: demo,
    galery: [demo2],
    price: 2500,
    ctg: "Rose",
    description: "lorem ipsum",
    qtt: 12,
  },
  {
    id: 2,
    title: "Fleur de palme",
    slug: "fleur-rose",
    image: demo2,
    galery: [demo],
    price: 1300,
    ctg: "Rose",
    description: "lorem ipsum",
    qtt: 12,
  },
  {
    id: 3,
    title: "Superbe fleur",
    slug: "superbe-fleur",
    image: demo2,
    galery: [demo],
    price: 1900,
    ctg: "Rose",
    description: "lorem ipsum",
    qtt: 12,
  },
];

export const ctgData: Array<ctgProps> = [
  {
    id: 1,
    title: "Rose",
    slug: "rose",
    image: demoCtg,
    articleQtt: 20,
  },
  {
    id: 2,
    title: "Rose",
    slug: "rose",
    image: demoCtg,
    articleQtt: 20,
  },
];

export default articlesData;
