'use client'
import { prisma } from '@/app/api/messages/route'
import { FieldValues, useForm } from 'react-hook-form'

export default function AddMessage() {
  const { register, handleSubmit } = useForm()

  async function addMessage(data: FieldValues) {
    const response = await fetch('/api/messages/add', {
      method: 'POST'
    })
    
    console.log(response)
  }

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center flex-col space-y-6">
      <div className="flex flex-col items-center justify-center space-y-12">
        <h1 className="text-3xl">our memories.</h1>
        <h2 className="font-light">Enviar mensagem</h2>
      </div>
      <div className="mx-8 bg-zinc-700 p-6 rounded-md shadow-md shadow-zinc-900">
        <form 
          action=""
          className="flex items-center justify-center flex-col gap-4"
          onSubmit={handleSubmit(addMessage)}
        >
          <input type="text" {...register('name')} placeholder="Nome" className="bg-zinc-900 p-4 rounded-md text-sm border border-zinc-600 focus:border-zinc-400 transition-colors duration-300 outline-none" />
          <textarea placeholder="Mensagem" {...register('message')} rows={5} className="bg-zinc-900 p-4 rounded-md text-sm border border-zinc-600 resize-none w-full focus:border-zinc-400 transition-colors duration-300 outline-none" />
          <button 
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 hover:shadow-md hover:shadow-zinc-900"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}