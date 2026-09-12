import avocadosAsset from "@/assets/hoc-avocados.jpg.asset.json";
import avocadoTreeAsset from "@/assets/hoc-avocado-tree.jpg.asset.json";
import avocadoBoxesAsset from "@/assets/hoc-avocado-boxes.jpg.asset.json";
import honeyAsset from "@/assets/hoc-honey.jpg.asset.json";
import honeyBucketAsset from "@/assets/hoc-honey-bucket.jpg.asset.json";
import chilliesAsset from "@/assets/hoc-chillies.jpg.asset.json";
import chilliFieldAsset from "@/assets/hoc-chilli-field.jpg.asset.json";
import chilliHarvestAsset from "@/assets/hoc-chilli-harvest.jpg.asset.json";
import packhouseAsset from "@/assets/hoc-hero-packhouse.jpg.asset.json";
import hassAvocadoImage from "@/assets/product-images/hass-avocado.jpg";
import fuerteAvocadoImage from "@/assets/product-images/fuerte-avocado.jpg";
import localAvocadoImage from "@/assets/product-images/local-avocado.jpg";
import organicHoneyImage from "@/assets/product-images/organic-honey.jpg";
import ajiLimoImage from "@/assets/product-images/aji-limo.jpg";
import ajiAmarilloImage from "@/assets/product-images/aji-amarillo.jpg";
import ajiEscabecheImage from "@/assets/product-images/aji-escabeche.jpg";
import demonImage from "@/assets/product-images/demon.jpg";
import habaneroRedImage from "@/assets/product-images/habanero-red.jpg";
import { newImages } from "@/lib/new-images";

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
      "Hass avocados are grown by our partner farmers across Tanzania's southern highlands and prepared at the HOC packhouse. Fruit is hand-picked, sorted and packed with care so it arrives in the condition our buyers expect.",
    availability: "Available — contact us for current availability.",
    image: hassAvocadoImage,
    alt: "Freshly harvested Hass avocados in a crate at the HOC packhouse",
    gallery: [
      {
        src: hassAvocadoImage,
        alt: "Harvested Hass avocados in a crate",
      },
      { src: avocadoTreeAsset.url, alt: "Avocados ripening on the tree" },
      {
        src: avocadoBoxesAsset.url,
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
      { src: avocadosAsset.url, alt: "Graded avocados at the packhouse" },
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
        src: packhouseAsset.url,
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
    short: "Pure honey harvested from the forests of the southern highlands.",
    detail:
      "Our honey is harvested from hives kept in and around the forests of the southern highlands, then handled with minimal processing so the natural character of the honey is kept intact.",
    availability: "Available — contact us for current availability.",
    image: organicHoneyImage,
    alt: "Golden HOC organic honey poured into a glass jar",
    gallery: [
      {
        src: organicHoneyImage,
        alt: "Organic honey in a glass jar",
      },
      { src: honeyBucketAsset.url, alt: "A bucket of HOC honey from Njombe" },
      { src: newImages.honeyBuckets, alt: "HOC honey buckets prepared for market" },
      { src: newImages.stinglessBeeHoney, alt: "HOC Stingless Bee Honey container" },
    ],
    quantity: true,
  },
  {
    slug: "aji-limo",
    name: "Aji Limo",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Aji Limo",
    short: "A bright, aromatic chilli grown to buyer specification.",
    detail:
      "Aji Limo is grown by our partner farmers under organic practice and harvested by hand. Volumes and planting can be arranged with buyers ahead of the season.",
    availability: "Grown to order — talk to us about your requirements.",
    image: ajiLimoImage,
    alt: "Freshly picked HOC chillies in a basket",
    gallery: [
      { src: ajiLimoImage, alt: "Freshly picked chillies" },
      { src: chilliFieldAsset.url, alt: "HOC chilli field" },
      { src: newImages.chilliSauce, alt: "HOC Pilpili Mbuz chilli sauce bottles" },
    ],
    quantity: true,
  },
  {
    slug: "aji-amarillo",
    name: "Aji Amarillo",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Aji Amarillo",
    short: "A golden chilli variety cultivated with our farmer network.",
    detail:
      "Aji Amarillo is planted with farmers who have grown it with us before, so quality and handling stay consistent from field to packhouse.",
    availability: "Grown to order — talk to us about your requirements.",
    image: ajiAmarilloImage,
    alt: "Chillies growing in an HOC field",
    gallery: [
      {
        src: ajiAmarilloImage,
        alt: "Chilli plants in the field",
      },
      { src: chilliesAsset.url, alt: "Harvested chillies" },
      { src: newImages.brandedUniform, alt: "Highlands Organic branded field uniform" },
    ],
    quantity: true,
  },
  {
    slug: "aji-escabeche",
    name: "Aji Escabeche",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Aji Escabeche",
    short: "Hand-harvested and sorted for fresh and processing buyers.",
    detail:
      "Aji Escabeche is picked by hand and sorted before it leaves the farm, ready for fresh buyers or for processing partners.",
    availability: "Grown to order — talk to us about your requirements.",
    image: ajiEscabecheImage,
    alt: "A farmer holding freshly harvested chillies",
    gallery: [
      {
        src: ajiEscabecheImage,
        alt: "Chilli harvest in the hands of a farmer",
      },
      { src: chilliFieldAsset.url, alt: "Chilli field at HOC" },
      { src: newImages.chilliSauce, alt: "Highlands Organic chilli sauce" },
    ],
    quantity: true,
  },
  {
    slug: "demon",
    name: "Demon",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Demon",
    short: "A hot variety grown under our organic farming practice.",
    detail:
      "Demon chillies are grown with the same organic practice as the rest of our chilli programme and harvested to the schedule agreed with the buyer.",
    availability: "Grown to order — talk to us about your requirements.",
    image: demonImage,
    alt: "Red and yellow HOC chillies after harvest",
    gallery: [
      { src: demonImage, alt: "Demon chillies on the plant" },
      { src: chilliHarvestAsset.url, alt: "Hand-picked chillies" },
      { src: newImages.brandedUniform, alt: "Highlands Organic branded field uniform" },
    ],
    quantity: true,
  },
  {
    slug: "habanero-red",
    name: "Habanero Red",
    category: "chillies",
    categoryLabel: "Chillies",
    variety: "Habanero Red",
    short: "Deep red habanero, grown and hand-picked by our farmers.",
    detail:
      "Habanero Red is cultivated by our partner farmers and hand-picked at colour, then sorted before dispatch.",
    availability: "Grown to order — talk to us about your requirements.",
    image: habaneroRedImage,
    alt: "Deep red habanero chillies freshly harvested",
    gallery: [
      { src: habaneroRedImage, alt: "Red habanero chillies" },
      {
        src: chilliFieldAsset.url,
        alt: "Chilli plants growing in the highlands",
      },
    ],
    quantity: true,
  },
];

// Indicative Tanzania market benchmarks in TZS/kg. These are not final export
// quotations; grade, certification, packing, freight and destination change
// the final commercial price.
export const productPricing: Record<string, ProductPricing> = {
  "hass-avocado": { price: 2000, unit: "kg", currency: "TZS" },
  "fuerte-avocado": { price: 1700, unit: "kg", currency: "TZS" },
  "local-avocado": { price: 1500, unit: "kg", currency: "TZS" },
  "organic-honey": { price: 12000, unit: "kg", currency: "TZS" },
  "aji-limo": { price: 7000, unit: "kg", currency: "TZS" },
  "aji-amarillo": { price: 6000, unit: "kg", currency: "TZS" },
  "aji-escabeche": { price: 5000, unit: "kg", currency: "TZS" },
  demon: { price: 2000, unit: "kg", currency: "TZS" },
  "habanero-red": { price: 2000, unit: "kg", currency: "TZS" },
};

export const getProductPricing = (slug: string) =>
  productPricing[slug] ?? { price: 0, unit: "kg", currency: "TZS" as const };

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (category: CategoryId) =>
  products.filter((p) => p.category === category);
