import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import Main from "./components/main/main"


export default function Layout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Menu></Menu>

      <div className="flex-grow text-gray-800">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

