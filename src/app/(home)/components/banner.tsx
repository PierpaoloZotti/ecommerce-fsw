import Image from "next/image";

type BannerProps = {
  src: string;
};

const Banner = ({ src }: BannerProps) => {
  return (
    <Image
      src={src}
      alt={src}
      width={0}
      height={0}
      className="my-7 h-auto w-full overflow-hidden rounded-2xl px-5"
      sizes="100dvh"
    />
  );
};

export default Banner;
