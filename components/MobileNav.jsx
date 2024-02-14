import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
 import Nav from "./Nav";
 import Logo from "./Logo";
import Social from "./Social";

const MobileNav = () => {
  return (
   <Sheet>
    <SheetTrigger asChild>
    <AlignJustify className="cursor-pointer"/>
    </SheetTrigger>
    <SheetContent>
      <div className="flex flex-col items-center justify-between h-full py-8">
        <div className="flex flex-col items-center gap-y-32">
          <Logo/>
          <Nav containerstyles='flex flex-col items-center gap-y-6'
            linkstyles='text-2xl'
          />
          <Social containerstyle='flex gap-x-4' iconStyle='text-2xl'/>
        </div>
      </div>
    </SheetContent>
   </Sheet>
  )
}

export default MobileNav