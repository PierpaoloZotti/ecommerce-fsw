"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5">
      <div>
        <Image
          src="/bannerHome01.png"
          alt="banner"
          width={0}
          height={0}
          className="h-auto w-full rounded-2xl md:rounded-none md:p-0"
          sizes="100dvh"
        />
      </div>
    </main>
  );
}
