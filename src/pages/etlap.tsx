import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";
import { LoadingPage, LoadingSpinner } from "~/components/loading";

export default function MenuPage() {
  const { data: categories, isLoading } = api.category.getAll.useQuery();
  if (isLoading) return <LoadingPage />;

  const Items = (props: { categoryId: string }) => {
    const { data, isLoading } = api.items.getByCategoryId.useQuery(
      props.categoryId,
    );
    if (isLoading) return <LoadingSpinner />;
    if (!data || data.length === 0) return <div>No items</div>;
    return (
      <div>
        {data.map((item) => {
          return (
            <section key={item.id} className="flex w-full py-2">
              <div className="flex w-1/2 md:w-2/3">
                <h2>{item.name}</h2>
                <p className="hidden md:flex">
                  {item.description ? <div className="px-2">·</div> : ""}
                  {item.description}
                </p>
              </div>
              <p className="w-1/2 text-right md:w-1/3">{item.price} Ft</p>
            </section>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <PageLayout>
        {categories?.map((category) => {
          return (
            <section key={category.id} className="w-full py-2">
              <h1 className="text-2xl">{category.name}</h1>
              <Items categoryId={category.id} />
            </section>
          );
        })}
      </PageLayout>
    </>
  );
}
