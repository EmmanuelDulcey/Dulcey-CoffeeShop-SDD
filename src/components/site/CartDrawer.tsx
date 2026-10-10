"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useOrder } from "./OrderContext";
import { currency, site } from "@/lib/site";
import {
  IconBag,
  IconClose,
  IconMinus,
  IconPlus,
  IconWhatsapp,
} from "@/components/ui/Icons";

export function CartDrawer() {
  const { items, isOpen, close, setQty, remove, total, count, clear } = useOrder();
  const panelRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [isOpen, close]);

  const buildWhatsapp = () => {
    const lines = items.map(
      (i) => `• ${i.qty} × ${i.name} (${i.unit}) — ${currency(i.price * i.qty)}`
    );
    const text = [
      `¡Hola ${site.name}! Quiero hacer un pedido:`,
      "",
      ...lines,
      "",
      `Total: ${currency(total)}`,
    ].join("\n");
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <div
        onClick={close}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[70] bg-coffee-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Tu pedido"
        aria-modal="true"
        inert={!isOpen}
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-coffee-900/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-coffee-900 text-gold">
              <IconBag className="h-5 w-5" />
            </span>
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.2em] text-coffee-600">
                Tu pedido
              </p>
              <p className="font-display text-xl font-bold text-coffee-900">
                {count} {count === 1 ? "ítem" : "ítems"}
              </p>
            </div>
          </div>
          <button
            ref={closeRef}
            onClick={close}
            aria-label="Cerrar pedido"
            className="grid h-10 w-10 place-items-center rounded-full text-coffee-900 transition hover:bg-coffee-900/10"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-sand text-coffee-500">
                <IconBag className="h-7 w-7" />
              </span>
              <p className="font-display text-2xl font-bold text-coffee-900">
                Tu pedido está vacío
              </p>
              <p className="mt-2 max-w-xs font-body text-sm text-coffee-600">
                Agrega tus cafés favoritos del catálogo y arma tu pedido en segundos.
              </p>
              <button
                onClick={close}
                className="mt-6 rounded-full bg-coffee-900 px-6 py-3 font-ui text-sm font-semibold text-cream transition hover:bg-coffee-800"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-coffee-900/10 bg-white/60 p-4"
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-sand">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-ui text-sm font-semibold text-coffee-900">
                          {item.name}
                        </p>
                        <p className="font-body text-xs text-coffee-500">
                          {item.unit} · {currency(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        aria-label={`Quitar ${item.name}`}
                        className="font-ui text-xs text-coffee-500 transition hover:text-coffee-900"
                      >
                        Quitar
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-coffee-900/15 px-2 py-1">
                        <button
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label="Restar"
                          className="grid h-6 w-6 place-items-center rounded-full text-coffee-900 transition hover:bg-coffee-900/10"
                        >
                          <IconMinus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center font-ui text-sm font-semibold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label="Sumar"
                          className="grid h-6 w-6 place-items-center rounded-full text-coffee-900 transition hover:bg-coffee-900/10"
                        >
                          <IconPlus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-ui text-sm font-bold text-coffee-900">
                        {currency(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-coffee-900/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-ui text-sm uppercase tracking-[0.15em] text-coffee-600">
                Total estimado
              </span>
              <span className="font-display text-3xl font-bold text-coffee-900">
                {currency(total)}
              </span>
            </div>
            <a
              href={buildWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-caramel px-6 py-4 font-ui text-sm font-bold text-coffee-950 transition hover:bg-gold"
            >
              <IconWhatsapp className="h-5 w-5" />
              Enviar pedido por WhatsApp
            </a>
            <button
              onClick={clear}
              className="mt-3 w-full rounded-full px-6 py-2 font-ui text-xs text-coffee-500 transition hover:text-coffee-900"
            >
              Vaciar pedido
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
