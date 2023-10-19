import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareDashedBottom,
} from "lucide-react";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon className="h-4 w-4" />,
    monitors: <MonitorIcon className="h-4 w-4" />,
    mouses: <MouseIcon className="h-4 w-4" />,
    speakers: <SpeakerIcon className="h-4 w-4" />,
    headphones: <HeadphonesIcon className="h-4 w-4" />,
    mousepads: <SquareDashedBottom className="h-4 w-4" />,
  };
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-4 rounded-[10px] py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-sm font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
