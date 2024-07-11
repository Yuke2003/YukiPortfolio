// import Image from "next/image";

import { auth } from "../utils/auth";
import SignOutButton from "./SignOutButton";
import Image from "next/image";
import image1 from "@/public/Screenshot 2024-07-09 102611.png";
import Link from "next/link";

async function Header() {
  const session = await auth();
  return (
    <main className="p-4 flex items-center justify-center">
      <div className="bg-white p-3 rounded-full flex items-center shadow-lg justify-between w-[800px]">
        <div className="flex gap-8 items-center">
          <div className="bg-[#fbf469] w-8 h-8 rounded-full flex items-center justify-center">
            <Image
              src={image1}
              className="w-6 h-6 rounded-full bg-[#fbf469]"
              alt="logo"
            />
          </div>
          <div>About</div>
          <div>Works</div>
          <div className="w-[2px] h-5 rounded my-1 bg-[#b4b4b4]"></div>
          <Link href="https://github.com/Yuke2003">Github</Link>
          <Link href="https://www.linkedin.com/in/yukesh-meganathan/">
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#f8f062] p-2 rounded-full px-6">
            Hike It's
          </button>
          {session ? <SignOutButton /> : " "}
        </div>
      </div>
    </main>
  );
}

export default Header;
