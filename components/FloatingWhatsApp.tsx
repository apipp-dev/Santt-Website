export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/"
      aria-label="WhatsApp"
      className="fixed right-4 bottom-4 bg-brand-orange text-black rounded-full p-3 shadow-lg z-50"
    >
      <span className="sr-only">Open WhatsApp</span>
      <span className="font-bold">WA</span>
    </a>
  );
}
