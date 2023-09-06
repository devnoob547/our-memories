import { HomeIcon, Film, Mail } from "lucide-react";
import Link from "next/link";

interface MenuProps {
  item: "home" | "memories" | "messages";
}

function Menu({ item }: MenuProps) {
  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-screen p-4 bg-zinc-900">
      <nav className="flex items-center justify-between w-full">
        {item === "home" ? (
          <Link
            href="/"
            className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 text-green-400 hover:bg-zinc-700"
          >
            <HomeIcon />
            Início
          </Link>
        ) : (
          <Link
            href="/"
            className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 hover:text-green-400"
          >
            <HomeIcon />
            Início
          </Link>
        )}
        {item === "memories" ? (
          <Link
            href="/memories"
            className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 text-green-400 hover:bg-zinc-700"
          >
            <Film />
            Memories
          </Link>
        ) : (
          <Link
            href="/memories"
            className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 hover:text-green-400"
          >
            <Film />
            Memories
          </Link>
        )}
        {item === 'messages' ? (
          <Link
          href="/memories"
          className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 text-green-400 hover:bg-zinc-700"
        >
          <Film />
          Mensagens
        </Link>
        ) : (
        <Link
          href="/memories"
          className="text-sm flex flex-col justify-center items-center gap-2 font-light w-24 py-4 rounded-md transition-all duration-300 hover:bg-zinc-700 hover:text-green-400"
        >
          <Mail />
          Mensagens
        </Link>
        )}
      </nav>
    </footer>
  );
}

export { Menu };
