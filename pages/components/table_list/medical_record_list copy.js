export default function RecordList() {
  return (
    <div id="container44" className="mx-2 md:mx-4 lg:mx-6 xl:mx-10">
      <div className=" grid grid-cols-3 grid-rows-2 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-y-2 p-4 my-3  bg-white border-2	border-gray-200 rounded-md ">
        <div id="name paciente" className="col-span-3 md:col-span-2 ">
          <span className="text-sm text-gray-500 font-medium">Nome do Paciente</span>
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
          {/* <span className="text-sm text-gray-500 ">Status</span> */}
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-yellow-100 rounded-full font-semibold text-yellow-400  justify-self-center content-center self-center">
            solicitado
          </p>
        </div>
        {/* <div class="actions column flex" className=" flex justify-center justify-items-center justify-self-center content-center self-center md:col-span-2 lg:col-span-1 ">
          <button title="Excluir" className="w-12 h-12  justify-center">
            <img src="/Excluir.png" alt="Excluir Job"  className="w-10 h-10"/>
          </button>
        </div> */}
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
          {/* <span className="text-sm text-gray-500 ">Status</span> */}
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-green-100 rounded-full font-semibold text-green-400  justify-self-center content-center self-center">
            Aguardando retirada
          </p>
        </div>
        {/* <div class="actions column flex" className=" flex justify-center justify-items-center justify-self-center content-center self-center md:col-span-2 lg:col-span-1 ">
          <button title="Excluir" className="w-12 h-12  justify-center">
            <img src="/Excluir.png" alt="Excluir Job"  className="w-10 h-10"/>
          </button>
        </div> */}
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
          <span className="text-sm text-gray-500 text-center justify-self-center content-center self-center w-full">Status</span>
          <p className="text-md p-3 font-normal text-center w-full p-1 border-none bg-red-100 rounded-full font-semibold text-red-400  justify-self-center content-center self-center">
            Aguardando devolução
          </p>
        </div>
        {/* <div class="actions column flex" className=" flex justify-center justify-items-center justify-self-center content-center self-center md:col-span-2 lg:col-span-1 ">
          <button title="Excluir" className="w-12 h-12  justify-center">
            <img src="/Excluir.png" alt="Excluir Job"  className="w-10 h-10"/>
          </button>
        </div> */}
      </div>
    </div>
  );
}
