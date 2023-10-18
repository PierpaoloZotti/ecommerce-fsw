'use client'

import { Button } from "./button";
import { Card } from "./card";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Header = () => {
  const {data, status} = useSession()
  
  const handleLoginClick =async () => {
    await signIn();
  }

  const handleLogoutClick =async () => {
    await signOut();
  }

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          {status === 'authenticated' && data?.user?.image &&
          
          (
            <Avatar>
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>
              <AvatarImage src={data.user.image} />
            </Avatar>
          )}
          <div className="flex items-center gap-2"></div>
          <div className="mt-2 flex flex-col gap-y-2">
           {status === 'unauthenticated' &&
            <Button variant="outline" className="w-full justify-start gap-x-4" onClick={handleLoginClick}>
            <LogInIcon size={16} />
            Sign In
          </Button>}
          {status === 'authenticated' &&
           <Button variant="outline" className="w-full justify-start gap-x-4" onClick={handleLogoutClick}>
           <LogOutIcon size={16} />
           Log Out
         </Button>}
            <Button variant="outline" className="w-full justify-start gap-x-4">
              <HomeIcon size={16} />
              Home
            </Button>
            <Button variant="outline" className="w-full justify-start gap-x-4">
              <PercentCircleIcon size={16} />
              Promotions
            </Button>
            <Button variant="outline" className="w-full justify-start gap-x-4">
              <ListOrderedIcon size={16} />
              Catalog
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
     
      {data ? ( 
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline">
         <ShoppingCartIcon />
       </Button>
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image src={data.user?.image || ''} fill alt="user profile pic" objectFit="cover"/>
          
        </div>
        </div>)
        :
        ( <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>)}
    </Card>
  );
};

export default Header;
