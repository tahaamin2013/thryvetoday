"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,  SheetTrigger,
} from "../ui/sheet"; 
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const closeSidebar = () => setOpen(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
      Sfd
        </SheetTrigger>
        <SheetContent className="text-left">
          <div className="mt-4 text-lg flex flex-col gap-4">  
            <span className="border-black border-b w-fit">
              <p id="Drinks" onClick={closeSidebar}>
                Drinks
              </p>
            </span>
            <span className="border-black border-b w-fit">
              <p id="Foods" onClick={closeSidebar}>
                Foods
              </p>
            </span>
            <span className="border-black border-b w-fit">
              <p id="At Home Coffee" onClick={closeSidebar}>
                At Home Coffee
              </p>
            </span>
            <span className="border-black border-b w-fit">
              <p id="Merchandise" onClick={closeSidebar}>
                Merchandise
              </p>
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNav;