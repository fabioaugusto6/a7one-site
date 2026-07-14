export const number="5511988244380";
export const messages={geral:"Olá, Dani! Quero entender qual é o próximo passo da minha empresa.",clientes:"Olá, Dani! Quero atrair mais clientes e melhorar meu marketing.",automacao:"Olá, Dani! Quero automatizar o atendimento da minha empresa.",site:"Olá, Dani! Quero criar ou melhorar o site da minha empresa.",marca:"Olá, Dani! Quero criar ou reposicionar minha marca.",registro:"Olá, Dani! Quero proteger e registrar minha marca.",diagnostico:"Olá, Dani! Quero conversar sobre os desafios da minha empresa e receber um direcionamento."} as const;
export type Topic=keyof typeof messages;
export const wa=(topic:Topic)=>`https://wa.me/${number}?text=${encodeURIComponent(messages[topic])}`;
