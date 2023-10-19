import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/bannerHome01.png"
        alt="banner"
        width={0}
        height={0}
        className="h-auto w-full rounded-2xl md:rounded-none md:p-0"
        sizes="100dvh"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
