// import { RiHome3Line } from "react-icons/ri";
// import { MdEmojiPeople } from "react-icons/md";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import { RiContactsBook3Line } from "react-icons/ri";
// import { GrArticle } from "react-icons/gr";

// export const Header = () => {
//   return (
//     <div className="">

//       <nav className="flex flex-col gap-y-6 fixed bottom-6 bg-white/10 backdrop-blur">
//       {/* <nav className="flex flex-col item-center bg-white/15 gap-y-4 fixed buttom-50 mt-auto rounded:full"> */}
//         <RiHome3Line  size={37}/>
//         <MdOutlineWorkOutline size={37}/>
//         <MdEmojiPeople size={37}/>
//         <GrArticle size={37}/>
//         <RiContactsBook3Line className="text-grey-900"size={37}/>

//       </nav>

    
//     </div>
//   );
// };

// // flex justify-center items-center relative top-3 z-50
// // fixed top-0 buttom-0 right full w-screen h-screen z-30 bg-[#2e2257] transition={{delay: 0.5, duration: 0.5}} backdrop-filter backdrop-blur-lg

// // flex flex-col item-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen

// // hidden md:flex gap-4 p-2.5 border border-white rounded-full

// // flex xl:flex-col items-center justify-between xl:justify-center gap-y-10  md:px-10 xl:px-0  backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full hidden md:flex gap-12 p-2.5 border border-white rounded-full

// // flex gep-4 p-2.5 border border-white rounded-full

// // flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur


'use client';
import { RiHome3Line } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";

import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    
<div className="navbar-container">
  <nav className="navbar">
    <a href="#" className="nav-item">
    <RiHome3Line size={30} />
    </a>
    <a href="#" className="nav-item">
    <MdEmojiPeople size={30} />
    </a>
    <a href="#" className="nav-item">
    <MdOutlineWorkOutline size={30} />
    </a>
    <a href="#" className="nav-item">
    <RiContactsBook3Line size={30} />
    </a>
    <a href="#" className="nav-item">
    <GrArticle size={30} />
    </a>
  </nav>
</div>

/* <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-50">
<nav className="flex gap-1 mx-auto p-0.5 border animate-borderPulse hover:bg-emerald-800 transition rounded-full bg-white/10 backdrop-blur ">
  <a href="#" className="nav-item text-white hover:text-gray-300">
    <RiHome3Line size={30} />
  </a>
  <a href="#" className="nav-item text-white hover:text-gray-300">
    <MdEmojiPeople size={30} />
  </a>
  <a href="#" className="nav-item text-white hover:text-gray-300">
    <MdOutlineWorkOutline size={30} />
  </a>
  <a href="#" className="nav-item text-white hover:text-gray-300">
    <RiContactsBook3Line size={30} />
  </a>
  <a href="#" className="nav-item text-white hover:text-gray-300">
    <GrArticle size={30} />
  </a>
</nav>
</div>
 */


  );
};
