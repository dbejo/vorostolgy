import Head from "next/head";
import { PageLayout } from "~/components/layout";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vörös Tölgy Étel-Ital Bár - Vámosmikola</title>
      </Head>
      <PageLayout>
        <h1 className="py-2 text-3xl">Rólunk</h1>
        <div className="flex w-full flex-col gap-2 py-2 md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              className="rounded-lg"
              src={"/images/tolgy1.jpeg"}
              alt={"The building from outside"}
              width={3783}
              height={2128}
            />
          </div>
          <div className="w-full md:w-1/2">
            A Börzsöny hegység lábánál, az Ipoly folyóhoz közel, barátságos
            környezetben, helyben készült pizzákkal, gyrossal, burgerekkel,
            tortillával várjuk kedves vendégeinket. Szórakozási lehetőség:
            csocsó, biliárd.
          </div>
        </div>
        <h1 className="py-2 text-3xl">SZÉP Kártya</h1>
        <div className="flex w-full flex-col gap-2 py-2 md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <Image
              className="rounded-lg"
              src={"/images/szep_kartyak.png"}
              alt={"SZEP cards"}
              width={805}
              height={461}
            />
          </div>
          <div className="w-full md:w-1/2">
            SZÉP-Kártya elfogadóhely lettünk! Elfogadott kártyák: K&H - OTP Bank
            - MKB
          </div>
        </div>
      </PageLayout>
    </>
  );
}
