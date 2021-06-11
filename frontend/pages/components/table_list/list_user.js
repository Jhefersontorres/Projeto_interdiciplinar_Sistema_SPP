export default function ListUser() {
  return (
    <div>
      <div id="container44" className="md:grid md:grid-cols-2 md:gap-2 mx-2 md:mx-4 lg:mx-6 xl:mx-10 shadow-sm">
        
          <div className="flex flex-auto justify-between">
            <div className=" md:flex md:flex-1 md:justify-center  items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <div className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="sr-only">User Menu</span>
              <div className="flex flex-col  items-end leading-tight justify-between">
                <span className="font-semibold">Grace Simmons</span>
                <span className="text-sm text-gray-600">Estagiario</span>
              </div>
            </div>
          </div>

          <div id="ações" className="">
            <p className=" text-center mb-2 text-md w-full text-gray-500 font-medium ">
              Ações
            </p>
            <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-2 ">
              <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center p-2 bg-indigo-600 hover:bg-indigo-400 hover:text-gray-400 rounded-full text-white justify-self-center content-center self-center">
                Editar
              </button>
              <button className="font-medium text-sm  mb-2 lg:mr-2 px-3 py-2 w-full  text-center  p-2 bg-red-500 rounded-full text-white justify-self-center content-center self-center">
                Excluir
              </button>
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
