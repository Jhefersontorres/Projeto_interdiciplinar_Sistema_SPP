import { motion } from "framer-motion";
import Link from 'next/link'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const variantItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const menuItems = [
  {
    name: "PRONTUÁRIOS",
    route: "/",
    svg: (
      <img
      src="/Treatment.svg"
      alt="Logo Sistema SSP"
      className="h-10 w-50"
    />
      
    ),
  },
];

const MenuItem = (item, active) => (
  <Link href={item.route}>
    <motion.a
      variants={variantItem}
      key={item.name}
      className="inline-flex items-center p-2 h-12 w-50 my-1 border-gray-100 hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-400"
    >
      {item.svg}
      <span>{item.name}</span>
    </motion.a>
  </Link>
);

export default function Menu() {
  return (
    <motion.aside
      transition={{ duration: 0.8 }}
      initial={{ x: -88 }}
      animate={{ x: 0 }}
      className="hidden md:flex md:flex-col"
    >
      <div className="flex-grow flex flex-col justify-between text-gray-100 bg-green-500">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col my-8"
        >
          {menuItems.map((item) => MenuItem(item))}
        </motion.nav>
      </div>
    </motion.aside>
  );
}
