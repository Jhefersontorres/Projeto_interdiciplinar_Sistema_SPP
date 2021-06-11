import { motion } from "framer-motion";

import BtnRequestPunctuation from "../buttons/btn_search";
import SearchMedicalRecord from "../buttons/search_medical_record_sap";
import SearchNotFound from "../several/search_not_found";
import ListMedicalRecord from "../table_list/medical_record_list";
import ListMedicalRecordSolicitation from "../table_list/medical_record_solicitation";

export default function Main() {
  return (
    <motion.main
      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      className="p-6 sm:p-10 space-y-6"
    >
      <div className="w-full">
        <div className="mr-6">
          <BtnRequestPunctuation />
        </div>
      </div>

      {/* disponibilizar somente para admin */}
      {/* <SearchMedicalRecord /> */}
      
      <div className="flex flex-wrap items-center justify-center -mb-3">
        <h2 className="text-xs mx-auto my-auto md:my-10 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-9xl text-gray-600 ml-0.7 items-center justify-center  ">
          Lista de solicitação de prontuário
        </h2>
      </div>

      {/* apresentar se caso não tenha resultado na pesquisa  */}
      <SearchNotFound /> 
      {/* <ListMedicalRecord /> */}

      {/* disponibilizar somente para admin */}
      {/* <ListMedicalRecordSolicitation /> */}
    </motion.main>
  );
}
