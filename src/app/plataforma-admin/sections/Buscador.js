import React, { useState, useEffect } from 'react'
import { getAlumnos, getProfesores } from '../../api/api.js'
import { useAuth } from '../../../lib/auth.js'
import EditorAlumnos from '../components/EditorAlumnos.js'
import EditorProfesor from '../components/EditorProfesor.js'

const Buscador = () => {
  const user = useAuth()
  const [alumnos, setAlumnos] = useState([])
  const [profesores, setProfesores] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAlumno, setSelectedAlumno] = useState(null)
  const [selectedProfesor, setSelectedProfesor] = useState(null)

  useEffect(() => {
    getAlumnos().then(data => {
      setAlumnos(data)
    })
    getProfesores().then(data => {
      setProfesores(data)
    })
  }, [user, selectedAlumno, selectedProfesor])

  const normalizeString = (str) => {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    clearDetails()
  }

  const handleAlumnoClick = (alumno) => {
    setSelectedAlumno(alumno)
    setSearchTerm('')
  }

  const handleProfesorClick = (profesor) => {
    setSelectedProfesor(profesor)
    setSearchTerm('')
  }

  const clearDetails = () => {
    setSelectedAlumno(null)
    setSelectedProfesor(null)
  }

  const searchTermNormalized = normalizeString(searchTerm)

  const buscarAlumnos = searchTerm.trim() !== ''
    ? alumnos.filter(alumno => (
      normalizeString(alumno.Nombre).includes(searchTermNormalized) ||
      normalizeString(alumno.Apellido).includes(searchTermNormalized)
    ))
    : []

  const buscarProfesores = searchTerm.trim() !== ''
    ? profesores.filter(profesor => (
      normalizeString(profesor.Nombre).includes(searchTermNormalized) ||
      normalizeString(profesor.Apellido).includes(searchTermNormalized)
    ))
    : []

  return (
    <div className='flex flex-col bg-[#212121] py-12'>
      <h2 className='text-center text-2xl sm:text-3xl pb-8 text-white border-0 border-b-2 border-b-white'>Buscar usuarios</h2>
      <div className="flex text-black bg-white w-4/6 sm:w-2/6 mx-auto text-center px-3 py-2 mt-12 rounded-3xl">
        <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="magnifyingglass">
          <path id="magnifyingglass_2" d="M16.5602 25.8307C18.4069 25.8307 20.1374 25.2582 21.5775 24.2801L26.6645 29.5165C27.0013 29.8505 27.431 30.0175 27.8956 30.0175C28.8596 30.0175 29.568 29.2421 29.568 28.264C29.568 27.8108 29.4171 27.3694 29.0919 27.0355L24.0397 21.8229C25.085 20.2961 25.7005 18.4473 25.7005 16.4434C25.7005 11.2785 21.5891 7.05603 16.5602 7.05603C11.5429 7.05603 7.41992 11.2785 7.41992 16.4434C7.41992 21.6082 11.5313 25.8307 16.5602 25.8307ZM16.5602 23.3258C12.8786 23.3258 9.85889 20.2246 9.85889 16.4434C9.85889 12.6622 12.8786 9.56091 16.5602 9.56091C20.2419 9.56091 23.2616 12.6622 23.2616 16.4434C23.2616 20.2246 20.2419 23.3258 16.5602 23.3258Z" fill="#1C1C1E"/>
          </g>
        </svg>
        <input
          type="text"
          placeholder="Buscar alumnos o profesores"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onClick={clearDetails}
          className="text-black bg-white w-full h-full mx-auto text-center rounded-3xl my-auto"
        />
      </div>
      {searchTerm.trim() !== '' && (
        <div className='flex flex-col mx-auto w-full'>
          {buscarAlumnos.map((alumno) => (
            <button key={alumno.id} onClick={() => handleAlumnoClick(alumno)} className='mx-auto my-2 bg-[#E9500E] text-white rounded-3xl h-10 w-4/6 sm:w-2/6'>{alumno.Nombre} {alumno.Apellido}</button>
          ))}
        </div>
      )}
      {selectedAlumno && (
        <div className="flex flex-col mx-auto px-3 py-2 items-center w-full sm:w-3/6">
          <EditorAlumnos alumno={selectedAlumno} />
          <button onClick={clearDetails} className='bg-white text-black font-botones font-bold text-center text-sm rounded-3xl h-8 w-4/6'>Volver</button>
        </div>
      )}
      {searchTerm.trim() !== '' && (
        <div className='flex flex-col mx-auto w-full'>
          {buscarProfesores.map((profesor) => (
            <button key={profesor.id} onClick={() => handleProfesorClick(profesor)} className='mx-auto my-2 bg-[#663481] text-white rounded-3xl h-8 w-4/6 sm:w-2/6'>{profesor.Nombre} {profesor.Apellido}</button>
          ))}
        </div>
      )}
      {selectedProfesor && (
        <div className="flex flex-col mx-auto px-3 py-2 items-center w-full sm:w-3/6">
          <EditorProfesor profesor={selectedProfesor} />
          <button onClick={clearDetails} className='bg-white text-black font-botones font-bold text-center text-sm rounded-3xl h-8 w-4/6'>Volver</button>
        </div>
      )}
    </div>
  )
}

export default Buscador
