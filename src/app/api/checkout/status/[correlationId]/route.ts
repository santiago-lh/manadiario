import { NextResponse } from "next/server";
import { getAxionCharge } from "@/lib/axion-pay";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ correlationId: string }> }
) {
  try {
    const { correlationId } = await params;
    if (!correlationId) {
      return NextResponse.json(
        { error: "correlationId não informado" },
        { status: 400 }
      );
    }

    const charge = await getAxionCharge(correlationId);
    return NextResponse.json({
      success: true,
      status: charge.status,
      charge,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Erro ao verificar status da cobrança.",
      },
      { status: 500 }
    );
  }
}
