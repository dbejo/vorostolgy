import { api } from "~/utils/api";

export default function MenuPage() {
  const { data: categories } = api.category.getAll.useQuery();

  const Items = (props: { categoryId: string }) => {
    const { data } = api.items.getByCategoryId.useQuery(props.categoryId);
    if (!data || data.length === 0) return <div>No items</div>;
    return (
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className="flex">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main>
      {categories?.map((category) => {
        return (
          <div key={category.id}>
            <h2 className="text-2xl">{category.name}</h2>
            <Items categoryId={category.id} />
          </div>
        );
      })}
    </main>
  );
}
