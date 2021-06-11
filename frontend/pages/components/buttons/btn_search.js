import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BtnSearsch (){
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }

  return (
    <motion.main>
    <div className="flex flex-wrap items-start justify-end -mb-3">
    <motion.button
      className="text-white inline-flex px-5 py-3  bg-green-500 hover:bg-green-400 focus:bg-gren-400 focus:outline-none rounded-full"
      id="btn"
      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      onClick={() => setShowModal(true)}
    >
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      SOLICITAR PRONTUÁRIO
    </motion.button>
  </div>
  <motion.div>
  {showModal ? (
    <motion.div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl xl:max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className=" p-5 mb-8 border-b border-solid border-blueGray-200 rounded-t flex justify-end">
              <img
                src="/Delete.png"
                alt="Fechar"
                className=" h-14 w-16  cursor-pointer focus:outline-none justify-end"
                onClick={() => closeModal()}
              />
            </div>
            {/*body*/}
            <div className="grid grid-flow-col grid-rows-2 grid-cols-1 gap-1 mx-4  md:grid-rows-1 md:grid-cols-1  lg:grid-rows-1 lg:grid-cols-1 lg:gap-1 xl:grid-rows-1 xl:grid-cols-1">
              <motion.input
                type="text"
                role="search"
                placeholder="Nome completo do paciente "
                className="w-full lg:w-full xl:w-full border-2 rounded-lg px-5 py-3 lg:px-7 lg:py-5 xl:px-10 xl:py-7 mr-3 my-1  placeholder-gray-400 focus:border-green-200 focus:outline-none"
                transition={{ duration: 0.3, delay: 0 }}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 15, opacity: 0 }}
              />
              <motion.input
                type="date"
                role="date"
                className="w-full lg:w-full xl:w-full border-2 rounded-lg px-5 py-3 lg:px-7 lg:py-5 xl:px-10 xl:py-7  mr-3 my-1 placeholder-gray-400 focus:border-green-200 focus:outline-none"
                transition={{ duration: 0.3, delay: 0 }}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 15, opacity: 0 }}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 mt-8  lg:mt-10 md:mt-30 border-t border-solid border-blueGray-200 rounded-b">
              <motion.button
                className="inline-flex px-5 py-3 text-white bg-green-500 hover:bg-green-400 focus:bg-gren-400 rounded-full ml-6 mb-3"
                transition={{ duration: 0.3, delay: 0.7 }}
                animate={{ y: 0, opacity: 3 }}
                initial={{ y: 15, opacity: 0 }}
                onClick={() => closeModal()}
              >
                EMCAMINHAR SOLICITAÇÃO
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </motion.div>
  ) : null}
</motion.div>
</motion.main>
  )
}