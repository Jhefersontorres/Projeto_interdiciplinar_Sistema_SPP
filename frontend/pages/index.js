// import { motion } from "framer-motion";
import Menu from "./components/nav/navbar"
import Header from "./components/hearder/header"
import MainDashobard from "./components/main/main_dashboard"


export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Menu />

      <div className="flex-grow ">
        <Header />
        <MainDashobard />
      </div>
    </div>
  );
}

