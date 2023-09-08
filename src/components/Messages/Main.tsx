import { Message } from "./Message"

interface MessageData {
  message: string;
  name: string;
}

async function MainMessages() {
  const res = await fetch('http://localhost:3000/api/messages', {
    next: {
      revalidate: 30
    }
  })

  const messages: MessageData[] = await res.json()

  return (
    <div className="p-8 flex justify-center flex-col gap-4">
      {messages.map(message => (
        <Message name={message.name} message={message.message} />
      ))}
    </div>
  )
}

export { MainMessages }