// import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import Main from "./components/main/main"


export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Menu></Menu>

      <div className="flex-grow ">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

