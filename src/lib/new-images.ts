const imagePath = (filename: string) =>
  `/HO%20PROFILE.pdf-images/${filename}`;

export const newImages = {
  exportBoxes: imagePath("IMG-20260911-WA0002.jpg"),
  beekeeping: imagePath("IMG-20260911-WA0003.jpg"),
  honeyBuckets: imagePath("IMG-20260911-WA0004.jpg"),
  brandedUniform: imagePath("IMG-20260911-WA0005.jpg"),
  avocadoTree: imagePath("IMG-20260911-WA0006.jpg"),
  chilliSauce: imagePath("IMG-20260911-WA0007.jpg"),
  stinglessBeeHoney: imagePath("IMG-20260911-WA0008.jpg"),
  farmerTeam: imagePath("IMG-20260911-WA0009.jpg"),
  avocadoHarvest: imagePath("IMG-20260911-WA0010.jpg"),
} as const;
