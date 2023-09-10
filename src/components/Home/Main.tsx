import { ExternalLink, PinIcon } from 'lucide-react';
import Link from 'next/link';

const now =  new Date();

function Main() {
  return (
    <main className='h-full p-8 flex flex-col gap-4'>
      <div className='bg-zinc-700 p-4 rounded-lg animate-slow-to-right shadow-md shadow-zinc-900'>
        <div className='w-full'>
          <PinIcon fill='rgb(74 222 128)' className='rotate-45 text-green-400 float-right' size={20} />
        </div>
        <h2>Oi anaaa</h2>
        <p className='font-light text-sm pt-4 text-zinc-100'>bem, eu resolvi criar esse site para guardar algumas de nossas memórias juntos, para podermos guardar em um lugar especial tudo que nós dois já vivemos, por mais que em pouco tempo, mas com um valor emocional tão imenso sabe? Bem, espero que você goste :)</p>
      </div>
      <Link href='/memories' className='animate-slow2-to-right w-full px-8 py-4 bg-green-500 rounded-md text-sm flex justify-center gap-4'>
        <ExternalLink size={40} />
        clique aqui pra ver o que eu fiz p vc :)
      </Link>
    </main>
  )
}

export { Main }