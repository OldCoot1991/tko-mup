import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Documents from "@/components/Documents";
import Tariffs from "@/components/Tariffs";
import Requisites from "@/components/Requisites";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Documents />
        <Tariffs />
        <Requisites />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
