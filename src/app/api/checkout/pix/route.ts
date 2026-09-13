import { NextResponse } from "next/server";
import { createAxionCharge } from "@/lib/axion-pay";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan, name, email, phone } = body;

    const planPrices: Record<string, number> = {
      monthly: 2990,     // R$ 29,90
      quarterly: 7990,   // R$ 79,90
      semiannual: 14990, // R$ 149,90
    };

    const amountCents = planPrices[plan] || 14990;
    const planName =
      plan === "monthly"
        ? "Mensal"
        : plan === "quarterly"
        ? "Trimestral"
        : "Semestral";

    const charge = await createAxionCharge({
      amountCents,
      comment: `Maná Diário - Plano ${planName} (${name || "Assinante"})`,
    });

    return NextResponse.json({
      success: true,
      charge,
      customer: { name, email, phone },
    });
  } catch (error: any) {
    console.error("[AXION_PAY_PIX_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Não foi possível gerar a cobrança PIX.",
      },
      { status: 500 }
    );
  }
}
