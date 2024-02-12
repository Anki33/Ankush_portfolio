'use client';

import React, {useState, useEffect} from "react";
import Themetogger from "./Themetogger";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const [header,setHeader]= useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(()=>{
    const scrollYpos= window.addEventListener('scroll', ()=>{
      window.screenY > 50 ? setHeader(true) : setHeader(false);
    })
    return ()=> window.removeEventListener('scroll', scrollYpos);

  })
  return <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'}
  sticky top-50 z-30 transition-all`}>
  <div className="container mx-auto">
    <div className="flex justify-between items-center">
    <Logo/>
    <div className="flex items-center gap-x-6">
    <Nav containerstyles='hidden xl:flex gap-x-8 items-center'
       linkstyles='relative hover:text-primary transition-all'
       underlinestyles='absolute left-0 top-full h-[2px] bg-primary w-full'
    />
    <Themetogger/>
    <div className="xl:hidden">
      <MobileNav />
    </div>
    </div>
   
    </div>
   
  </div>
 
  </header>;
  
} 

export default Header;