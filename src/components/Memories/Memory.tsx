'use client';
import { HeartIcon } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';

interface MemoryProps {
  img: any;
  alt: string;
  title: string;
  description: string;
}

function Memory({ img, title, description, alt }: MemoryProps) {
  const [like, setLike] = useState(false)

  return (
    <div className="bg-zinc-700 p-6 rounded-md flex flex-col justify-center gap-2 shadow-md shadow-zinc-900">
      <Image src={img} alt={alt} className="rounded-md" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="mt-2 font-light text-base">{description}</p>
      <div className='w-full h-[0.05rem] bg-zinc-200 rounded-full my-2' />
      <div>
        <button className=''>
          {like === true ? (
            <HeartIcon onClick={() => setLike(!like)} className='text-red-600' fill='rgb(220 38 38)' />
          ) : (
            <HeartIcon onClick={() => setLike(!like)} />
          )}
        </button>
      </div>
    </div>
  );
}

export { Memory }