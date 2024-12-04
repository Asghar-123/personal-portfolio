import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact(){
    return(
        
        <div className="bg-amber-200 ">
            <Navbar/>
            <h1 className="container mx-auto flex px-2 py-4 items-center justify-center flex-col font-extrabold text-gray-600">
                CONTACT ME</h1>
               
                <p className="container mx-auto flex px-5 py-4 items-center justify-center flex-col font-extrabold text-gray-600">
                    You can contact me on following platforms
                </p>
                <ol className="container mx-auto flex px-5 py-4 items-center justify-center flex-col font-extrabold text-gray-600">
                  <li>  Instagram </li>
                   <li>  asghar_ali_126</li>
                   <li> Email </li>
                   <li>smasgharali840@gmail.com</li>

                </ol>
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Footer/>
                </div>
        </div>
    )
}