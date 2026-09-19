import { NextResponse } from "next/server";
import { createAxionCharge } from "@/lib/axion-pay";
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

    const { plan, name, email, phone } = body;

    // 1. Validação do Plano
    const planPrices: Record<string, number> = {
      monthly: 2990,     // R$ 29,90
      quarterly: 7990,   // R$ 79,90
      semiannual: 14990, // R$ 149,90
    };

    if (!plan || !planPrices[plan]) {
      return NextResponse.json(
        { success: false, error: "Plano selecionado inválido ou não informado." },
        { status: 400 }
      );
    }

    // 2. Validação do Nome
    const nameCheck = validateName(name);
    if (!nameCheck.isValid) {
      return NextResponse.json(
        { success: false, error: nameCheck.error },
        { status: 400 }
      );
    }

    // 3. Validação do E-mail
    const emailCheck = validateEmail(email);
    if (!emailCheck.isValid) {
      return NextResponse.json(
        { success: false, error: emailCheck.error },
        { status: 400 }
      );
    }

    // 4. Validação e Sanitização do WhatsApp (E.164)
    const phoneCheck = validatePhoneBR(phone);
    if (!phoneCheck.isValid) {
      return NextResponse.json(
        { success: false, error: phoneCheck.error },
        { status: 400 }
      );
    }

    const amountCents = planPrices[plan];
    const planName =
      plan === "monthly"
        ? "Mensal"
        : plan === "quarterly"
        ? "Trimestral"
        : "Semestral";

    const charge = await createAxionCharge({
      amountCents,
      comment: `Maná Diário - Plano ${planName} (${nameCheck.value})`,
    });

    return NextResponse.json({
      success: true,
      charge,
      customer: {
        name: nameCheck.value,
        email: emailCheck.value,
        phone: phoneCheck.value,
        phoneE164: phoneCheck.e164,
      },
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
