import Image from "next/image";
import image1 from "@/public/MERN_Stack_9437df2ba9_62af1dd3fc.png";
import image2 from "@/public/4a2be73b1e2efb44355436c40bf496dd.jpg";
import image3 from "@/public/tailwind-css-logo-vector.png";
import image4 from "@/public/Python-Logo.png";

function MySkills() {
  return (
    <div className="h-52">
      <div className="flex items-center justify-center">
        <h1 className="text-center mt-20 text-4xl font-medium bg-[#f8f062] p-4 rounded-2xl">
          My Skills
        </h1>
      </div>
      <div className=" flex justify-center items-center gap-6 mt-5 bg-white p-5 mx-24 rounded-lg">
        <Image src={image1} className="w-64" alt="MERN Stack"/>
        <Image src={image2} className="w-64" alt="Next Js"/>
        <Image src={image3} className="w-64" alt="Tailwind css"/>
        <Image src={image4} className="w-64" alt="Python"/>
      </div>
    </div>
  );
}

export default MySkills;
