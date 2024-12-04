import Link from "next/link";

export default function Navbar(){
    return(
        <header className="text-red-700 body-font bg-[#C7FFD8]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center text-red-600 mb-4 md:mb-0">
      
     <h1> <span className="ml-3 text-xl font-extrabold">Personal Portfolio</span></h1>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <h1>
      <Link  className="mr-5 hover:text-blue-900 font-bold" href="/">Home</Link>
      <Link className="mr-5 hover:text-blue-900 font-bold" href="/About">About</Link>
      <Link className="mr-5 hover:text-blue-900 font-bold" href="/Contact">Contact</Link>
      </h1>
    
    </nav>
    
  </div>
</header>

    )
}