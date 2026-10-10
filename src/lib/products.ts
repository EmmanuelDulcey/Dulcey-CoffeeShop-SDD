export type CategoryId =
  | "todos"
  | "espresso"
  | "filtrado"
  | "coldbrew"
  | "granos"
  | "bebidas"
  | "reposteria"
  | "accesorios";

export type Category = {
  id: CategoryId;
  label: string;
};

export const categories: Category[] = [
  { id: "todos", label: "Todo el catálogo" },
  { id: "espresso", label: "Espresso" },
  { id: "filtrado", label: "Filtrado" },
  { id: "coldbrew", label: "Cold Brew" },
  { id: "granos", label: "Granos & Suscripción" },
  { id: "bebidas", label: "Bebidas de barra" },
  { id: "reposteria", label: "Repostería" },
  { id: "accesorios", label: "Accesorios" },
];

export type Product = {
  id: string;
  name: string;
  category: Exclude<CategoryId, "todos">;
  origin: string;
  process: string;
  altitude: string;
  roast: "Claro" | "Medio" | "Medio-oscuro" | "Oscuro" | "—";
  notes: string[];
  price: number;
  unit: string;
  accent: string;
  image: string;
  badge?: string;
  description: string;
};

const photo = (id: string, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const products: Product[] = [
  {
    id: "huila-reserva",
    name: "Huila Reserva",
    category: "espresso",
    origin: "Huila, Colombia",
    process: "Lavado",
    altitude: "1.750 m",
    roast: "Medio-oscuro",
    notes: ["Cacao", "Panela", "Naranja"],
    price: 58000,
    unit: "340 g",
    accent: "#9a5a24",
    image: photo("13735902"),
    badge: "Best seller",
    description:
      "Nuestro espresso insignia. Cuerpo cremoso y dulzor a panela que brilla solo o con leche.",
  },
  {
    id: "narino-honey",
    name: "Nariño Honey",
    category: "filtrado",
    origin: "Nariño, Colombia",
    process: "Honey",
    altitude: "1.900 m",
    roast: "Medio",
    notes: ["Mandarina", "Almendra", "Miel"],
    price: 66000,
    unit: "340 g",
    accent: "#c98b4b",
    image: photo("6341419"),
    description:
      "Proceso honey que concentra dulzor y acidez cítrica. Ideal para V60 y Chemex.",
  },
  {
    id: "tolima-natural",
    name: "Tolima Natural",
    category: "filtrado",
    origin: "Tolima, Colombia",
    process: "Natural",
    altitude: "1.820 m",
    roast: "Claro",
    notes: ["Fresa", "Vino tinto", "Chocolate"],
    price: 72000,
    unit: "340 g",
    accent: "#c5663f",
    image: photo("29619148"),
    badge: "Microlote",
    description:
      "Fermentación natural de frutos rojos. Una taza expresiva y jugosa, edición limitada.",
  },
  {
    id: "sierra-coldbrew",
    name: "Sierra Cold Brew",
    category: "coldbrew",
    origin: "Sierra Nevada",
    process: "Lavado",
    altitude: "1.600 m",
    roast: "Medio",
    notes: ["Chocolate oscuro", "Cereza", "Nuez"],
    price: 46000,
    unit: "1 L",
    accent: "#573827",
    image: photo("18997241"),
    description:
      "Extracción en frío por 18 horas. Suave, dulce y sin amargor. Listo para servir.",
  },
  {
    id: "caspio-decaf",
    name: "Caspio Descafeinado",
    category: "filtrado",
    origin: "Cauca, Colombia",
    process: "Lavado · EA",
    altitude: "1.700 m",
    roast: "Medio",
    notes: ["Cacao", "Avellana", "Caramelo"],
    price: 62000,
    unit: "340 g",
    accent: "#a67f5b",
    image: photo("30290755"),
    description:
      "Todo el sabor sin cafeína, descafeinado por proceso al agua. Perfecto para la tarde.",
  },
  {
    id: "geisha-pink",
    name: "Geisha Pink Bourbon",
    category: "filtrado",
    origin: "Huila, Colombia",
    process: "Lavado",
    altitude: "2.000 m",
    roast: "Claro",
    notes: ["Jazmín", "Durazno", "Bergamota"],
    price: 195000,
    unit: "250 g",
    accent: "#e8b44a",
    image: photo("28495604"),
    badge: "Premium",
    description:
      "Variedad de concurso. Floral, delicada y compleja. Nuestra taza más exclusiva.",
  },
  {
    id: "suscripcion",
    name: "Suscripción Grano Fresco",
    category: "granos",
    origin: "Selección rotativa",
    process: "Varios",
    altitude: "—",
    roast: "Medio",
    notes: ["Sorpresa", "Frescura", "Origen local"],
    price: 145000,
    unit: "Mes · 2 × 340 g",
    accent: "#00b838",
    image: photo("4109744"),
    badge: "Cada mes",
    description:
      "Recibe café recién tostado cada mes, con la historia del productor y guía de preparación.",
  },
  {
    id: "molido-casa",
    name: "Molido Casa",
    category: "granos",
    origin: "Blend de fincas",
    process: "Lavado",
    altitude: "1.700 m",
    roast: "Medio",
    notes: ["Chocolate", "Panela", "Almendra"],
    price: 54000,
    unit: "500 g",
    accent: "#6f4a32",
    image: photo("31945549"),
    description:
      "Blend equilibrado y versátil, molido al tamaño de tu cafetera. El de todos los días.",
  },
  {
    id: "espresso-tonic",
    name: "Espresso Tonic",
    category: "bebidas",
    origin: "Barra",
    process: "—",
    altitude: "—",
    roast: "—",
    notes: ["Cítrico", "Tónico", "Refrescante"],
    price: 16000,
    unit: "12 oz",
    accent: "#c98b4b",
    image: photo("22222976"),
    description:
      "Espresso doble sobre tónica, hielo y una cáscara de naranja. La bebida del verano.",
  },
  {
    id: "latte-panela",
    name: "Latte de Panela",
    category: "bebidas",
    origin: "Barra",
    process: "—",
    altitude: "—",
    roast: "—",
    notes: ["Panela", "Leche", "Canela"],
    price: 13000,
    unit: "12 oz",
    accent: "#e8d5b5",
    image: photo("34452164"),
    description:
      "Latte cremoso endulzado con panela local y un toque de canela. Comfort en vaso.",
  },
  {
    id: "croissant-almendra",
    name: "Croissant de Almendra",
    category: "reposteria",
    origin: "Horno local",
    process: "—",
    altitude: "—",
    roast: "—",
    notes: ["Mantequilla", "Almendra", "Crujiente"],
    price: 9500,
    unit: "unidad",
    accent: "#c98b4b",
    image: photo("24706518"),
    description:
      "Hojaldre de mantequilla relleno de crema de almendra. El compañero del espresso.",
  },
  {
    id: "mug-feeding",
    name: "Mug Feeding Life",
    category: "accesorios",
    origin: "Edición marca",
    process: "—",
    altitude: "—",
    roast: "—",
    notes: ["Cerámica", "280 ml", "Logo"],
    price: 52000,
    unit: "unidad",
    accent: "#2b1a11",
    image: photo("4264049"),
    description:
      "Taza de cerámica esmaltada con el logo. 280 ml para tu taza perfecta de cada mañana.",
  },
];
