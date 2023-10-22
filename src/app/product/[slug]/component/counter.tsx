"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className="mt-5 flex items-center gap-3 px-5">
      <Button variant="outline" size="icon" onClick={handleDecrement}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {count}
      <Button variant="outline" size="icon" onClick={() => setCount(count + 1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Counter;
