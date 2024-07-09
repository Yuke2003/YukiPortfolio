import Image from "next/image";
import image01 from "@/public/world-oasis.png";
import image02 from "@/public/rentify.png";
import image03 from "@/public/pizzaapp.png";
import image04 from "@/public/tourist.png";
import Link from "next/link";

function MyProjects() {
  return (
    <div className="mt-48 p-6">
      <div className="flex items-center justify-center ">
        <h1 className="text-center text-4xl p-4 bg-[#f8f062] rounded-2xl ">
          My Projects
        </h1>
      </div>
      <div className="flex items-center gap-16 flex-wrap  justify-center mt-5">
        <div className="flex flex-col shadow-2xl rounded-lg p-6 w-96 bg-white">
          <Image src={image01} className=" rounded-lg " />
          <h3 className="font-extralight mt-5">
            Our Next.js The-World-Oasis full stack hotel room booking app
            leverages Supabase for its backend. Users can easily reserve and
            delete bookings, ensuring a seamless and efficient experience
          </h3>
          <Link
            href="https://the-world-oasis-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#444] text-white text-center p-2 mt-3 rounded-xl"
          >
            Link
          </Link>
        </div>

        <div className="flex flex-col rounded-lg shadow-2xl p-6 w-96 bg-white">
          <Image src={image02} className=" rounded-lg " />
          <h3 className="font-extralight mt-5">
            Our Next.js The-World-Oasis full stack hotel room booking app
            leverages Supabase for its backend. Users can easily reserve and
            delete bookings, ensuring a seamless and efficient experience
          </h3>
          <Link
            href="https://minpro-2.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#444] text-white text-center p-2 mt-3 rounded-xl"
          >
            Link
          </Link>
        </div>

        <div className="flex flex-col rounded-lg shadow-2xl p-6 w-96 bg-white">
          <Image src={image03} className=" rounded-lg " />
          <h3 className="font-extralight mt-5">
            Our Next.js The-World-Oasis full stack hotel room booking app
            leverages Supabase for its backend. Users can easily reserve and
            delete bookings, ensuring a seamless and efficient experience
          </h3>
          <Link
            href="https://prismatic-smakager-7432de.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#444] text-white text-center p-2 mt-3 rounded-xl"
          >
            Link
          </Link>
        </div>

        <div className="flex flex-col rounded-lg shadow-2xl p-6 w-96 bg-white">
          <Image src={image04} className=" rounded-lg" />
          <h3 className="font-extralight mt-5">
            Our Next.js The-World-Oasis full stack hotel room booking app
            leverages Supabase for its backend. Users can easily reserve and
            delete bookings, ensuring a seamless and efficient experience
          </h3>
          <Link
            href="https://gregarious-fudge-46156f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#444] text-white text-center p-2 mt-3 rounded-xl"
          >
            Link
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
