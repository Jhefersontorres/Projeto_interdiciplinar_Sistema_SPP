import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
import NavBar from "./menuintens";

export default function Aside() {
  return (
    <motion.aside
      transition={{ duration: 0.1 }}
      initial={{ x: -88 }}
      animate={{ x: 0 }}
      className="hidden md:flex md:flex-col"
    >
      <div className=" p-8 inline-flex items-center justify-center bg-green-500 ">
        <img src="/LogoSSP.png" alt="Logo Sistema SSP"  width={180} height={90}/>        
      </div>

      <div className="flex-grow flex flex-col justify-between text-gray-100 bg-green-500">
        <NavBar />
        <div className="inline-flex items-center p-2 h-10 w-50  border-gray-100 hover:text-gray-700 hover:bg-gray-100 focus:text-gray-400 focus:bg-gray-700">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
      </div>
    </motion.aside>
  );
}
