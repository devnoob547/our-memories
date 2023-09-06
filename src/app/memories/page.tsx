import { MemoriesMain } from '@/components/Memories/Main';
import { Menu } from '@/components/Menu';

export default function Memories() {
  return (
    <div>
      <header className='flex items-center p-6 shadow-zinc-900 shadow-md'>
        <h1 className='text-lg font-light'>our memories.</h1>
      </header>
      <MemoriesMain />
      <Menu item='memories' />
    </div>
  )
}