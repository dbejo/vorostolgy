import type { PropsWithChildren } from "react";
import Footer from "./footer";

export const PageLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <main className="flex justify-center">
        <div className="h-full w-full p-4 md:max-w-6xl">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};
