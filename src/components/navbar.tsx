export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-12 w-full justify-center gap-6 bg-red-700 text-white">
      <a href="/" className="self-center">
        Rólunk
      </a>
      <a href="/menu" className="self-center">
        Étlap
      </a>
      <a href="/" className="self-center">
        Galéria
      </a>
      <a href="/" className="self-center">
        Elérhetőségek
      </a>
    </div>
  );
}
