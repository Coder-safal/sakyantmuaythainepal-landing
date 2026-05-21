import { MessageCircle } from "lucide-react";

export function WhatsAppFab({ whatsapp }: { whatsapp: string }) {
  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 grid place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_40px_-10px_rgba(100,8,10,0.8)] hover:scale-105 transition-transform"
    >
      <MessageCircle size={24} />
    </a>
  );
}
