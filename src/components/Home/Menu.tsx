import { HomeIcon, Film, Mail } from "lucide-react";
import Link from "next/link";

function Menu() {
  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-screen p-4 bg-zinc-900">
      <nav className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 focus:text-green-400"
        >
          <HomeIcon />
          Início
        </Link>
        <Link
          href="/memories"
          className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 focus:text-green-400"
        >
          <Film />
          Memórias
        </Link>
        <Link
          href="/messages"
          className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 focus:text-green-400"
        >
          <Mail />
          Mensagens
        </Link>
      </nav>
    </footer>
  );
}

export { Menu };
