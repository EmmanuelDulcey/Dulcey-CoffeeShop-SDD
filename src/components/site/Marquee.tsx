import { IconBean, IconLeaf, IconTruck, IconSparkles } from "@/components/ui/Icons";

const items = [
  { icon: IconLeaf, text: "Origen local y trazable" },
  { icon: IconBean, text: "Tostado en pequeños lotes" },
  { icon: IconTruck, text: "Envío el mismo día" },
  { icon: IconSparkles, text: "Frescura garantizada" },
  { icon: IconBean, text: "Comercio justo con fincas" },
  { icon: IconLeaf, text: "Empaque compostable" },
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-coffee-950/10 bg-caramel py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center gap-10 pr-10"
            aria-hidden={dup === 1}
          >
            {items.map((item, i) => (
              <li
                key={`${dup}-${i}`}
                className="flex items-center gap-3 font-ui text-sm font-bold uppercase tracking-[0.15em] text-coffee-950"
              >
                <item.icon className="h-5 w-5" />
                {item.text}
                <span className="ml-6 h-2 w-2 rounded-full bg-coffee-950" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
