// import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import MainRegisterUser from "./components/main/main_register_user"


export default function ResgisterUser() {
  return (
    <div className="flex min-h-screen">
      <Menu></Menu>

      <div className="flex-grow ">
        <Header></Header>
        <MainRegisterUser></MainRegisterUser>
      </div>
    </div>
  );
}

