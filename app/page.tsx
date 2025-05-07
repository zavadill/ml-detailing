import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Recenze from "@/components/Recenze";
import About from "@/components/About";
import Resend from "@/components/Resend";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Recenze />
      <Resend />
    </div>
  );
}
