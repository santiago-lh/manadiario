import { NextResponse } from "next/server";
import { createAxionSubscription } from "@/lib/axion-pay";
import { validateEmail, validateName, validatePhoneBR } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Dados da requisição inválidos." },
        { status: 400 }
      );
    }

    const { name, email, phone, plan } = body;

    const planPrices: Record<string, number> = {
      monthly: 2990,
      quarterly: 7990,
      semiannual: 14990,
    };

    if (!plan || !planPrices[plan]) {
      return NextResponse.json(
        { success: false, error: "Plano selecionado inválido ou não informado." },
        { status: 400 }
      );
    }

    const nameCheck = validateName(name);
    if (!nameCheck.isValid) {
      return NextResponse.json(
        { success: false, error: nameCheck.error },
        { status: 400 }
      );
    }

    const emailCheck = validateEmail(email);
    if (!emailCheck.isValid) {
      return NextResponse.json(
        { success: false, error: emailCheck.error },
        { status: 400 }
      );
    }

    const phoneCheck = validatePhoneBR(phone);
    if (!phoneCheck.isValid) {
      return NextResponse.json(
        { success: false, error: phoneCheck.error },
        { status: 400 }
      );
    }

    const amountCents = planPrices[plan];

    const subscription = await createAxionSubscription({
      customerEmail: emailCheck.value,
      customerName: nameCheck.value,
      amountCents,
      interval: "month",
    });

    return NextResponse.json({
      success: true,
      subscription,
      customer: {
        name: nameCheck.value,
        email: emailCheck.value,
        phone: phoneCheck.value,
        phoneE164: phoneCheck.e164,
      },
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
