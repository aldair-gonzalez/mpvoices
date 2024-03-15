import { Alumno, AlumnoClase, Profesor, Rol, Usuario } from './schemas'

export const RolConverter = {
  toFirestore: (rol) => {
    return {
      nombre: rol.nombre
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new Rol({ nombre: data.nombre })
  }
}

export const UsuarioConverter = {
  toFirestore: (usuario) => {
    return {
      full_name: usuario.full_name,
      email: usuario.email,
      telefono: usuario.telefono,
      rol: usuario.rol
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new Usuario({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      rol: data.rol
    })
  }
}

export const ProfesorConverter = {
  toFirestore: (profesor) => {
    return {
      usuario: profesor.usuario,
      instrumento: profesor.instrumento,
      dias: profesor.dias
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new Profesor({
      usuario: data.usuario,
      instrumento: data.instrumento,
      dias: data.dias
    })
  }
}

export const AlumnoConverter = {
  toFirestore: (alumno) => {
    return {
      Usuario: alumno.usuario,
      profesor: alumno.profesor,
      instrumento: alumno.instrumento
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new Alumno({
      usuario: data.usuario,
      profesor: data.profesor,
      instrumento: data.instrumento
    })
  }
}

export const AlumnoClaseConverter = {
  toFirestore: (clase) => {
    return {
      dia: clase.dia,
      horaInicio: clase.horaInicio,
      horaFin: clase.horaFin,
      profesor: clase.profesor
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return new AlumnoClase({
      dia: data.dia,
      horaInicio: data.horaInicio,
      horaFin: data.horaFin,
      profesor: data.profesor
    })
  }
}
