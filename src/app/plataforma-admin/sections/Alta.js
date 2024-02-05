import React, { useState } from 'react'
import AltaAlumno from '../components/AltaAlumno'
import AltaProfe from '../components/AltaProfe'
import AltaUsuarioAlumno from '../components/AltaUsuarioAlumno'
import AltaUsuarioProfe from '../components/AltaUsuarioProfe'
import { deleteUserByUid } from '../../../lib/firebase-utils'

const Alta = () => {
  const [showProfesorForm, setShowProfesorForm] = useState(false)
  const [showAlumnoForm, setShowAlumnoForm] = useState(false)
  const [alumnoFormSubmitted, setAlumnoFormSubmitted] = useState(false)
  const [profesorFormSubmitted, setProfesorFormSubmitted] = useState(false)
  const [registeredUid, setRegisteredUid] = useState('')

  const handleSetUidRegistered = (uid) => {
    setRegisteredUid(uid)
  }

  const handleShowProfesorForm = () => {
    if (showProfesorForm) {
      setShowProfesorForm(false)
      setProfesorFormSubmitted(false)
    } else {
      setShowProfesorForm(true)
      setShowAlumnoForm(false)
      setAlumnoFormSubmitted(false)
      setProfesorFormSubmitted(false)
    }
  }

  const handleShowAlumnoForm = () => {
    if (showAlumnoForm) {
      setShowAlumnoForm(false)
      setAlumnoFormSubmitted(false)
    } else {
      setShowAlumnoForm(true)
      setShowProfesorForm(false)
      setAlumnoFormSubmitted(false)
      setProfesorFormSubmitted(false)
    }
  }

  const confirmacionRegistro = () => {
    setShowAlumnoForm(false)
    setShowProfesorForm(false)
    setAlumnoFormSubmitted(false)
    setProfesorFormSubmitted(false)
  }

  const cancelarAlumnoForm = () => {
    if (registeredUid) {
      deleteUserByUid(registeredUid)
        .then(() => {
          console.log(`Usuario con UID ${registeredUid} eliminado correctamente.`)
        })
        .catch((error) => {
          console.error('Error al eliminar el usuario:', error)
        })
    }
    setShowAlumnoForm(false)
    setShowProfesorForm(false)
    setAlumnoFormSubmitted(false)
    setProfesorFormSubmitted(false)
  }

  const cancelarProfesorForm = () => {
    if (registeredUid) {
      deleteUserByUid(registeredUid)
        .then(() => {
          console.log(`Usuario con UID ${registeredUid} eliminado correctamente.`)
        })
        .catch((error) => {
          console.error('Error al eliminar el usuario:', error)
        })
    }
    setShowAlumnoForm(false)
    setShowProfesorForm(false)
    setAlumnoFormSubmitted(false)
    setProfesorFormSubmitted(false)
  }

  const handleCancelar = () => {
    setShowAlumnoForm(false)
    setShowProfesorForm(false)
    setAlumnoFormSubmitted(false)
    setProfesorFormSubmitted(false)
    setRegisteredUid('')
  }

  return (
    <div className='w-full mx-auto py-12 bg-[#D9D9D9]'>
      <h2 className="text-center text-xl sm:text-3xl mb-8 text-black">Nuevos usuarios</h2>
      <div className="flex justify-center gap-x-4 sm:gap-x-12 mb-4">
        <button className="text-white bg-[#E9500E] py-2 w-3/6 sm:w-2/6 lg:w-1/6 ml-4 h-12 rounded-3xl" onClick={handleShowAlumnoForm}>
          Alumno
        </button>
        <button className="text-white bg-[#663481] py-2 w-3/6 sm:w-2/6 lg:w-1/6 mr-4 h-12 rounded-3xl" onClick={handleShowProfesorForm}>
          Profesor
        </button>
      </div>
      {showProfesorForm && !profesorFormSubmitted && (
        <AltaUsuarioProfe setProfesorFormSubmitted={setProfesorFormSubmitted} setUidRegistered={handleSetUidRegistered} handleCancelar={handleCancelar} />
      )}
      {profesorFormSubmitted && (
        <AltaProfe setShowProfesorForm={cancelarProfesorForm} confirmacionRegistro={confirmacionRegistro} />
      )}
      {showAlumnoForm && !alumnoFormSubmitted && (
        <AltaUsuarioAlumno setAlumnoFormSubmitted={setAlumnoFormSubmitted} setUidRegistered={handleSetUidRegistered} handleCancelar={handleCancelar} />
      )}
      {alumnoFormSubmitted && (
        <AltaAlumno setShowAlumnoForm={cancelarAlumnoForm} confirmacionRegistro={confirmacionRegistro} />
      )}
    </div>
  )
}

export default Alta
