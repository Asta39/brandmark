import { WHATSAPP_NUMBER } from "./data";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatKsh(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function formatPrice(amount: number | null) {
  return amount === null ? "Inquire for price" : formatKsh(amount);
}
