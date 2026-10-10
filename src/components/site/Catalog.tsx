"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, products, type CategoryId } from "@/lib/products";
import { currency } from "@/lib/site";
import { useOrder } from "./OrderContext";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconPlus } from "@/components/ui/Icons";

export function Catalog() {
  const [active, setActive] = useState<CategoryId>("todos");
  const [added, setAdded] = useState<string | null>(null);
  const { add } = useOrder();

  const filtered = useMemo(
    () => (active === "todos" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const handleAdd = (product: (typeof products)[number]) => {
    add(product);
    setAdded(product.id);
    window.setTimeout(() => setAdded((cur) => (cur === product.id ? null : cur)), 1200);
  };

  return (
    <section id="catalogo" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-ui text-xs font-bold uppercase tracking-[0.3em] text-caramel-dark">
              Catálogo
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-coffee-900">
              Nuestros cafés y más
            </h2>
            <p className="mt-4 max-w-xl font-body text-coffee-600">
              Granos de origen local, bebidas de barra y acompañamientos. Filtra por
              categoría y arma tu pedido.
            </p>
          </div>
          <span
            aria-live="polite"
            className="rounded-full border border-coffee-900/15 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-widest text-coffee-600"
          >
            {filtered.length} productos
          </span>
        </Reveal>

        {/* Filters */}
        <Reveal className="mb-10">
          <div
            role="group"
            aria-label="Filtrar el catálogo por categoría"
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(cat.id)}
                  className={`rounded-full border px-5 py-2.5 font-ui text-sm font-semibold transition ${
                    isActive
                      ? "border-coffee-900 bg-coffee-900 text-cream"
                      : "border-coffee-900/15 bg-white/50 text-coffee-600 hover:border-caramel hover:text-coffee-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal as="li" key={product.id} delay={(i % 3) * 90}>
              <article className="group card-soft flex h-full flex-col overflow-hidden rounded-3xl border border-coffee-900/10 bg-white/70 transition duration-300 hover:-translate-y-1.5 hover:border-caramel/50">
                {/* photo */}
                <div className="relative h-60 overflow-hidden bg-sand">
                  {product.badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-coffee-950/85 px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur">
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/35 to-transparent" />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold leading-tight text-coffee-900">
                      {product.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-sand px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-coffee-700">
                      {product.roast}
                    </span>
                  </div>

                  <p className="mt-1 font-ui text-xs uppercase tracking-wider text-coffee-500">
                    {product.origin}
                  </p>

                  <p className="mt-3 line-clamp-2 font-body text-sm text-coffee-600">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full border border-coffee-900/10 px-2.5 py-1 font-ui text-[10px] font-medium text-coffee-500"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-coffee-900/10 pt-5">
                    <div>
                      <p className="font-display text-2xl font-bold text-coffee-900">
                        {currency(product.price)}
                      </p>
                      <p className="font-ui text-[11px] uppercase tracking-wider text-coffee-500">
                        {product.unit}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAdd(product)}
                      aria-label={`Agregar ${product.name}`}
                      className={`flex items-center gap-2 rounded-full px-5 py-3 font-ui text-sm font-bold transition ${
                        added === product.id
                          ? "bg-caramel text-coffee-950"
                          : "bg-coffee-900 text-cream hover:bg-caramel hover:text-coffee-950"
                      }`}
                    >
                      {added === product.id ? (
                        <>
                          <IconCheck className="h-4 w-4" />
                          Agregado
                        </>
                      ) : (
                        <>
                          <IconPlus className="h-4 w-4" />
                          Agregar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
