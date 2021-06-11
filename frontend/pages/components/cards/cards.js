export default function Cards() {
  return (
    <>
        <div><h1 className="text-xs font-semibold m-3 text-center md:text-base lg:text-3xl xl:text-5xl xl:m-8 2xl:text-7xl ">STATUS SOLICITAÇÃO PRONTUÁRIOS </h1></div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4">
          
          <div class="">
            <div class="flex flex-row bg-white shadow-sm rounded p-4 w-full h-full bg-yellow-500">
             <div class="flex flex-col flex-grow ml-4 ">
                <div class="text-xl font-bold text-white ">Solicitados</div>
                <div class="flex">
                  <p className="text-lg text-white">Total </p>
                   <h4 className="font-bold text-lg ml-3 text-white">1259</h4>
                  </div>
                  <div className="flex text-white">
                  <p className="text-lg">Hoje</p>
                   <h4 className="font-bold text-lg ml-3">12</h4>
                  </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex flex-row bg-white shadow-sm rounded p-4 w-full h-full bg-blue-500 text-white">
             <div class="flex flex-col flex-grow ml-4 ">
                <div class="text-xl font-bold text-white ">SEPARADOS</div>
                <div class="flex">
                  <p className="text-lg">Total </p>
                   <h4 className="font-bold text-lg ml-3">1259</h4>
                  </div>
                  <div className="flex">
                  <p className="text-lg">Hoje</p>
                   <h4 className="font-bold text-lg ml-3">12</h4>
                  </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex flex-row bg-white shadow-sm rounded p-4 w-full h-full bg-green-500 text-white">
             <div class="flex flex-col flex-grow ml-4 ">
                <div class="text-xl font-bold text-white ">ENTREGUES</div>
                <div class="flex">
                  <p className="text-lg">Total </p>
                   <h4 className="font-bold text-lg ml-3">1259</h4>
                  </div>
                  <div className="flex">
                  <p className="text-lg">Hoje</p>
                   <h4 className="font-bold text-lg ml-3">12</h4>
                  </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex flex-row bg-white shadow-sm rounded p-4 w-full h-full bg-red-500 text-white">
             <div class="flex flex-col flex-grow ml-4 ">
                <div class="text-xl font-bold text-white ">DEVOLUÇÃO</div>
                <div class="flex">
                  <p className="text-lg">Total </p>
                   <h4 className="font-bold text-lg ml-3">1259</h4>
                  </div>
                  <div className="flex">
                  <p className="text-lg">Hoje</p>
                   <h4 className="font-bold text-lg ml-3">12</h4>
                  </div>
              </div>
            </div>
          </div>
        </div>
    
    
</>
  
  );
}
