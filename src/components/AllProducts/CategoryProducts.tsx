import { useEffect } from "react";
import { useCategory } from "../../hooks/useCategory";
import { useStore } from "../../hooks/useStore";

export function CategoryProducts() {
  const { category, getAll, getAmountProductByIdCategory } = useCategory((state) => state);
  const currentCategory = useStore((state) => state.currentCategory);

  const hadlerClick = (categoryId: number,title: string) => {
    currentCategory({
      categoryId,
      title
    });
    getAmountProductByIdCategory(categoryId);
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-medium mb-4 text-gray-600">Categories</h1>
      <div className="flex flex-col gap-2 md:ml-0 ml-3">
        {category.map((category) => (
          <div
            className="flex justify-between md:mr-12 mr-6"
            key={category.categoryId}
          >
            <button
              onClick={() =>
                hadlerClick(category.categoryId,category.name)
              }
              className="text-blue-600"
            >
              {category.name}
            </button>{" "}
            <span>({getAmountProductByIdCategory(category.categoryId)})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
