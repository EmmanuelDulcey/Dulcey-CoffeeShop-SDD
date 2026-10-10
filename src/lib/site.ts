export const site = {
  name: "Feeding Life Coffee Shop",
  shortName: "Feeding Life",
  tagline: "Café de origen local, tostado con alma.",
  description:
    "Cultivamos relaciones directas con fincas locales y tostamos en pequeños lotes para que cada taza cuente una historia.",
  whatsappNumber: "573000000000",
  whatsappDisplay: "+57 300 000 0000",
  email: "hola@feedinglifecoffee.com",
  address: "Calle 00 #00-00, Barrio Centro, Ciudad",
  mapsUrl: "https://maps.google.com",
  hours: "Lun a Sáb · 7:00 a.m. – 7:00 p.m.",
  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    facebook: "https://facebook.com",
  },
  nav: [
    { label: "Catálogo", href: "#catalogo" },
    { label: "Origen", href: "#origen" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const currency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
