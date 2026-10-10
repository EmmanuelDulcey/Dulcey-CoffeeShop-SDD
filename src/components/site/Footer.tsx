import Image from "next/image";
import { site } from "@/lib/site";
import {
  IconInstagram,
  IconTiktok,
  IconFacebook,
  IconWhatsapp,
  IconMapPin,
} from "@/components/ui/Icons";

const columns = [
  {
    title: "Explorar",
    links: site.nav,
  },
  {
    title: "Productos",
    links: [
      { label: "Café en grano", href: "#catalogo" },
      { label: "Cold brew", href: "#catalogo" },
      { label: "Bebidas de barra", href: "#catalogo" },
      { label: "Suscripción", href: "#catalogo" },
    ],
  },
];

const socials = [
  { icon: IconInstagram, href: site.socials.instagram, label: "Instagram" },
  { icon: IconTiktok, href: site.socials.tiktok, label: "TikTok" },
  { icon: IconFacebook, href: site.socials.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden border-t-2 border-brand-500 bg-coffee-950 pt-20 pb-10 text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-caramel/40">
                <Image src="/logo.png" alt={site.name} fill sizes="48px" className="object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold text-cream">Feeding Life</span>
                <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-cream/50">
                  Coffee Shop
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-cream/65">
              {site.tagline} Café de especialidad de origen local, tostado en pequeños
              lotes.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition hover:border-caramel hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-cream/70 transition hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 font-body text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.address}
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-gold"
                >
                  <IconWhatsapp className="h-4 w-4" />
                  {site.whatsappDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-4 font-body text-xs text-cream/45">{site.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="font-ui text-xs text-cream/45">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-ui text-xs text-cream/45">
            Hecho con granos, código y cariño.
          </p>
        </div>
      </div>
    </footer>
  );
}
