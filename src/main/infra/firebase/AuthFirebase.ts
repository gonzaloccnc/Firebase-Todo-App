import { type UserCredential } from 'firebase/auth'
import { AuthFirebaseRepository } from '../../core/firebase/AuthFirebaseRepository'

const authFirebase = new AuthFirebaseRepository()

const redirectWithGoogle = (): void => {
  authFirebase.redirectWithGoogle()
}

const createEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await authFirebase.createEmailAndPassword(email, password)
}

const signInWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await authFirebase.signEmailAndPassword(email, password)
}

const inSignOut = async (): Promise<void> => {
  await authFirebase.inSignOut()
}

export {
  redirectWithGoogle,
  createEmailAndPassword,
  signInWithEmailAndPassword,
  inSignOut
}
