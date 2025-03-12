"use client"
 
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavLinks from "./nav-links"
import { useEffect, useState } from "react"
import useBreakpointer from "@/hooks/useBreakpointer"
 
 
export default function NavToggle() {
   
  const [open,setOpen] = useState(false);

  const width = useBreakpointer();

  useEffect(()=>{
    if(width > 1024){
      setOpen(false)
    }
  },[width])
  
  return (
    <div className="grid grid-cols-2 gap-2">
  
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline"><Menu/></Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 pt-12" onClick={()=>setOpen(false)}>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
              </SheetDescription>
              
            </SheetHeader>
            <NavLinks/>
            
          </SheetContent>
        </Sheet>
    
    </div>
  )
}
