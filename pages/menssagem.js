// import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import MainMessages from "./components/main/main_messages"
import Alerts from "./components/alerts/save_sucesso"
import Pagination from "./components/pagination/pagination"

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Menu></Menu>

      <div className="flex-grow ">
        <Header></Header>
        <MainMessages />
        <Alerts />
        <Pagination />
      </div>
    </div>
  );
}

