export default function Footer() {
  return (
    <footer className="bg-transparent py-8">
      <div className="container mx-auto px-4 text-center text-sm text-brand-softGray/80">
        © {new Date().getFullYear()} SANTT PRODUCTION. All rights reserved.
      </div>
    </footer>
  );
}
