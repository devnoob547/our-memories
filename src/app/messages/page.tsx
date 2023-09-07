import { Menu } from "@/components/Menu";
import { MainMessages } from "@/components/Messages/Main";
import { Plus } from "lucide-react";

export default function Messages() {
  return (
    <div className="min-h-screen">
      <header className='flex items-center p-6 shadow-zinc-900 shadow-md'>
        <h1 className='text-lg font-light'>our memories.</h1>
      </header>
      <MainMessages />
      <a href="/messages/add" className="bg-green-500 w-14 rounded-full flex items-center justify-center h-14 fixed bottom-36 right-4 text-zinc-950 hover:bg-green-400 hover:shadow-zinc-900 hover:shadow-md transition-colors duration-300">
        <Plus size={25} />
      </a>
      <Menu item='messages' />
    </div>
  )
}