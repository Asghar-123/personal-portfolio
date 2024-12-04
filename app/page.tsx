import Navbar from "@/components/navbar";
import Image from "next/image";
import mineimage from "./../image/mineimage.jpg"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section className="text-gray-600 body-font bg-amber-200">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image src={mineimage} alt="mineimage" className=" w-[350px] h-[400px]"></Image>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       I'm <span className="text-orange-900"> Asghar Ali</span>
      </h1>
      <p className="mb-8 leading-relaxed">
        I am a Front End Developer as a Advanced Beginner
        
      </p>
      
    </div>
    <Footer/>
  </div>
</section>

    </div>
  );
}
