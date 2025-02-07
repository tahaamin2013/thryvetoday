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
        <SheetTrigger asChild>
          <button aria-label="Menu Button" onClick={toggleOpen}>
            <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
          </button>
        </SheetTrigger>
        <SheetContent className="text-left">
          <div className="mt-4 text-lg flex flex-col gap-4">  
            <span className="border-black border-b w-fit">
              <Link href='/drinks'>
                Drinks
              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/food'>
                Food
              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/athomecoffee'>
                At Home Coffee
              </Link>
            </span>
            <span className="border-black border-b w-fit">
              <Link href='/merchandise'>
                Merchandise
              </Link>
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNav;