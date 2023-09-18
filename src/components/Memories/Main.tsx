import { Memory } from './Memory'
import Image1 from '../../../public/image-1.jpg';
import Image2 from '../../../public/image-2.jpg';
import Image3 from '../../../public/image-3.jpg';
import Image5 from '../../../public/image-5.jpg';
import Image6 from '../../../public/image-6.jpg';
import Image8 from '../../../public/image-8.jpg';
import { Info } from 'lucide-react';

function MemoriesMain() {
  return (
    <main className="p-6 pb-36 flex flex-col gap-4">
      <Memory 
        title='Primeira vez que nos vimos na Consciência Cristã :)'
        description='uma foto tirada num momento bem aleatório, mas se não me engano, mainha que puxou pra tirar a foto KKKKASKAKSKASAK, meu coração deu uma leve acelerada aqui 👀'
        alt='Nós <3'
        img={Image2}
        date='18/02/2023'
      />
      <Memory 
        title='Primeira vez que jantamos juntos ❤️'
        description='nós jantamos no bar do cuscuz, e construimos memórias desde troca de olhares até uma sobremesa de 40 reais lotada de chocolate e que eu não imaginava que seria tão grande KKKAKSAKSKASKSKAKAKSAKSKA'
        alt='Nós <3'
        img={Image1}
        date='18/02/2023'
      />
      <Memory 
        title='Segundo dia da Consciencia Cristã'
        description='Esse dia na real foi um misto de emoções, acho que palavras não descreveriam tudo que sentimos naquele dia, foi uma mistura de muita alegria, mas também muita dor, porque foi nossa primeira despedida, e realmente, não há como explicar aquele dia.'
        alt='Nós <3'
        img={Image3}
        date='19/02/2023'
      />
      <Memory 
        title='Quando nos vimos na semana do meu aniversário'
        description='boy, eu acho que esse aniversário foi um dos melhores da minha vida porque eu passei ele ao seu lado, e construimos tantas memórias, mas acho que a que mais marcou foi eu ter te ensinado um pouco sobre guitarra, por mais que eu me perdesse tanto pra ensinar, afinal eu tava olhando pra você, era difícil manter a postura KAKKAKKSAKSKASKASKAKSAKSKA. Mas foi um final de semana incrível, eu nunca vou parar de lembrar dos nossos momentos desse fim de semana 🥹'
        alt='Nós <3'
        img={Image5}
        date='30/04/2023'
      />
      <Memory 
        title='Nas férias'
        description='o que dizer desse dia? eu literalmente fiz de tudo pra te ver, quase deu tudo errado, mas conseguimos, e foi incrível demais, acho que nunca falei, mas foi a primeira vez que joguei Guitar Hero, e foi com você 🥹🥹🥹. Esse dia foi incrível demais, e eu tenho certeza que marcou muito você, assim como me marcou 🥺.'
        alt='Nós <3'
        img={Image6}
        date='15/07/2023'
      />
      <Memory 
        title='seu aniversário 🤍'
        description='ai vei, esse dia foi tão perfeito, foi tudo tão encantador, e eu consegui perceber a beleza de um simples sorriso seu, vei, é tão lindo. eu percebi o quanto é bom sorrir com vc, o quanto é bom estar com você, e como eu amo ter vc como minha melhor amiga. sabe ana, acho q esse dia vai ficar na minha memória pra sempre num lugar muito especial, nunca vou esquecer de cada olhar seu. falando em olhar... nossa, nesse dia eu aprendi o quanto admirar seus olhos é bom, seus olhos são lindos, e eu sempre soube disso, mas dessa vez... parece q eu me apaixonei mais ainda por admirar seus olhos.'
        alt='Nós <3'
        img={Image8}
        date='16/09/2023'
      />
      <div className='bg-zinc-700 p-4 rounded-lg animate-slow-to-right shadow-md shadow-zinc-900'>
        <div className='w-full'>
          <Info className='text-green-400 float-right' size={25} />
        </div>
        <p className='font-light text-sm pt-4 text-zinc-100'>cara, por mais q tenhamos tantas memórias incríveis, nada se compara ao nosso amor um pelo outro que vem de Deus, sabe? bem, ja escrevi muitas coisas p vc hj, mas o que eu quero q vc saiba... é que eu te amo, demais e to morrendo de sdd de vc.</p>
        <p className='font-light text-sm pt-4 text-zinc-100'>espero que a gente possa ir atualizando esse site com novas memórias :)</p>
      </div>
    </main>
  )
}

export { MemoriesMain }