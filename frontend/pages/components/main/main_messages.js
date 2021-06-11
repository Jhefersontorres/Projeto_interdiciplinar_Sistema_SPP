import { motion } from "framer-motion";
import MessageNotFound from "../several/message_not_found";
import Message from "../table_list/list_menssage"

export default function Main() {
  return (
    <motion.main
      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      className="p-6 sm:p-10 space-y-10"
    >
      {/* <MessageNotFound /> */}
      <Message />
    </motion.main>
  );
}
