import crypto from "crypto";

export const AXION_BASE_URL =
  process.env.AXION_API_URL || "https://api.axionenterprise.cloud";

export interface AxionChargeResponse {
  id: string;
  correlationId: string;
  status: "ACTIVE" | "PENDING" | "PAID" | "EXPIRED" | "REFUNDED" | "FAILED";
  amountCents: number;
  qrCodeUrl?: string;
  brCode: string;
  expiresAt?: string;
}

export interface AxionSubscriptionResponse {
  id: string;
  status: "active" | "pending" | "canceled";
  customerEmail: string;
  customerName: string;
  amountCents: number;
  interval: "month" | "year";
}

/**
 * Cria uma cobrança PIX imediata na AXION Pay
 */
export async function createAxionCharge(params: {
  amountCents: number;
  comment?: string;
  correlationId?: string;
}): Promise<AxionChargeResponse> {
  const apiKey = process.env.AXION_API_KEY;
  const correlationId = params.correlationId || crypto.randomUUID();
  const idempotencyKey = crypto.randomUUID();

  // Se a chave não estiver configurada no ambiente, retorna mock funcional elegante para testes locais
  if (!apiKey) {
    const mockBrCode = `00020126580014br.gov.bcb.pix0136${correlationId}520400005303986540${(params.amountCents / 100).toFixed(2)}5802BR5911MANA DIARIO6009SAO PAULO62070503***6304`;
    return {
      id: `ch_${correlationId.replace(/-/g, "").slice(0, 16)}`,
      correlationId,
      status: "ACTIVE",
      amountCents: params.amountCents,
      brCode: mockBrCode,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(mockBrCode)}`,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    };
  }

  const response = await fetch(`${AXION_BASE_URL}/v1/charges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      amountCents: params.amountCents,
      comment: params.comment || "Maná Diário - Assinatura",
      correlationId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na API AXION Pay (${response.status}): ${errorText}`);
  }

  return response.json();
}

/**
 * Consulta o status de uma cobrança PIX na AXION Pay
 */
export async function getAxionCharge(
  correlationId: string
): Promise<AxionChargeResponse> {
  const apiKey = process.env.AXION_API_KEY;

  if (!apiKey) {
    return {
      id: `ch_${correlationId.replace(/-/g, "").slice(0, 16)}`,
      correlationId,
      status: "ACTIVE",
      amountCents: 2990,
      brCode: "00020126580014br.gov.bcb.pix...",
    };
  }

  const response = await fetch(`${AXION_BASE_URL}/v1/charges/${correlationId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao consultar cobrança AXION Pay (${response.status}): ${errorText}`);
  }

  return response.json();
}

/**
 * Cria uma assinatura recorrente na AXION Pay
 */
export async function createAxionSubscription(params: {
  customerEmail: string;
  customerName: string;
  amountCents: number;
  interval?: "month" | "year";
}): Promise<AxionSubscriptionResponse> {
  const apiKey = process.env.AXION_API_KEY;
  const idempotencyKey = crypto.randomUUID();

  if (!apiKey) {
    return {
      id: `sub_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`,
      status: "active",
      customerEmail: params.customerEmail,
      customerName: params.customerName,
      amountCents: params.amountCents,
      interval: params.interval || "month",
    };
  }

  const response = await fetch(`${AXION_BASE_URL}/v1/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      customerEmail: params.customerEmail,
      customerName: params.customerName,
      amountCents: params.amountCents,
      interval: params.interval || "month",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao criar assinatura AXION Pay (${response.status}): ${errorText}`);
  }

  return response.json();
}

/**
 * Validação Criptográfica de Webhook AXION Pay (HMAC-SHA256)
 * Header: X-Axion-Signature: t=<timestamp>,v1=<hash_hex>
 */
export function verifyAxionWebhook(
  rawBody: string | Buffer,
  signatureHeader: string,
  secret: string
): boolean {
  const [tPart, v1Part] = signatureHeader.split(",");
  const timestamp = tPart?.replace("t=", "").trim();
  const expectedHash = v1Part?.replace("v1=", "").trim();

  if (!timestamp || !expectedHash) return false;

  const computedHash = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody.toString()}`)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(computedHash, "hex"),
      Buffer.from(expectedHash, "hex")
    );
  } catch {
    return false;
  }
}
