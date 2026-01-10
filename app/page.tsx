import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div >
   <Hero></Hero>
   <Services></Services>
   <Plans></Plans>
   <About></About>
   <Contact></Contact>
   <Footer></Footer>
    </div>
  );
}
