import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { api } from "~/utils/api";

export default function AdminPage() {
  const { data: categories } = api.category.getAll.useQuery();
  const { data: items } = api.items.getAll.useQuery();
  const [categoryInput, setCategoryInput] = useState("");
  const [itemInput, setItemInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [selectedCategoryId, setSelectedCategory] = useState("");
  const ctx = api.useUtils();
  const { mutate: mutateCategory } = api.category.create.useMutation({
    onSuccess: () => {
      setCategoryInput("");
      void ctx.category.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage?.[0]) {
        console.log(errorMessage[0]);
      } else {
        console.log("Failed add category! Please try again later.");
      }
    },
  });
  const { mutate: mutateItems } = api.items.create.useMutation({
    onSuccess: () => {
      setItemInput("");
      setPriceInput(0);
      setDescriptionInput("");
      setSelectedCategory("");
      void ctx.items.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage?.[0]) {
        console.log(errorMessage[0]);
      } else {
        console.log("Failed add item Please try again later.");
      }
    },
  });

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full overflow-y-scroll md:max-w-2xl">
        <div className="p-4">
          <UserButton />
        </div>
        <div>
          <h2 className="py-2 text-2xl">Categories</h2>
          <div className="flex w-full gap-2">
            <input
              placeholder="Category name"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              className="grow rounded border-2 border-slate-200 outline-4 outline-slate-400"
            />
            <button
              className="w-12 rounded border border-green-400 bg-green-600 text-white hover:bg-green-500"
              onClick={() => mutateCategory({ name: categoryInput })}
            >
              +
            </button>
          </div>
          <div className="flex flex-col py-2">
            {categories?.map((category) => (
              <span key={category.id}>{category.name}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="py-2 text-2xl">Items</h2>
          <div className="flex w-full flex-col gap-2">
            <input
              placeholder="New Item name"
              value={itemInput}
              onChange={(e) => setItemInput(e.target.value)}
              className="grow rounded border-2 border-slate-200 outline-4 outline-slate-400"
            />
            <input
              type="number"
              pattern="[0-9]*"
              placeholder="New Item name"
              value={priceInput}
              onChange={(e) => setPriceInput(parseInt(e.target.value))}
              className="grow rounded border-2 border-slate-200 outline-4 outline-slate-400"
            />
            <textarea
              placeholder="Description"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              className="grow rounded border-2 border-slate-200 outline-4 outline-slate-400"
            />
            <select
              placeholder="New Item name"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="grow rounded border-2 border-slate-200 outline-4 outline-slate-400"
            >
              {categories?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              className="grow rounded border border-green-400 bg-green-600 text-white hover:bg-green-500"
              onClick={() =>
                mutateItems({
                  name: itemInput,
                  price: priceInput,
                  description: descriptionInput,
                  categoryId: selectedCategoryId,
                })
              }
            >
              +
            </button>
          </div>
          <div className="flex flex-col py-2">
            {items?.map((item) => (
              <div key={item.id}>
                {item.name} {item.description} {item.price} {item.categoryId}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
