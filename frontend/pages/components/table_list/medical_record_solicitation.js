export default function RecordList() {
  return (
    <div>
    <div id="container44" className="mx-2 md:mx-4 lg:mx-6 xl:mx-10 ">
      <div
        className=" grid grid-cols-3 grid-rows-2 
                         md:grid-cols-1 md:grid-rows-1
                         lg:grid-cols-3 lg:grid-rows-1
                         xl:grid-cols-6 lg:grid-rows-1
                        
         gap-y-2 p-4 my-3  bg-gray-50 border-2	border-gray-200 rounded-md "
      >
        <div
          id="name paciente"
          className="col-span-3 
                  md:col-span-1 
                  lg:col-span-1
                  xl:col-span-2
                  "
        >
          <span className="text-sm text-gray-500 font-medium">
            Nome do Paciente
          </span>
          <p className="text-xl font-semibold">Pizzaria Guloso</p>
        </div>
        <div
          id="name paciente"
          className="col-span-3 
                  md:col-span-1 
                  lg:col-span-1
                  xl:col-span-2
                  "
        >
          <span className="text-sm text-gray-500 font-medium">
            Solicitante
          </span>
          <p className="text-xl font-semibold">Pizzaria Guloso</p>
        </div>
        <div
          id="status"
          className="col-span-3 
                  md:col-span-1
                  lg:col-span-1
                  xl:col-span-2
"
        >
          <p className=" text-center mb-2 text-md w-full text-gray-500 font-medium ">
            Ações
          </p>
          <div className="grid grid-cols-1 grid-rows-4  lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-1 xl:grid-cols-4 xl:grid-rows-1  xl:gap-x-1">
            <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center p-2 bg-indigo-600 hover:bg-indigo-400 hover:text-gray-400 rounded-full text-white justify-self-center content-center self-center">
              Separado
            </button>
            <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center  p-2 bg-yellow-500  hover:bg-yellow-400 hover:text-gray-400 rounded-full text-white justify-self-center content-center self-center">
              Retirado
            </button>
            <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center p-2 bg-green-500 rounded-full text-white justify-self-center content-center self-center">
              Devolvido
            </button>
            <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center  p-2 bg-red-500 rounded-full text-white justify-self-center content-center self-center">
              Recusado
            </button>
          </div>
        </div>
      </div>      
    </div>



   
<div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
            <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
        </div>
        <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>


</div>
  );
}
