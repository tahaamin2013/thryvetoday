"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,  SheetTrigger,
} from "@/components/ui/sheet"; 
import { useState, useEffect } from "react";
import Link from "next/link";


const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const closeSidebar = () => setOpen(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    // Close the sidebar when the pathname changes
    closeSidebar();
  }, [pathname]);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <div className="flex flex-row items-center gap-">
        <SheetTrigger >
          <button aria-label="Menu Button" className="flex flex-row gap-3" onClick={toggleOpen}>
            <Menu className="relative z-50 h-5 w-5 text-black dark:text-white" />
          </button>
        </SheetTrigger>
        </div>
        <SheetContent className="text-left">
          <div className="mt-4 text-lg flex flex-col gap-4">  
            <span className="border-black border-b w-fit">
              <Link href='/home'>
              Home
              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/course'>
              Course
              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/apply'>
              Apply Now              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/checkout'>
              Checkout
              </Link>
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNav;