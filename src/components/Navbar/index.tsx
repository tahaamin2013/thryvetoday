"use client";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import MobileNav from "./MobileNav";
import {useEffect } from "react";
import { ThemeToggle } from "../theme_toggler";
import Image from "next/image";


const Navbar = () => {

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
    <nav className=" border-b-2 fixed shadow-sm pt-3 pb-1 flex items-center inset-x-0 top-0 z-30 w-full  dark:bg-[#121827]/75 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
<div className="flex flex-col w-[200px]">
{/* <Link
  aria-label="Starbucks Home"
  href="/"
  className="flex text-4xl ml-4 text-[#2DB188] gap-4 z-40 font-thryez"
>
thryve
</Link> */}
<div className="flex flex-col">
<Image src='/Logo.svg' width={130} height={130} alt="Logo" />
<p className="text-[10px] ml-1 font-GothamNarrow tracking-[.25em] uppercase text-[#B7853C] dark:text-[#E9E3AF]  bg-clip-text">
  Training Center
</p>
</div>
{/* <p className="text-[4px]">Built by nurses, inspired by care, and driven by education.</p> */}


</div>
          <MobileNav />
          <div className="hidden text-lg gap-5 items-center space-x-4 sm:flex">
            <p id="home">Home</p>
            <p id="course">Course</p>
            <p id="apply">Apply Now</p>
            <p id="checkout">Checkout</p>
            <p id="ThemeToggle"><ThemeToggle /></p>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
