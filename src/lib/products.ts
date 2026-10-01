import hassAvocadoImage from "@/assets/product-images/hass-avocado.jpg";
import fuerteAvocadoImage from "@/assets/product-images/fuerte-avocado.jpg";
import localAvocadoImage from "@/assets/product-images/local-avocado.jpg";
import organicHoneyImage from "@/assets/product-images/organic-honey.jpg";
import cayenneImage from "@/assets/product-images/red-pepper.jpeg";
import { newImages } from "@/lib/new-images";
import { siteImages } from "@/lib/site-images";

export type CategoryId = "avocados" | "honey" | "chillies";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  variety: string;
  short: string;
  detail: string;
  availability: string;
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  quantity: boolean;
};

export type ProductPricing = {
  price: number;
  unit: string;
  currency: "TZS";
};

export const formatProductPrice = (price: number) =>
  new Intl.NumberFormat("en-TZ", {
    style: "currency",
    currency: "TZS",
    maximumFractionDigits: 0,
  }).format(price);

export const categories: { id: CategoryId | "all"; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "avocados", label: "Avocados" },
  { id: "honey", label: "Honey" },
  { id: "chillies", label: "Chillies" },
];

export const products: Product[] = [
  {
    slug: "hass-avocado",
    name: "Hass",
    category: "avocados",
    categoryLabel: "Avocados",
    variety: "Hass variety",
    short:
      "Our flagship export avocado, grown organically at highland altitude.",
    detail:
      "Hass avocados are grown in our farms and partner farmers across Tanzania's southern highlands and prepared at the HOC packhouse. Fruit is sorted and packed with care so it arrives in the condition our buyers expect.",
    availability: "Available — contact us for current availability.",
    image: hassAvocadoImage,
    alt: "Freshly harvested Hass avocados in a crate at the HOC packhouse",
    gallery: [
      {
        src: hassAvocadoImage,
        alt: "Harvested Hass avocados in a crate",
      },
      { src: siteImages.avocadoTreeLegacy, alt: "Avocados ripening on the tree" },
      {
        src: siteImages.exportPallets,
        alt: "Branded HOC avocado boxes ready for export",
      },
      { src: newImages.avocadoTree, alt: "Avocados growing on a partner farm tree" },
      { src: newImages.avocadoHarvest, alt: "Freshly harvested avocados in yellow field crates" },
    ],
    quantity: true,
  },
  {
    slug: "fuerte-avocado",
    name: "Fuerte",
    category: "avocados",
    categoryLabel: "Avocados",
    variety: "Fuerte variety",
    short: "Smooth-skinned and creamy, grown alongside our Hass orchards.",
    detail:
      "Fuerte fruit comes from the same organic farms and the same careful handling as our Hass. Picked at the right maturity and graded by hand before packing.",
    availability: "Available — contact us for current availability.",
    image: fuerteAvocadoImage,
    alt: "Fuerte avocados growing on an HOC farm tree",
    gallery: [
      {
        src: fuerteAvocadoImage,
        alt: "Fuerte avocados on the tree",
      },
      { src: siteImages.avocados, alt: "Graded avocados at the packhouse" },
      { src: newImages.farmerTeam, alt: "HOC farmers and partners in an avocado orchard" },
    ],
    quantity: true,
  },
  {
    slug: "local-avocado",
    name: "Local",
    category: "avocados",
    categoryLabel: "Avocados",
    variety: "Local varieties",
    short: "Traditional Tanzanian avocado varieties from our farmer network.",
    detail:
      "Local varieties are sourced directly from smallholder farmers we work with, supporting both local markets and buyers looking for something beyond the standard export types.",
    availability: "Available — contact us for current availability.",
    image: localAvocadoImage,
    alt: "HOC avocado boxes packed for dispatch",
    gallery: [
      {
        src: localAvocadoImage,
        alt: "Packed HOC avocado boxes",
      },
      {
        src: siteImages.packhouse,
        alt: "Avocados being weighed at the HOC packhouse",
      },
    ],
    quantity: true,
  },
  {
    slug: "organic-honey",
    name: "Organic Honey",
    category: "honey",
    categoryLabel: "Honey",
    variety: "Organic honey",
    short: "Pure honey from the forests of the southern highlands.",
    detail:
      "Our honey is harvested in our farms and handled with minimal processing so the natural character of the honey is kept intact.",
    availability: "Available — contact us for current availability.",
    image: organicHoneyImage,
    alt: "Golden HOC organic honey poured into a glass jar",
    gallery: [
      {
        src: organicHoneyImage,
        alt: "Organic honey in a glass jar",
      },
      { src: siteImages.honeyBucket, alt: "A bucket of HOC honey from Njombe" },
      { src: newImages.honeyBuckets, alt: "HOC honey buckets prepared for market" },
      { src: newImages.stinglessBeeHoney, alt: "HOC Stingless Bee Honey container" },
    ],
    quantity: true,
  },
  {
    slug: "cayenne",
    name: "Cayenne",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Cayenne variety",
    short: "A bright, aromatic chilli grown to buyer specification.",
    detail:
      "Cayenne is grown by our partner farmers under organic practice. Volumes and planting can be arranged with buyers ahead of the season.",
    availability: "Grown to order — talk to us about your requirements.",
    image: cayenneImage,
    alt: "Fresh Cayenne peppers at a market",
    gallery: [
      { src: cayenneImage, alt: "Fresh Cayenne peppers at a market" },
      { src: siteImages.chilliField, alt: "Cayenne pepper field" },
      { src: newImages.chilliSauce, alt: "Tanzania Highland Organic Co. Ltd chilli sauce bottles" },
    ],
    quantity: true,
  },
];

export const productPricing: Record<string, ProductPricing> = {
  "hass-avocado": { price: 2500, unit: "kg", currency: "TZS" },
  "fuerte-avocado": { price: 1700, unit: "kg", currency: "TZS" },
  "local-avocado": { price: 1500, unit: "kg", currency: "TZS" },
  "organic-honey": { price: 10000, unit: "kg", currency: "TZS" },
  cayenne: { price: 1500, unit: "kg", currency: "TZS" },
};

export const getProductPricing = (slug: string) =>
  productPricing[slug] ?? { price: 0, unit: "kg", currency: "TZS" as const };

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (category: CategoryId) =>
  products.filter((p) => p.category === category);
