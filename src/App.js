import React, {  } from "react";
import { FaBeer } from 'react-icons/fa';
import "./App.css"
 

const App = () => {
 
  return(
 <div className="bg-slate-900">
 {/* navBar start here */}
   <nav className="w-full h-14 flex flex-wrap justify-between bg-indigo-200  "> 
   <div className="m-2 rounded-lg shadow-2xl p-1 font-bold text-lg bg-indigo-300 cursor-pointer " >
   <div className="mb-2">Avengers</div></div>
   <ul className="hidden md:flex" >
    <li className="m-2">Home</li>
    <li className="m-2">About</li>
    <li className="m-2">Contact us</li>
   </ul>
   <div className=" hidden md:block rounded-lg m-2 bg-indigo-300 cursor-pointer font-bold p-2 ">Login/SignUp</div>
   <div className="text-xl m-3 my-4 text-indigo-500 font-bold md:hidden" ><FaBeer/></div>
  
   </nav>
   {/* nav bar ends here */}

   {/* page landing section */}

   <header>
       <div className="" >
            <img className="hidden md:block  w-full h-auto " src="https://mcdn.wallpapersafari.com/medium/87/22/NAThDZ.jpg" alt=""/>
            <img className="md:hidden w-full h-auto flex flex-wrap " src="https://wallpapercave.com/dwp2x/wp6877538.png" alt="" />
        </div>
      
   </header>
  {/* page landing section ends here  */}

   {/* supper heros list started here  */}


<div className="flex justify-center w-full h-[25px]  mt-2 mb-3">
   <div className=" text-slate-400 uppercase h-screen font-bold text-2xl md:text-5xl " >list of original six</div>
   </div>

   <div className="flex flex-wrap m-3 md:my-20 ">
    <div className=" rounded-lg bg-slate-200  grid place-content-start h-[270px] w-60 " >
       <img className=" max-w-none rounded-lg mx-5 my-3 w-[200px] h-[150px]" src="https://wallpapercave.com/dwp2x/gJQg1va.jpg" alt="black widow" />

       <div className="mx-5 font-bold text-lg ">
         First lady in 
            Avengers
            <div className=" text-sm" >
                <p>An expert spy and</p>
                <p>Hand-to-hand combatan</p>
            </div>
       </div>

    </div>

    <div className="mx-7 rounded-lg bg-slate-200  grid place-content-start h-70 w-60" >
     <div>
      <img className="w-[200px] h-[150px] my-3 mx-5 rounded-lg  max-w-none " src="https://wallpapers.com/images/featured/ironman-hd-4ke4pb28yu12f4yw.webp" alt="ironMan" />

      <div className="mx-8 font-bold text-lg" >
             Tony stark iron man
            <div class="text-sm" >
                <p>genius billionaire</p>
                <p>AKA iron harted</p>
            </div>
      </div>
     </div>
    </div>

        
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

    
   </div>

  
       
           
            
           
        

 </div>
  );
}

export default App;