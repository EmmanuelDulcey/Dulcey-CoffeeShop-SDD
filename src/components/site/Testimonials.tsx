import { Reveal } from "@/components/ui/Reveal";
import { IconStar } from "@/components/ui/Icons";

const reviews = [
  {
    quote:
      "El mejor espresso que he tomado en la ciudad. Se nota la frescura del tueste.",
    name: "Daniela R.",
    role: "Cliente frecuente",
    tint: "#c98b4b",
  },
  {
    quote:
      "La suscripción cambió mis mañanas. Llega recién tostado y con la historia de la finca.",
    name: "Andrés M.",
    role: "Suscriptor desde 2024",
    tint: "#c5663f",
  },
  {
    quote:
      "Pedí para la oficina y el proceso por WhatsApp fue rapidísimo. Café impecable.",
    name: "Sofía T.",
    role: "Pedido corporativo",
    tint: "#9a5a24",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-caramel-dark">
            Testimonios
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-coffee-900">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 100}>
              <figure className="card-soft flex h-full flex-col rounded-3xl border border-coffee-900/10 bg-white/70 p-8">
                <div className="mb-5 flex gap-1 text-caramel">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="flex-1 font-body text-lg leading-relaxed text-coffee-800">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-coffee-900/10 pt-5">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full font-ui text-sm font-bold text-cream"
                    style={{ backgroundColor: r.tint }}
                  >
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-ui text-sm font-bold text-coffee-900">
                      {r.name}
                    </span>
                    <span className="block font-ui text-xs uppercase tracking-wider text-coffee-500">
                      {r.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
