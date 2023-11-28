import Image from "next/image";
import { useState } from "react";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";

export default function GalleryPage() {
  const [imagePath, setImagePath] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const ImageModal = () => {
    return (
      <div
        className={`fixed left-0 top-0 z-50 h-full w-full items-center justify-center overflow-visible bg-black bg-opacity-50 ${
          isModalVisible ? "flex" : "hidden"
        }`}
      >
        <div className="rounded-lg bg-white p-4">
          <div className="flex justify-end">
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
          <img src={imagePath} alt="Modal Image" className="h-auto w-full" />
        </div>
      </div>
    );
  };

  const images = [];
  for (let i = 1; i < 11; i++) {
    const src = `/images/gallery/vt${i}.jpg`;
    images.push(
      <figure
        className="group cursor-pointer"
        key={i}
        onClick={() => {
          setImagePath(src);
          setModalVisible(true);
        }}
      >
        <div className="relative -z-20 h-72 w-full transition duration-300 group-hover:opacity-75">
          <Image
            className="rounded-lg"
            src={src}
            alt={"The building from outside"}
            fill
            sizes="(min-width: 1220px) 368px, (min-width: 780px) calc(29.52vw + 14px), calc(100vw - 32px)"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </figure>,
    );
  }
  return (
    <>
      <ImageModal />
      <Navbar />
      <PageLayout>
        <div className="grid w-full gap-2 md:grid-cols-3">{images}</div>
      </PageLayout>
    </>
  );
}
