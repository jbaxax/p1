import { User } from "lucide-react";
import NavToggle from "./nav-toggle";
import NavLinks from "./nav-links";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-5 border-b-2">
      <div className="flex justify-between">
        <Image src="/next.svg" width={70} height={70} alt="logo" className="hidden md:block"/>
        <div className="md:hidden">
          <NavToggle />
        </div>

        <div className="flex gap-6">
          <nav className="hidden md:block">
            <ul className="flex">
              <NavLinks />
            </ul>
          </nav>
          <div className="flex gap-2 items-center">
            <span className="text-xl">Walter</span>
            <User size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
