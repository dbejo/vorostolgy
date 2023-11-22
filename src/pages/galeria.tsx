import Image from "next/image";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";
export default function GalleryPage() {
  const images = [];
  for (let i = 1; i < 11; i++) {
    images.push(
      <div className="relative -z-10 h-72 w-full md:w-1/3">
        <Image
          className="py-2 md:p-2"
          src={`/images/gallery/vt${i}.jpg`}
          alt={"The building from outside"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>,
    );
  }
  return (
    <>
      <Navbar />
      <PageLayout>
        <div className="flex w-full flex-wrap">{images}</div>
      </PageLayout>
    </>
  );
}
