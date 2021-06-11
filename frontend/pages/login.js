export default function Login() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center ">
      <div className="w-full md:max-w-md lg:max-w-full flex items-center justify-center">
        <img src="/FasiclinLogo.png" alt="" className=" md:max-w-md" />
      </div>

      <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center bg-green-500">
        <div className="w-full h-100">
          <img
            src="/LogoSSP.png"
            alt="Logo Sistemas SSP"
            className=" w-full md:max-w-md lg:max-w-full md:mx-auto mb-20"
          />
          <form className="mt-10" action="#" method="POST">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div className="mt-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-10 w-full block bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 text-green font-semibold rounded-lg px-4 py-3 mt-6 rounded-full"
            >
              ENTRAR
            </button>
          </form>
          <div className="text-right mt-2 flex items-center justify-center">
            <a
              href="#"
              className="mt-8 text-white text-xl font-semibold hover:text-gray-200
                        md:text-lg sm:text-sm"
            >
              Esqueceu a senha
            </a>
          </div>
          <div className="mt-2 sm:flex  items-center justify-center lg:text-center">
            <div className="text-center">
              <p
                className="text-lg text-white"
              >
                Ainda não tem acesso ?
              </p>
            </div>
            <div className="ml-2 text-center">
            <a
              href="#"
              className="text-lg text-white hover:text-gray-200  font-semibold 
              sm:text-sx sm:font-normal sm:text-center"
            >
              {" "}
              Crie sua conta
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
