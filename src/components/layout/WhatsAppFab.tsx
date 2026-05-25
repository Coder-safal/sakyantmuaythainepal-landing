import { MessageCircle } from "lucide-react";

export function WhatsAppFab({ whatsapp }: { whatsapp: string }) {
  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_18px_50px_-12px_rgba(200,169,107,0.7)] hover:scale-110 transition-transform duration-500"
    >
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      <MessageCircle size={22} className="relative" />
    </a>
  );
}
