import Navbar from "@/components/Global/Navbar";
import { Console, log } from "console";

export default function Home() {
  console.log(process.env.MONGO_DB_URI + "Df")
  return (
    <>
      <Navbar />
    </>

  );
}
