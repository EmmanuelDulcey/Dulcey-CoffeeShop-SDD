import { NextResponse } from "next/server";

type OrderPayload = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  order?: { id: string; name: string; qty: number; price: number }[];
  total?: number;
};

export async function POST(request: Request) {
  let payload: OrderPayload;

  try {
    payload = (await request.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!payload.name?.trim()) errors.name = "El nombre es obligatorio";
  if (!payload.phone?.trim()) errors.phone = "El teléfono es obligatorio";
  if (!payload.email?.trim() || !/^\S+@\S+\.\S+$/.test(payload.email)) {
    errors.email = "Correo inválido";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Persistence hook: connect an email provider (e.g. Resend) or DB here.
  console.log("[pedido]", {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    topic: payload.topic,
    items: payload.order?.length ?? 0,
    total: payload.total,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, received: true }, { status: 200 });
}
