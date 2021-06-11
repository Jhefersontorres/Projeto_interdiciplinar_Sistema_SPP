export default function RecordList() {
  return (
    <div>
    <div id="container44" className="mx-2 md:mx-4 lg:mx-6 xl:mx-10">
      <div className=" grid grid-cols-3 grid-rows-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-2 p-4 my-3  bg-white border-2	border-gray-200 rounded-md ">
        <div id="name paciente" className="col-span-3 md:col-span-2 ">
          <span className="text-sm text-gray-500 font-medium">
            Nome do Paciente
          </span>
          <p className="text-xl font-semibold">Pizzaria Guloso</p>
        </div>
        <div
          id="solicitante"
          className="col-span-3  md:col-span-2 lg:col-span-1"
        >
          <span className="text-sm text-gray-500 font-medium">solicitante</span>
          <p className="text-xl font-semibold">Jheferson Torres de Macena</p>
        </div>
        <div id="status" className="col-span-3  md:col-span-4 lg:col-span-1 ">
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-yellow-100 rounded-full font-semibold text-yellow-400  justify-self-center content-center self-center">
            solicitado
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-3 grid-rows-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-2 p-4 my-3  bg-gray-50 border-2	border-gray-200 rounded-md ">
        <div id="name paciente" className="col-span-3 md:col-span-2 ">
          <span className="text-sm text-gray-500">Nome do Paciente</span>
          <p className="text-xl font-semibold">Pizzaria Guloso</p>
        </div>
        <div
          id="solicitante"
          className="col-span-3  md:col-span-2 lg:col-span-1"
        >
          <span className="text-sm text-gray-500">solicitante</span>
          <p className="text-xl font-semibold">Jheferson Torres de Macena</p>
        </div>
        <div id="status" className="col-span-3  md:col-span-4 lg:col-span-1 ">
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-green-100 rounded-full font-semibold text-green-400  justify-self-center content-center self-center">
            Aguardando retirada
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-3 grid-rows-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-2 p-4 my-3  bg-gray-50 border-2	border-gray-200 rounded-md ">
        <div id="name paciente" className="col-span-3 md:col-span-2 ">
          <span className="text-sm text-gray-500">Nome do Paciente</span>
          <p className="text-xl font-semibold">Pizzaria Guloso</p>
        </div>
        <div
          id="solicitante"
          className="col-span-3  md:col-span-2 lg:col-span-1"
        >
          <span className="text-sm text-gray-500">solicitante</span>
          <p className="text-xl font-semibold">Jheferson Torres de Macena</p>
        </div>
        <div id="status" className="col-span-3  md:col-span-4 lg:col-span-1 ">
          <span className="text-sm text-gray-500 text-center justify-self-center content-center self-center w-full">
            Status
          </span>
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-red-100 rounded-full font-semibold text-red-400  justify-self-center content-center self-center">
            Aguardando devolução
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center my-12">
      <div class="flex text-gray-700">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            1
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">
            2
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            3
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            ...
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            13
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            14
          </div>
          <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            15
          </div>
          <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
            2
          </div>
        </div>
        <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>

    </div>
  );
}
