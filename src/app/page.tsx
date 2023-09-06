import { HomeIcon, Film, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Menu } from '@/components/Menu';
import { Main } from '@/components/Home/Main';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <header className='flex items-center p-6 shadow-zinc-900 shadow-md'>
        <h1 className='text-lg font-light'>our memories.</h1>
      </header>
      <Main />
      <Menu item='home' />
    </div>
  );
}
