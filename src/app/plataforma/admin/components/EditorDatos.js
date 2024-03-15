import { updateUsuarioAlumnoById } from '@/lib/firebase/actions.admin'
import React, { useState, useEffect } from 'react'

// import { updateAlumno, fetchAlumno } from '@/app/api/api'

const EditorDatos = ({ alumno, setSelectedAlumno }) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [originalData, setOriginalData] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    if (alumno) {
      setNombre(alumno.usuario.full_name.nombre || '')
      setApellido(alumno.usuario.full_name.apellido || '')
      setBirthdate(alumno.usuario.birthdate || '')
      setEmail(alumno.usuario.email || '')
      setTelefono(alumno.usuario.telefono || '')

      setOriginalData({
        nombre: alumno.usuario.full_name.nombre || '',
        apellido: alumno.usuario.full_name.apellido || '',
        birthdate: alumno.usuario.birthdate || '',
        email: alumno.usuario.email || '',
        telefono: alumno.usuario.telefono || ''
      })
    }
  }, [alumno])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const updatedAlumnoData = await updateUsuarioAlumnoById(alumno.id, {
        nombre,
        apellido,
        birthdate,
        email,
        telefono,
        usuario: alumno.usuario
      })
      setSelectedAlumno(updatedAlumnoData)
      setEditMode(false)
      setShowConfirmation(true)
    } catch (error) {
      console.error('Error al actualizar los datos:', error)
    }
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  const cancelarClick = () => {
    if (originalData) {
      setNombre(originalData.nombre)
      setApellido(originalData.apellido)
      setBirthdate(originalData.birthdate)
      setEmail(originalData.email)
      setTelefono(originalData.telefono)
    }
    setEditMode(false)
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const utcDate = new Date(date.toUTCString())
    const day = utcDate.getUTCDate().toString().padStart(2, '0')
    const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0')
    const year = utcDate.getUTCFullYear()
    return `${day}-${month}-${year}`
  }

  return (
    <div className='w-full'>
      {editMode
        ? (
        <div className='flex flex-col w-full bg-[#0D0D0D] px-4 sm:px-8 pb-8 pt-4'>
          <form className='w-full mx-auto' onSubmit={handleSubmit}>
            <div className='flex mb-6'>
              <label className='font-bold mr-auto w-2/6'>Nombre:</label>
              <input
                className='text-[#0D0D0D] rounded-3xl h-8 pl-2 w-4/6 ml-auto'
                type='text'
                name='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className='flex mb-6'>
              <label className='font-bold mr-auto w-2/6'>Apellido:</label>
              <input
                className='text-[#0D0D0D] rounded-3xl h-8 pl-2 w-4/6 ml-auto'
                type='text'
                name='apellido'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className='flex mb-6'>
              <label className='font-bold mr-auto w-2/6'>Fecha de nac.:</label>
              <input
                className='text-[#0D0D0D] rounded-3xl h-8 px-2 w-4/6 ml-auto'
                type='date'
                name='fecha'
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className='flex mb-6'>
              <label className='font-bold mr-auto w-2/6'>E-Mail:</label>
              <input
                className='text-[#0D0D0D] rounded-3xl h-8 pl-2 w-4/6 ml-auto'
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex mb-6'>
              <label className='font-bold mr-auto w-2/6'>Teléfono:</label>
              <input
                className='text-[#0D0D0D] rounded-3xl h-8 pl-2 w-4/6 ml-auto'
                type='text'
                name='tel'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className='flex w-full mx-auto mt-8 gap-x-4'>
            <button className='font-botones font-bold rounded-3xl w-3/6 bg-[#E9500E] text-[#FFFFFF] px-3 h-12 sm:h-10 md:hover:bg-[#DB9B6D]' type='submit'>
                Guardar
              </button>
              <button
                className='font-botones font-bold rounded-3xl w-3/6 ml-auto bg-[#FFFFFF] text-[#0D0D0D] md:hover:text-[#E9500E] border-2 border-[#E9500E] px-3 h-12 sm:h-10'
                onClick={cancelarClick}
                type='button'
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
          )
        : (
        <div className='flex flex-col w-full mx-auto bg-[#0D0D0D]'>
          <div className='px-4 sm:px-8 pb-8 w-full pt-4'>
            <div className='mb-8 flex'>
              <p className='mr-2 text-base font-bold'>Nombre:</p>
              <p className='text-base'>{nombre}</p>
            </div>
            <div className='mb-8 flex'>
              <p className='mr-2 text-base font-bold'>Apellido:</p>
              <p className='text-base'>{apellido}</p>
            </div>
            <div className='mb-8 flex'>
              <p className='mr-2 text-base font-bold'>Fecha de nac.:</p>
              <p className='text-base'>{formatDate(birthdate)}</p>
            </div>
            <div className='mb-8 flex'>
              <p className='mr-2 text-base font-bold'>E-Mail:</p>
              <p className='text-base'>{email}</p>
            </div>
            <div className='flex'>
              <p className='mr-2 text-base font-bold'>Teléfono:</p>
              <p className='text-base'>{telefono}</p>
            </div>
          </div>
          <div className='bg-[#0D0D0D] flex flex-col mx-auto w-full'>
            <button className='font-botones font-bold rounded-3xl w-4/6 sm:w-3/6 mx-auto h-12 sm:h-10 mb-8 bg-[#E9500E] md:hover:bg-[#DB9B6D]' onClick={handleEditClick}>
                Editar datos
            </button>
          </div>
        </div>
          )}
        {showConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-[#FFFFFF] p-12 rounded-lg text-center flex flex-col">
              <p className="text-[#0D0D0D] text-xl mb-4 font-bold">Los cambios se guardaron correctamente.</p>
              <button
                className="text-[#E9500E] md:hover:text-[#DB9B6D] ml-auto font-bold"
                onClick={handleCloseConfirmation}
              >
                Entendido
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default EditorDatos
