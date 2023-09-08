import { Message } from "./Message"

async function MainMessages() {
  const res = await fetch('http://localhost:3000/api/messages', {
    next: {
      revalidate: 30
    }
  })
  const message = await res.json()

  return (
    <div className="p-8">
      <Message message={message.message} name={message.name} />
    </div>
  )
}

export { MainMessages }