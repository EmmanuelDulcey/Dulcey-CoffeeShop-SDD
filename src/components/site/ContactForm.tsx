"use client";

import { useState } from "react";
import { currency, site } from "@/lib/site";
import { useOrder } from "./OrderContext";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCheck,
  IconMail,
  IconMapPin,
  IconClock,
  IconWhatsapp,
} from "@/components/ui/Icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { items, total, count } = useOrder();
  const [status, setStatus] = useState<Status>("idle");

  const orderText = items
    .map((i) => `${i.qty} × ${i.name} (${i.unit})`)
    .join(", ");

  const whatsappLink = () => {
    const lines = items.map(
      (i) => `• ${i.qty} × ${i.name} — ${currency(i.price * i.qty)}`
    );
    const text = [
      `¡Hola ${site.name}! Quiero hacer un pedido.`,
      "",
      ...lines,
      "",
      `Total: ${currency(total)}`,
    ].join("\n");
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          topic: data.get("topic"),
          message: data.get("message"),
          order: items.map((i) => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
          total,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="noise relative isolate overflow-hidden bg-coffee-950 py-24 text-cream sm:py-32"
    >
      <div className="blob absolute -left-24 top-10 h-80 w-80 animate-blob bg-caramel/30" aria-hidden />
      <div className="blob absolute -right-16 bottom-0 h-72 w-72 animate-blob bg-terracotta/20 [animation-delay:-5s]" aria-hidden />
      <div className="blob absolute right-1/3 top-1/4 h-64 w-64 animate-blob bg-brand-500/12 [animation-delay:-9s]" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info */}
        <div>
          <Reveal>
            <span className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Contacto & pedidos
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-cream">
              Hagamos
              <br />
              tu pedido
            </h2>
            <p className="mt-5 max-w-md font-body text-cream/75">
              ¿Listo para un café increíble? Escríbenos o envía tu pedido en segundos
              por WhatsApp. Respondemos el mismo día.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-9 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-caramel text-coffee-950">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-ui text-xs uppercase tracking-wider text-cream/50">
                    Visítanos
                  </p>
                  <p className="font-body text-cream">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-caramel text-coffee-950">
                  <IconClock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-ui text-xs uppercase tracking-wider text-cream/50">
                    Horario
                  </p>
                  <p className="font-body text-cream">{site.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-caramel text-coffee-950">
                  <IconMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-ui text-xs uppercase tracking-wider text-cream/50">
                    Escríbenos
                  </p>
                  <a href={`mailto:${site.email}`} className="font-body text-cream hover:text-gold">
                    {site.email}
                  </a>
                  <p className="font-body text-cream/80">{site.whatsappDisplay}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-4 font-ui text-sm font-bold text-coffee-950 transition hover:bg-gold"
            >
              <IconWhatsapp className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={140}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-cream/10 bg-cream p-6 text-coffee-900 shadow-2xl sm:p-9"
          >
            {count > 0 && (
              <div className="mb-6 rounded-2xl border border-caramel/40 bg-caramel/10 p-4">
                <p className="font-ui text-xs font-bold uppercase tracking-wider text-coffee-700">
                  Tu pedido actual ({count} {count === 1 ? "ítem" : "ítems"})
                </p>
                <p className="mt-1 font-body text-sm text-coffee-600">{orderText}</p>
                <p className="mt-2 font-display text-2xl font-bold text-coffee-900">
                  {currency(total)}
                </p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="name" placeholder="Tu nombre" required />
              <Field
                label="Teléfono"
                name="phone"
                type="tel"
                placeholder="300 000 0000"
                required
              />
              <Field
                label="Correo"
                name="email"
                type="email"
                placeholder="tucorreo@email.com"
                className="sm:col-span-2"
                required
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block font-ui text-xs font-bold uppercase tracking-wider text-coffee-700">
                  Motivo
                </label>
                <select
                  name="topic"
                  className="w-full rounded-2xl border border-coffee-900/15 bg-white px-4 py-3 font-body text-sm text-coffee-900 outline-none transition focus:border-caramel focus:ring-2 focus:ring-caramel/30"
                  defaultValue="pedido"
                >
                  <option value="pedido">Hacer un pedido</option>
                  <option value="consulta">Consulta general</option>
                  <option value="catering">Evento / catering</option>
                  <option value="mayoreo">Compra al por mayor</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block font-ui text-xs font-bold uppercase tracking-wider text-coffee-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos qué necesitas..."
                  className="w-full resize-none rounded-2xl border border-coffee-900/15 bg-white px-4 py-3 font-body text-sm text-coffee-900 outline-none transition focus:border-caramel focus:ring-2 focus:ring-caramel/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-caramel px-6 py-4 font-ui text-sm font-bold text-coffee-950 transition hover:bg-gold disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  <IconCheck className="h-5 w-5" /> ¡Enviado! Te contactamos pronto
                </>
              ) : status === "sending" ? (
                "Enviando..."
              ) : (
                "Enviar pedido"
              )}
            </button>

            {status === "error" && (
              <p className="mt-3 text-center font-ui text-xs text-red-600">
                Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}
            {status === "sent" && (
              <p className="mt-3 text-center font-ui text-xs text-coffee-500">
                Recibimos tu solicitud correctamente.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-ui text-xs font-bold uppercase tracking-wider text-coffee-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-coffee-900/15 bg-white px-4 py-3 font-body text-sm text-coffee-900 outline-none transition focus:border-caramel focus:ring-2 focus:ring-caramel/30"
      />
    </div>
  );
}
