import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const OFFICE_INFO = {
  name: "Souza & Selly Advocacia",
  phone: "(85) 99245-8821",
  whatsappNumber: "5585992458821", // Formato internacional para link direto
  email: "contato@souzaesellyadvocacia.com.br",
  address: "Av. Jovita Feitosa, nº 3072, Bairro Parquelândia",
  cityStateZip: "Fortaleza - Ceará, CEP 60455-410",
  fullAddress: "Av. Jovita Feitosa, nº 3072, Bairro Parquelândia, Fortaleza - Ceará, CEP 60455-410",
  hours: "Segunda a Sexta, das 09:00 às 17:00",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Jovita+Feitosa,+3072+-+Parquel%C3%A2ndia,+Fortaleza+-+CE,+60455-410"
};

export function getWhatsAppUrl(customMessage?: string) {
  const defaultMsg = "Olá, Dra. Samara e Dra. Maria! Vi o site do escritório Souza & Selly Advocacia e gostaria de tirar uma dúvida sobre o meu caso.";
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${msg}`;
}
