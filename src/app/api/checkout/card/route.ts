import { NextResponse } from "next/server";
import { createAxionSubscription } from "@/lib/axion-pay";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plan } = body;

    const planPrices: Record<string, number> = {
      monthly: 2990,
      quarterly: 7990,
      semiannual: 14990,
    };

    const amountCents = planPrices[plan] || 2990;

    const subscription = await createAxionSubscription({
      customerEmail: email,
      customerName: name,
      amountCents,
      interval: "month",
    });

    return NextResponse.json({
      success: true,
      subscription,
      customer: { name, email, phone },
    });
  } catch (error: any) {
    console.error("[AXION_PAY_CARD_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Não foi possível iniciar a assinatura.",
      },
      { status: 500 }
    );
  }
}
