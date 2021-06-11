
import { motion } from "framer-motion";

export default function SearchMedicalRecordSAP() {
  
  return (
    <motion.main
      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      className="p-6 sm:p-10 space-y-6"
    >
      <div className="w-full ">
        <div className="mr-6">
          <div className="grid grid-flow-col grid-rows-4 grid-cols-1 gap-1 mx-auto my-auto lg:grid-rows-2 lg:grid-cols-1 lg:gap-1 xl:grid-rows-1 xl:grid-cols-2">
          <motion.input
              type="text"
              role="search_aluno"
              placeholder="Buscar por paciente"
              className="w-full sm:w-full md:w-full lg:w-full xl:w-full border-2 rounded-lg px-5 py-3 mr-3 my-1 placeholder-gray-400 focus:border-green-200 focus:outline-none"
              
            />
            <motion.input
              type="text"
              role="search_aluno"
              placeholder="Buscar por aluno "
              className="w-full sm:w-full md:w-full lg:w-full xl:w-full border-2 rounded-lg px-5 py-3 mr-3 my-1 placeholder-gray-400 focus:border-green-200 focus:outline-none"
            />
            <motion.input
              type="date"
              role="date"
              className="w-full sm:w-full md:w-full lg:w-full xl:w-full border-2 rounded-lg px-5 py-3 mr-3 my-1 placeholder-gray-400 focus:border-green-200 focus:outline-none"
            />
            <motion.button
            id="btn"
              className="text-white bg-green-500 hover:bg-green-400 focus:bg-gren-400 rounded-full px-8 py-3 my-1 items-center justify-center focus:outline-none "
            >
              BUSCAR
            </motion.button>
          </div>
        </div>
      </div>   
    </motion.main>
  );
}
