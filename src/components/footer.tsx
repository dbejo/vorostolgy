import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-100">
      <div className="h-full w-full p-4 md:max-w-6xl">
        <div className="grid text-gray-700 md:grid-cols-3">
          <Link href="/">
            <h3 className="pt-4 text-lg text-gray-600">
              Vörös Tölgy Étel-Ital Bár
            </h3>
          </Link>
          <div className="pt-4">
            <h4 className="text-lg text-gray-600">Elérhetőségek</h4>
            <ul>
              <li>
                <Link href="tel:0627376282" className="hover:underline">
                  06 27 376 282
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/4Xxb6k2Umvp1tCoW9"
                  className="hover:underline"
                >
                  Vámosmikola, Árpád utca 1.
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.6970498406745!2d18.778709476969333!3d47.980914771226686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a92a3919a5f8d%3A0xa4436f37324b849a!2zVsOhbW9zbWlrb2xhLCDDgXJww6FkIHUuIDEsIDI2MzU!5e0!3m2!1shu!2shu!4v1701188478803!5m2!1shu!2shu"
              loading="lazy"
              className="aspect-video w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
