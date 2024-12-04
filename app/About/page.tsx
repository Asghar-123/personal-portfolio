import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About(){
    return(
        
        
        <section className="text-gray-600 body-font  bg-amber-200 ">
            <div>
                <Navbar/>
            </div>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        ABOUT ME
      </h1>
      <p className="mb-8 leading-relaxed font-extrabold">
       <b> My name is Syed Muhammad Asghar Ali Rizvi.I am a student of class Matric(10).I am 15 years old.MY hobby is to play mobile games.I have skills as advanced beginner in</b></p>
        <ol className="mb-8 leading-relaxed font-extrabold">
            <li>HTML</li>
            <li>CSS</li>
            <li>TAILWIND CSS</li>
            <li>NEXT JS</li> 
            </ol>
        
        <p className="mb-8 leading-relaxed font-extrabold">
            Other than programming I have also communication skills.I have no experience but looking for an opportunity after my exams as a fresh candidate.
        </p>
      
    </div>
    <Footer/>
  </div>
  
</section>

    )
}