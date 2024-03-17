import { AllProductAside } from "../container/AllProductAside";
import { AllProductSection } from "../container/AllProductSection";
import { useStore } from "../hooks/useStore";

export function AllProduct() {
  const category = useStore((state) => state.category);

  return (
    <div className="mx-2 md:mx-10 flex md:flex-row flex-col md:border md:border-t-2 md:border-b-0 md:border-r-0 md:border-l-0 pt-8">
      <aside className="md:w-1/4 w-full">
        <AllProductAside />
      </aside>
      <section className="w-full md:w-3/4">
        <AllProductSection category={category} />
      </section>
    </div>
  );
}
