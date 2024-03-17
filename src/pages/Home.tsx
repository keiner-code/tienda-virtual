import { Comments } from "../components/Home/Comments";
import { Header } from "../components/Home/Header";
import { Offert } from "../components/Home/Offert";
import { Products } from "../container/Products";

export function Home() {
  return (
    <>
      <div
        className="w-10/12 right-10 h-screen fixed -z-10"
        style={{
          backgroundImage:
            "url('https://s1.1zoom.me/big0/982/White_background_Brown_haired_Glasses_Hands_Jacket_575738_1280x853.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="z-0 mx-10">
        <header className="bg-white">
          <Header />
        </header>
        <article className="">
          <section className="bg-white flex py-10 flex-col items-center">
            <Products title="Our Featured Products" seed="populate" />
          </section>
          <section>
            <Offert />
          </section>
          <section className="bg-white flex py-10 flex-col items-center">
            <Products title="Most Loved Products" seed="loved" />
          </section>
          <section className="bg-white flex py-10 flex-col items-center">
            <Comments />
          </section>
        </article>
      </div>
    </>
  );
}
