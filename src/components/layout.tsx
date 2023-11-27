import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <main className="flex justify-center">
      <div className="h-full w-full p-4 md:max-w-6xl">
        {props.children}
      </div>
    </main>
  );
};
