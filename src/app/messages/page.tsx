import { Menu } from "@/components/Menu";
import { MainMessages } from "@/components/Messages/Main";

export default function Messages() {
  return (
    <div>
      <header className='flex items-center p-6 shadow-zinc-900 shadow-md'>
        <h1 className='text-lg font-light'>our memories.</h1>
      </header>
      <MainMessages />
      <Menu item='messages' />
    </div>
  )
}