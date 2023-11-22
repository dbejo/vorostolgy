import { api } from "~/utils/api";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";

export default function MenuPage() {
  const { data: categories } = api.category.getAll.useQuery();

  const Items = (props: { categoryId: string }) => {
    const { data } = api.items.getByCategoryId.useQuery(props.categoryId);
    if (!data || data.length === 0) return <div>No items</div>;
    return (
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className="flex w-full py-2">
              <div className="flex w-1/2 md:w-2/3">
                {item.name}
                <div className="hidden md:flex">
                  {item.description ? <div className="px-2">·</div> : ""}
                  {item.description}
                </div>
              </div>
              <div className="w-1/2 text-right md:w-1/3">{item.price} Ft</div>
            </div>
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
            <div key={category.id} className="w-full py-2">
              <h2 className="text-2xl">{category.name}</h2>
              <Items categoryId={category.id} />
            </div>
          );
        })}
      </PageLayout>
    </>
  );
}
