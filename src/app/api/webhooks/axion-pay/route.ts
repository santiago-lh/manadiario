import { NextResponse } from "next/server";
import { verifyAxionWebhook } from "@/lib/axion-pay";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-axion-signature");
    const webhookSecret = process.env.AXION_WEBHOOK_SECRET;

    // Se o secret estiver configurado, valida a assinatura criptográfica HMAC-SHA256
    if (webhookSecret) {
      if (!signature) {
        return NextResponse.json(
          { error: "Assinatura X-Axion-Signature ausente" },
          { status: 401 }
        );
      }

      const isValid = verifyAxionWebhook(rawBody, signature, webhookSecret);
      if (!isValid) {
        return NextResponse.json(
          { error: "Assinatura de webhook inválida" },
          { status: 401 }
        );
      }
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.event || payload.type;

    console.log(`[AXION_WEBHOOK_RECEIVED] Event: ${eventType}`, payload);

    // Tratamento dos eventos principais
    switch (eventType) {
      case "charge.paid":
      case "pix.paid":
        // Ativar envio do WhatsApp para o cliente
        console.log(`[AXION_PAY] Pagamento confirmado: ${payload.data?.id}`);
        break;

      case "subscription.created":
      case "subscription.active":
        console.log(`[AXION_PAY] Assinatura ativa: ${payload.data?.id}`);
        break;

      case "subscription.canceled":
        console.log(`[AXION_PAY] Assinatura cancelada: ${payload.data?.id}`);
        break;

      default:
        console.log(`[AXION_PAY] Evento ignorado ou não tratado: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("[AXION_WEBHOOK_ERROR]", error);
    return NextResponse.json(
      { error: "Falha interna no processamento do webhook" },
      { status: 500 }
    );
  }
}
