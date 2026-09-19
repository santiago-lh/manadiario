import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ValidationResult<T = string> {
  isValid: boolean;
  value: T;
  error?: string;
}

/**
 * Valida o nome completo do cliente.
 */
export function validateName(name: unknown): ValidationResult<string> {
  if (typeof name !== "string") {
    return { isValid: false, value: "", error: "Nome é obrigatório." };
  }
  const clean = name.trim();
  if (clean.length < 3) {
    return {
      isValid: false,
      value: clean,
      error: "O nome deve conter pelo menos 3 caracteres.",
    };
  }
  return { isValid: true, value: clean };
}

/**
 * Valida o formato de e-mail.
 */
export function validateEmail(email: unknown): ValidationResult<string> {
  if (typeof email !== "string") {
    return { isValid: false, value: "", error: "E-mail é obrigatório." };
  }
  const clean = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(clean)) {
    return {
      isValid: false,
      value: clean,
      error: "Por favor, informe um endereço de e-mail válido.",
    };
  }
  return { isValid: true, value: clean };
}

/**
 * Valida telefone brasileiro (WhatsApp) e sanitiza para o formato internacional E.164 (+55...).
 */
export function validatePhoneBR(phone: unknown): ValidationResult<string> & {
  e164: string;
  digitsOnly: string;
} {
  if (typeof phone !== "string") {
    return {
      isValid: false,
      value: "",
      e164: "",
      digitsOnly: "",
      error: "WhatsApp é obrigatório.",
    };
  }

  // Remove qualquer caractere que não seja dígito
  let digits = phone.replace(/\D/g, "");

  // Se o usuário digitou o DDI 55 no início (ex: 5511999999999), remove temporariamente para validar o DDD
  if (digits.length === 12 || digits.length === 13) {
    if (digits.startsWith("55")) {
      digits = digits.slice(2);
    }
  }

  // Celulares têm 11 dígitos: DDD (2) + 9 + 8 dígitos; Fixos têm 10 dígitos
  if (digits.length < 10 || digits.length > 11) {
    return {
      isValid: false,
      value: phone,
      e164: "",
      digitsOnly: digits,
      error: "Informe um número com DDD válido (ex: 11 99999-9999).",
    };
  }

  const ddd = parseInt(digits.slice(0, 2), 10);
  if (isNaN(ddd) || ddd < 11 || ddd > 99) {
    return {
      isValid: false,
      value: phone,
      e164: "",
      digitsOnly: digits,
      error: "DDD inválido.",
    };
  }

  const e164 = `+55${digits}`;

  return {
    isValid: true,
    value: phone,
    e164,
    digitsOnly: digits,
  };
}

