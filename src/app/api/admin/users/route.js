import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from 'firebase-admin'

import { runAdminApp } from '@/lib/firebase/firebase-admin'

runAdminApp()

export const GET = () => {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 })
}

export const PUT = async (req) => {
  try {
    const uid = headers().get('x-uid')
    const user = await auth().getUser(uid)
    const body = await req.json()

    if (body.email && user.email !== body.email) {
      const userUpdated = await auth().updateUser(uid, {
        email: body.email
      })

      return NextResponse.json(
        { message: 'User updated', userUpdated },
        { status: 200 }
      )
    }

    return NextResponse.json({ message: 'User not updated' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: error.message, code: error.code },
      { status: 400 }
    )
  }
}

export const DELETE = async (req) => {
  try {
    const uid = headers().get('x-uid')
    const user = await auth().getUser(uid)
    await auth().deleteUser(uid)
    let collection
    switch (user.customClaims.rol) {
      case 'profesor':
        collection = 'profesores'
        break
      case 'alumno':
        collection = 'alumnos'
        break
      default:
        return
    }
    return NextResponse.json(
      { message: 'User deleted', collection },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: error.message, code: error.code },
      { status: 400 }
    )
  }
}
