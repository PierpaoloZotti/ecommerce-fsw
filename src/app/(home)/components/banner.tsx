import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const Banner = ({ src, alt, className, ...props }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      className={cn(`my-7 h-auto w-full px-5`, className)}
      sizes="100dvh"
      {...props}
    />
  );
};

export default Banner;
