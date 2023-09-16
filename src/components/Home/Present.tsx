'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function Present() {
  const [hour, setHour] = useState<number>(1)
  const [minute, setMinute] = useState<number>(1)
  const [second, setSecond] = useState<number>(1)

  function countdown() {
    const countDate = new Date('September 16, 2023 20:00:00').getTime();
    const now = new Date().getTime();

    const interval = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const hourNumber = Math.floor((interval % day) / hour)
    const minuteNumber = Math.floor((interval % hour) / minute)
    const secondNumber = Math.floor((interval % minute) / second)

    setHour(hourNumber)
    setMinute(minuteNumber)
    setSecond(secondNumber)
  }

  const execute = setTimeout(countdown, 1000)

  if (hour <= 0 && minute <= 0 && second <= 0) {
    clearInterval(execute)
  }
  return (
    <div className="flex flex-col justify-center bg-zinc-700 p-4 rounded-lg shadow-md shadow-zinc-900 space-y-4">
      <h1 className="font-normal text-2xl">faltam:</h1>
      <div className="flex-1 w-full justify-center items-center flex space-x-2">
        {hour + minute + second <= 0 ? (
          <p className='w-full text-sm flex items-center'>Sua surpresinha foi revelada <CheckCircle className='text-green-400 ml-2' /></p>
        ) : (
          <>
            <div className="p-4 bg-zinc-900 rounded-md w-12 flex items-center justify-center text-lg">
              {hour}
            </div>
            <p>:</p>
            <div className="p-4 bg-zinc-900 rounded-md w-12 flex items-center justify-center text-lg">
              {minute}
            </div>
            <p>:</p>
            <div className="p-4 bg-zinc-900 rounded-md w-12 flex items-center justify-center text-lg">
              {second}
            </div>
          </>
        )}

      </div>
      <p className="text-zinc-300 font-light">pra vc receber seu presente :)</p>
    </div>
  )
}