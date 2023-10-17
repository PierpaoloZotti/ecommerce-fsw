import { Button } from "./button";
import { Card } from "./card";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
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
          <div className="mt-2 flex flex-col gap-y-2">
            <Button variant="outline" className="w-full justify-start gap-x-4">
              <LogInIcon size={16} />
              Sign In
            </Button>
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
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
