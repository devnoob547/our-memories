interface MessageProps {
  message: string;
  name: string;
}

function Message({ message, name }: MessageProps) {
  return (
    <div className="bg-zinc-700 p-6 rounded-md flex flex-col justify-center gap-2 shadow-md shadow-zinc-900">
      <p className="text-base font-normal">{message}</p>
      <span className="text-sm font-light text-zinc-300">{name}</span>
    </div>
  )
}

export { Message }