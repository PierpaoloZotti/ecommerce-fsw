"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cart from "./cart";
import { Badge } from "./badge";

const Header = () => {
  const router = useRouter();

  const { data, status } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

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
          <Separator className="my-4" />
          {status === "authenticated" && data?.user?.image && (
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={data.user.image} />
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-md font-semibold text-primary">
                {data.user.name}
              </span>
            </div>
          )}
          <Separator className="my-4" />
          <div className="flex items-center gap-2"></div>
          <div className="mt-2 flex flex-col gap-y-2">
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-x-4"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} />
                Sign In
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-x-4"
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={16} />
                Log Out
              </Button>
            )}
            <Link href="/">
              <Button
                variant="outline"
                className="w-full justify-start gap-x-4"
              >
                <HomeIcon size={16} />
                Home
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start gap-x-4">
              <PercentCircleIcon size={16} />
              Promotions
            </Button>
            <Link href="/catalog">
              <Button
                variant="outline"
                className="w-full justify-start gap-x-4"
              >
                <ListOrderedIcon size={16} />
                Catalog
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
