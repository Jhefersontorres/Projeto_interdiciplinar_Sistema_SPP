export default function SearchNotFound (){
  return(
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="flex flex-wrap mx-auto my-auto md:my-10 ">
          <img
            src="/NothingFound.png"
            alt="Nothing Found"
            className="w-10 h-10 md:w-20 md:h-20 xl:w-40 xl:h-40"
          />
          <h2 className="text-xs mx-auto my-auto md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-9xl text-gray-600 items-center justify-center ">
            Não a menssagem(s) no momento 
          </h2>
        </div>
      </div>
  )
}