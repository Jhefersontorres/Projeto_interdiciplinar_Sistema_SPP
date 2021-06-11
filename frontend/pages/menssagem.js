// import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import MainMessages from "./components/main/main_messages"

export default function Messages() {
  return (
    <div className="flex min-h-screen">
      <Menu></Menu>

      <div className="flex-grow ">
        <Header></Header>
        <MainMessages />
      </div>
    </div>
  );
}

