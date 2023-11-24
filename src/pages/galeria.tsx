import Image from "next/image";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";
export default function GalleryPage() {
  const images = [];
  for (let i = 1; i < 11; i++) {
    images.push(
      <div className="group">
        <div className="relative -z-10 h-72 w-full transition duration-300 group-hover:opacity-75">
          <Image
            className="rounded-lg"
            src={`/images/gallery/vt${i}.jpg`}
            alt={"The building from outside"}
            fill
            sizes="(min-width: 1220px) 368px, (min-width: 780px) calc(29.52vw + 14px), calc(100vw - 32px)"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>,
    );
  }
  return (
    <>
      <Navbar />
      <PageLayout>
        <div className="grid w-full gap-2 md:grid-cols-3">{images}</div>
      </PageLayout>
    </>
  );
}
