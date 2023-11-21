import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full overflow-y-scroll md:max-w-4xl">
        {props.children}
      </div>
    </main>
  );
};
