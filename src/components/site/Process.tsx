import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Cosecha selectiva",
    text: "Recolección grano a grano en su punto óptimo de maduración.",
  },
  {
    n: "02",
    title: "Beneficio & secado",
    text: "Fermentaciones controladas y secado al sol en marquesina.",
  },
  {
    n: "03",
    title: "Tueste en lote",
    text: "Perfiles de tueste diseñados para resaltar cada origen.",
  },
  {
    n: "04",
    title: "Frescura a tu puerta",
    text: "Empacado el mismo día y entrega en menos de 48 horas.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative mx-auto mb-16 max-w-2xl text-center">
          <span className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-caramel-dark">
            El proceso
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-coffee-900">
            Cuatro pasos, una taza perfecta
          </h2>
        </Reveal>

        <ol className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-coffee-900/15 md:block" />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 120} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-caramel font-display text-3xl font-bold text-coffee-950 shadow-[0_10px_30px_-12px_rgba(43,26,17,0.55)]">
                  {step.n}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-coffee-900">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-coffee-600">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
