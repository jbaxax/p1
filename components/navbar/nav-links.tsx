"use client";
import Link from "next/link";
import { itemsNavbar } from "./data";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const router = usePathname();
  return itemsNavbar.map((item) => {
    return (
      <div
        key={item.id}
        className={`${
          router === item.link &&
          "text-white md:text-primary bg-primary md:bg-transparent rounded-sm md:underline md:decoration-4 md:underline-offset-4"
        } flex gap-2 p-3 text-xl items-center`}
      >
        <span className="md:hidden">{item.icon}</span>
        <Link href={item.link}>{item.title}</Link>
      </div>
    );
  });
}
