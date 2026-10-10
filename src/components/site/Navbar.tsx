"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { useOrder } from "./OrderContext";
import { IconBag, IconClose, IconMenu } from "@/components/ui/Icons";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { count, open } = useOrder();

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-coffee-900/10 bg-white shadow-sm">
      <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-brand-500" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-caramel/40">
            <Image src="/logo.png" alt={`${site.name} logo`} fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-xl font-bold text-coffee-900">Feeding Life</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-coffee-500">
              Coffee Shop
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative font-ui text-sm font-medium text-coffee-800 hover:text-coffee-900"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-caramel group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={open}
            aria-label="Abrir pedido"
            className="relative grid h-11 w-11 place-items-center rounded-full bg-coffee-900 text-cream hover:bg-coffee-800"
          >
            <IconBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 font-ui text-[11px] font-bold text-coffee-950">
                {count}
              </span>
            )}
          </button>

          <a
            href="#contacto"
            className="hidden rounded-full bg-caramel px-5 py-3 font-ui text-sm font-bold text-coffee-950 hover:bg-gold sm:inline-block"
          >
            Pedir ahora
          </a>

          <button
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Menú"
            className="grid h-11 w-11 place-items-center rounded-full text-coffee-900 hover:bg-coffee-900/10 lg:hidden"
          >
            {openMenu ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {openMenu && (
        <div className="border-t border-coffee-900/10 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="block border-b border-coffee-900/5 py-4 font-ui text-base font-medium text-coffee-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contacto"
                onClick={() => setOpenMenu(false)}
                className="block rounded-full bg-caramel px-5 py-3 text-center font-ui text-sm font-bold text-coffee-950"
              >
                Pedir ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
