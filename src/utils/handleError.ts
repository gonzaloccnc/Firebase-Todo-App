import { FirebaseError } from 'firebase/app'

const firebaseError = new Map([
  ['auth/invalid-email', 'Invalid Email'],
  ['auth/user-not-found', 'User not found, are you register?'],
  ['auth/internal-error', 'Ocurrio algo inesperado!'],
  ['auth/weak-password', 'Contraseña devil, debe ser mayor a 6 caracteres!!'],
  ['auth/email-already-exists', 'El correo ya se encuentra registrado.'],
  ['auth/wrong-password', 'Contraseña incorrecta'],
  ['auth/email-already-in-use', 'El correo ya se encuentra registrado.']
])

const handleError = (ex: any): null | string => {
  if (ex instanceof FirebaseError) {
    console.log(ex.code)
    return firebaseError.get(ex.code) ?? null
  }
  return null
}

export {
  handleError
}
