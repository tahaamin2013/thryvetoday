"use client";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import MobileNav from "./MobileNav";
import {useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "../theme_toggler";


const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const refreshLink = document.getElementById("refreshLink");
    const handleRefreshClick = () => {
      location.reload();
    };

    if (refreshLink) {
      refreshLink.addEventListener("click", handleRefreshClick);
    }

    return () => {
      if (refreshLink) {
        refreshLink.removeEventListener("click", handleRefreshClick);
      }
    };
  }, []);


  return (
    <nav className=" border-b-2 fixed shadow-sm pt-3 pb-1 flex items-center inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
        <Link
  aria-label="Starbucks Home"
  href="/"
  className="flex text-4xl text-[#2DB188] gap-4 z-40 font-thryez"
>
thryve
</Link>

          <MobileNav />
          <div className="hidden text-lg gap-5 items-center space-x-4 sm:flex">
            <p id="Drinks">Home</p>
            <p id="Foods">Course</p>
            <p id="At Home Coffee">Apply Now</p>
            <p id="At Home Coffee">Checkout</p>
            <p id="Merchandise"><ThemeToggle /></p>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
