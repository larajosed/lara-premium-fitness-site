import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div><Services /></div>
      <div><Plans /></div>
      <div><About /></div>
      <div><Contact /></div>
      <Footer />
    </main>
  );
}
