import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconBean, IconLeaf, IconStar } from "@/components/ui/Icons";

const heroPhoto =
  "https://images.pexels.com/photos/30408765/pexels-photo-30408765.jpeg?auto=compress&cs=tinysrgb&w=1100";

const stats = [
  { value: "12", label: "Fincas aliadas" },
  { value: "48h", label: "Tueste → tu taza" },
  { value: "100%", label: "Origen local" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="noise relative isolate overflow-hidden bg-coffee-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background art */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,#3f281c_0%,#1b0f09_58%,#120a06_100%)]" />
        <div
          className="blob absolute -left-24 top-10 h-96 w-96 animate-blob bg-caramel/35"
          aria-hidden
        />
        <div
          className="blob absolute right-[-6rem] top-40 h-[26rem] w-[26rem] animate-blob bg-terracotta/25 [animation-delay:-6s]"
          aria-hidden
        />
        <div
          className="blob absolute bottom-[-8rem] left-1/3 h-80 w-80 animate-blob bg-brand-500/20 [animation-delay:-3s]"
          aria-hidden
        />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#faf5ec_1px,transparent_1px),linear-gradient(90deg,#faf5ec_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-caramel/10 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <IconLeaf className="h-4 w-4 text-brand-400" />
              Café de especialidad · Origen local
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7.5vw,6rem)] font-extrabold leading-[0.95] tracking-tight text-cream">
              Café de origen,
              <span className="block text-gradient-warm">tostado con alma.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-cream/75">
              {site.description} Cultivamos relaciones directas con productores y
              tostamos en pequeños lotes para que cada taza cuente una historia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#catalogo"
                className="group inline-flex items-center gap-2 rounded-full bg-caramel px-7 py-4 font-ui text-sm font-bold text-coffee-950 shadow-lg shadow-caramel/25 transition hover:bg-gold"
              >
                Explorar catálogo
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#origen"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-ui text-sm font-semibold text-cream transition hover:border-caramel hover:text-gold"
              >
                Conoce el origen
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-bold text-gold">
                    {s.value}
                  </dt>
                  <dd className="font-ui text-xs uppercase tracking-[0.15em] text-cream/70">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — hero photo */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-lg">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-cream/10 shadow-2xl">
              <Image
                src={heroPhoto}
                alt="Barista preparando café en Feeding Life Coffee Shop"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent" />
            </div>

            {/* script decorative accent */}
            <span
              aria-hidden
              className="script pointer-events-none absolute -left-6 top-8 -rotate-6 text-4xl text-gold drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
            >
              del cafetal
            </span>

            {/* logo badge */}
            <div className="absolute -right-4 -top-4 h-20 w-20 overflow-hidden rounded-full bg-cream shadow-xl ring-4 ring-caramel/50">
              <Image
                src="/logo.png"
                alt={`${site.name} — logo`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            {/* floating chips */}
            <div className="absolute -left-5 bottom-24 flex animate-float items-center gap-2 rounded-2xl bg-cream/95 px-4 py-3 shadow-xl">
              <IconStar className="h-5 w-5 text-caramel" />
              <div className="leading-tight">
                <p className="font-ui text-sm font-bold text-coffee-900">4.9/5.0</p>
                <p className="font-ui text-[10px] uppercase tracking-wider text-coffee-500">
                  Clientes felices
                </p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-6 flex animate-float-slow items-center gap-2 rounded-2xl bg-coffee-900 px-4 py-3 shadow-xl ring-1 ring-brand-500/50">
              <IconBean className="h-5 w-5 text-brand-400" />
              <div className="leading-tight">
                <p className="font-ui text-sm font-bold text-cream">Tostado hoy</p>
                <p className="font-ui text-[10px] uppercase tracking-wider text-cream/70">
                  Frescura real
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
