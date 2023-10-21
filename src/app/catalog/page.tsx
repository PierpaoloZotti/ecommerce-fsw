import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/prisma";
import { LayoutGrid } from "lucide-react";
import CatalogItem from "./components/catalog-item";

const CatalogPage = async () => {
  const categories = await db.category.findMany();
  return (
    <div className="px-5">
      <Badge
        variant="outline"
        className="my-7 gap-2 border-2 border-primary px-3 py-1"
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="uppercase">Catalog</span>
      </Badge>
      <div className="grid grid-cols-2 gap-[30px]">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
