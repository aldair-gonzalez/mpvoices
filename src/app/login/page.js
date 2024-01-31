'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth } from '../../lib/firebase-utils'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const validateEmail = (email) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return re.test(email.trim())
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors({})

    const formErrors = {}
    if (!validateEmail(email)) {
      formErrors.email = 'Usuario incorrecto'
    }
    if (!password) {
      formErrors.password = 'Se necesita contraseña'
    }

    if (Object.keys(formErrors).length === 0) {
      getAuth(email.trim(), password, router, false, false, undefined)
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <div className='w-auto h-auto mt-8 lg:mt-2 lg:h-screen flex flex-col justify-center items-center md:justify-start'>
      <div className='md:mt-14 lg:mb-4'>
        <h2 className='text-3xl text-white'>Ingresar</h2>
      </div>

      <form className='border-2 border-white-200 rounded-md m-4 flex flex-col gap-4 py-6 px-4' onSubmit={handleSubmit}>
        <div>
          <label className='text-white mr-2 ml-3' htmlFor="email">Usuario:</label>
          <input
            placeholder='Nombre de Usuario'
            className='text-black border-2 border-slate-200 rounded-3xl p-2 mt-2 w-full'
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trimStart())}
            autoComplete="email"
          />
          {errors.email && <p className='text-[#E9500E] text-sm pt-2'>{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label className='text-white mr-2 ml-3' htmlFor="password">Contraseña:</label>
          <div className='grid grid-cols-3 grid-rows-1 w-full'>
            <input
              placeholder='Contraseña'
              className='text-black border-2 border-slate-200 rounded-3xl p-2 mt-2 w-full col-start-1 col-end-4 row-start-1 row-end-2'
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-black p-2 mt-1 bg-transparent border-none focus:outline-none mr-2 z-20 text-xs col-start-3 col-end-4 row-start-1 row-end-2"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
        </div>
        {errors.password && <p className='text-[#E9500E] text-sm pt-2'>{errors.password}</p>}
        <button className='hover:bg-[#E9500E] hover:border-white transition-all w-full py-3 px-4 shadow-md border border-[#E9500E] text-white font-bold rounded-3xl mt-5'
          type="submit">
            Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm
