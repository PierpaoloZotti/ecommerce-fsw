import { AlertTriangle } from "lucide-react";

const NoProductFound = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center
    "
    >
      <AlertTriangle size={46} className="text-orange-500" />
      <h1 className="text-2xl">No product found</h1>
    </div>
  );
};

export default NoProductFound;
