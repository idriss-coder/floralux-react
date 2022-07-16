/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { articleProps, ctgProps } from "../interfaces/dataProps";

import demoCtg from "../assets/illustration/demo-ctg.jpg";

const articlesData: Array<articleProps> = [
  {
    id: 1,
    title:
      "MOSHOU Fleurs Artificielles Deco avec Vase en Bois-Hortensia Roses Chrysanthème et Tournesol Bouquet Vase Fleurs Artificielle en Pot pour Maison Salon,Bureau,Fête,Décoration de Mariage (Rouge)",
    slug: "fleur-rose",
    image:
      "https://cdn.guihon.cm/guihon_pL691657807009101tCsa.jpg?quality=medium&compressed=true",
    galery: [
      "https://cdn.guihon.cm/guihon_x2Jt16578074500785Pam.jpg?quality=medium&compressed=true",
    ],
    price: 2500,
    ctg: "Rose",
    description: "lorem ipsum",
    qtt: 12,
  },
  {
    id: 2,
    title:
      "Olly & Rose Lot de 3 pots de fleurs ronds en céramique avec soucoupes Blanc mat",
    slug: "fleur-rose",
    image:
      "https://cdn.guihon.cm/guihon_kXCo1657807121488M0yJ.jpg?quality=medium&compressed=true",
    galery: [
      "https://cdn.guihon.cm/guihon_1FyM1657807163023WHVP.jpg?quality=medium&compressed=true",
    ],
    price: 1300,
    ctg: "Rose",
    description: "lorem ipsum",
    qtt: 12,
  },
  {
    id: 3,
    title:
      "SHANGBAN 4 pièces Pot de fleur suspendu en métal clôture conteneur de fleurs Pot de jardin avec double crochet détachable seau mural porte-fleurs pour balcon jardin",
    slug: "superbe-fleur",
    image:
      "https://cdn.guihon.cm/guihon_6zgK1657807202399uKBr.jpg?quality=medium&compressed=true",
    galery: [
      "https://cdn.guihon.cm/guihon_gXkt1657807244845HJxz.jpg?quality=medium&compressed=true",
    ],
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
