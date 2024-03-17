import { useEffect } from "react";
import { useCategory } from "../../hooks/useCategory";
import { useStore } from "../../hooks/useStore";

export function CategoryProducts() {
  const { category, getAll } = useCategory((state) => state);
  const currentCategory = useStore((state) => state.currentCategory);

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
                currentCategory({
                  categoryId: category.categoryId,
                  title: category.name,
                })
              }
              className="text-blue-600"
            >
              {category.name}
            </button>{" "}
            <span>({category.description.length})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
