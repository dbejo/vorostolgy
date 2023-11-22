import Image from "next/image";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";
export default function GalleryPage() {
  const images = Array.from({ length: 10 }, (_, i) => {
    const imagePath = `/images/gallery/vt${i + 1}.jpg`;
    return (
      <div className="group" key={i}>
        <div className="relative -z-10 h-72 w-full transition duration-300 group-hover:opacity-75">
          <Image
            className="rounded-lg"
            src={imagePath}
            alt={`Image ${i + 1}`}
            fill
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <PageLayout>
        <div className="grid w-full gap-2 md:grid-cols-3">{images}</div>
      </PageLayout>
    </>
  );
}
