export const whatsappNumber = "5511988244380";

export const whatsappMessages = {
  geral:
    "Olá, Dani! Gostaria de entender como a A7 One pode ajudar minha empresa.",
  clientes:
    "Olá, Dani! Quero atrair mais clientes para minha empresa.",
  automacao:
    "Olá, Dani! Quero automatizar o atendimento da minha empresa.",
  site:
    "Olá, Dani! Quero criar um site profissional para minha empresa.",
  marca:
    "Olá, Dani! Quero desenvolver a marca e a identidade visual da minha empresa.",
  registro:
    "Olá, Dani! Quero entender como funciona o registro de marca.",
  duvida:
    "Olá, Dani! Ainda não sei por onde começar e gostaria de ajuda para encontrar a melhor solução.",
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export function whatsappUrl(topic: WhatsappTopic) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessages[topic]
  )}`;
}
