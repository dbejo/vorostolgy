import Link from "next/link";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";

export default function ElerhetosegekPage() {
  return (
    <>
      <Navbar />
      <PageLayout>
        <section className="pb-8">
          <h1 className="py-4 text-3xl">Elérhetőségek</h1>
          <div className="grid gap-8 md:grid-cols-3">
            <section>
              <h2 className="py-2 text-lg">Telefon</h2>
              <p>
                Rendelés leadása a{" "}
                <Link href="tel:0627376282" className="hover:underline">
                  06 27 376 282
                </Link>{" "}
                telefonszámon lehetséges.
              </p>
            </section>
            <section>
              <h2 className="py-2 text-lg">Nyitvatartás</h2>
              <ul>
                <li>Hétfő: 10:00-21:00</li>
                <li>Kedd: 10:00-21:00</li>
                <li>Szerda: 10:00-21:00</li>
                <li>Csütörtök: 10:00-21:00</li>
                <li>Péntek: 10:00-21:00</li>
                <li>Szombat: 10:00-21:00</li>
                <li>Vasárnap: 10:00-21:00</li>
              </ul>
            </section>
            <section>
              <h2 className="py-2 text-lg">Címünk</h2>
              <p>
                <Link
                  href="https://maps.app.goo.gl/4Xxb6k2Umvp1tCoW9"
                  className="hover:underline"
                >
                  Vámosmikola, Árpád utca 1.
                </Link>
              </p>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
