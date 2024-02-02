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
    <div className='w-full sm:w-3/6 mx-auto mt-4'>
      <h2 className="text-center text-3xl sm:text-5xl mb-4 text-white">Usuarios Nuevos</h2>
      <div className="flex justify-center mb-4">
        <button className="mr-4 text-white font-bold py-2 px-4 rounded" onClick={handleShowProfesorForm}>
          Alta Profesor
        </button>
        <button className="text-white font-bold py-2 px-4 rounded" onClick={handleShowAlumnoForm}>
          Alta Alumno
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
