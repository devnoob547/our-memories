import { Memory } from './Memory'
import Image1 from '../../../public/image-1.jpg';

function MemoriesMain() {
  return (
    <main className="p-6 pb-36 flex flex-col gap-4">
      <Memory 
        title='Primeira vez que nos vemos :)'
        description='Uma fotinha da primeira vez que nos vimos :)'
        alt='Nós <3'
        img={Image1}
      />
      <Memory 
        title='Primeira vez que nos vemos :)'
        description='Uma fotinha da primeira vez que nos vimos :)'
        alt='Nós <3'
        img={Image1}
      />
      <Memory 
        title='Primeira vez que nos vemos :)'
        description='Uma fotinha da primeira vez que nos vimos :)'
        alt='Nós <3'
        img={Image1}
      />
      <Memory 
        title='Primeira vez que nos vemos :)'
        description='Uma fotinha da primeira vez que nos vimos :)'
        alt='Nós <3'
        img={Image1}
      />
    </main>
  )
}

export { MemoriesMain }