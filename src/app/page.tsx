import Navbar from "@/components/Global/Navbar";

export default function Home() {
  return (
    < >
      <div className="w-full overflow-x-clip h-fit min-h-svh bg-black flex flex-col ">

        <Navbar />
        <div className="w-full  text-white gap-2 md:gap-10 grow  flex items-center justify-center bg-black">
          <div className=" w-7/12 h-full border">sdf</div>
          <div className=" w-4/12 h-full border">dsfsd</div>
        </div>

      </div>

    </>

  );
}
