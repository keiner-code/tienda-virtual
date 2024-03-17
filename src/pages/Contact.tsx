import { ContactForm } from "../components/contact/ContactForm";
import { Welcome } from "../components/contact/Welcome";

export function Contact() {
  return (
    <article className="flex md:flex-row flex-col gap-6 mx-6 md:mx-10 md:h-96 items-center my-10">
      <section className="w-full md:w-1/2">
        <Welcome />
      </section>
      <section className="w-full md:w-1/2">
        <ContactForm />
      </section>
    </article>
  );
}
