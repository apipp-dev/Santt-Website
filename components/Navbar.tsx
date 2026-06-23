import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-bold text-lg">SANTT</span>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
