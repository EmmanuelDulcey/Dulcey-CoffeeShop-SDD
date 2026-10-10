import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconMountain,
  IconLeaf,
  IconDroplet,
  IconSparkles,
} from "@/components/ui/Icons";

const farmPhoto =
  "https://images.pexels.com/photos/36040333/pexels-photo-36040333.jpeg?auto=compress&cs=tinysrgb&w=1100";

const pillars = [
  {
    icon: IconMountain,
    title: "Altitud",
    value: "1.800 m",
    text: "Café cultivado en montaña, donde la maduración lenta concentra dulzor y acidez.",
  },
  {
    icon: IconLeaf,
    title: "Variedad",
    value: "Caturra & Bourbon",
    text: "Selección de variedades tradicionales adaptadas al terroir local.",
  },
  {
    icon: IconDroplet,
    title: "Proceso",
    value: "Lavado & Honey",
    text: "Beneficio cuidadoso, fermentaciones controladas y secado al sol.",
  },
  {
    icon: IconSparkles,
    title: "Tueste",
    value: "Pequeños lotes",
    text: "Tostamos cada semana en lotes de 5 kg para máxima frescura.",
  },
];

export function Origin() {
  return (
    <section
      id="origen"
      className="noise relative isolate overflow-hidden bg-coffee-950 py-24 text-cream sm:py-32"
    >
      {/* topographic decoration */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.12]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M-50 ${120 + i * 55} C 150 ${60 + i * 55}, 300 ${200 + i * 55}, 500 ${110 + i * 55} S 850 ${180 + i * 55}, 900 ${90 + i * 55}`}
            fill="none"
            stroke="#c98b4b"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <div className="blob absolute -right-20 top-1/4 h-80 w-80 animate-blob bg-caramel/30" aria-hidden />
      <div className="blob absolute -left-24 bottom-0 h-72 w-72 animate-blob bg-brand-500/15 [animation-delay:-7s]" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <span className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Nuestro origen
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-cream">
                Del suelo
                <br />a tu taza
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-body text-lg leading-relaxed text-cream/75">
                Trabajamos codo a codo con doce familias caficultoras de la región.
                Recorremos sus fincas, catamos cada lote y pagamos un precio justo por
                encima del mercado. Cuando eliges Feeding Life, eliges historias reales.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <blockquote className="mt-8 border-l-2 border-brand-500 pl-6 font-script text-2xl leading-snug text-cream/90">
                “El café no se apura: se cultiva con paciencia y se tuesta con respeto.”
              </blockquote>
              <p className="mt-3 pl-6 font-ui text-xs uppercase tracking-[0.2em] text-gold">
                — Familia productora, Finca La Esperanza
              </p>
            </Reveal>
          </div>

          {/* Farm photo */}
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-cream/10 shadow-2xl">
              <Image
                src={farmPhoto}
                alt="Cosecha manual de cerezas de café en la finca"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 to-transparent" />
            </div>
            <span className="script pointer-events-none absolute -left-4 -top-6 rotate-[-4deg] text-4xl text-gold drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)]">
              puro campo
            </span>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-cream px-5 py-3 shadow-xl">
              <p className="font-display text-2xl font-bold text-coffee-900">12 fincas</p>
              <p className="font-ui text-[10px] uppercase tracking-wider text-coffee-500">
                aliadas y trazables
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass-dark h-full rounded-3xl border border-cream/10 p-6 transition hover:border-caramel/50">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-caramel text-coffee-950">
                  <p.icon className="h-6 w-6" />
                </span>
                <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-cream/50">
                  {p.title}
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-gold">{p.value}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/70">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
