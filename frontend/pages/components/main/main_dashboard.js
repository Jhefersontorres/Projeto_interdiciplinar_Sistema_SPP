import { motion } from "framer-motion";

import Cards from "../cards/cards";
import LatestRequests from "../table_list/latest_requests";
import LatestReturns from "../table_list/latest_returns";



export default function Main() {
  return (
    <motion.main
      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      className="p-6 sm:p-10 space-y-6"
    > 
      <div className="w-full">
      <Cards />     
      <LatestRequests />    
      <LatestReturns />
      </div>
   </motion.main>
  );
}
