'use client';
import Image, { StaticImageData } from "next/image";

interface MemoryProps {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
  date: string;
}

function Memory({ img, title, description, alt, date }: MemoryProps) {
  return (
    <div className="bg-zinc-700 p-6 rounded-md flex flex-col justify-center gap-4 shadow-md shadow-zinc-900 animate-show">
      <Image src={img} alt={alt} className="rounded-md w-full" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="mt-2 font-light text-base">{description}</p>
      <span className="text-sm font-light text-zinc-300">{date}</span>
    </div>
  );
}

export { Memory }