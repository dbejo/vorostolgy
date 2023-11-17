import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const { data: categories } = api.category.getAll.useQuery();
  if (!categories) return <div>Something went wrong</div>;
  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main>
        {categories?.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </main>
    </>
  );
}
