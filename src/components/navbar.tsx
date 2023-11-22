import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-12 w-full justify-center gap-6 bg-red-700 text-white">
      <Link href="/" className="self-center">
        Rólunk
      </Link>
      <Link href="/etlap" className="self-center">
        Étlap
      </Link>
      <Link href="/galeria" className="self-center">
        Galéria
      </Link>
      <Link href="/" className="self-center">
        Elérhetőségek
      </Link>
    </div>
  );
}
