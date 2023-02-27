import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut, type UserCredential } from 'firebase/auth'
import { type AuthRepository } from '../../domain/repositories/AuthRepository'
import { auth, googleProvider } from '../../infra/firebase/firebase'

export class AuthFirebaseRepository implements AuthRepository {
  redirectWithGoogle = (): void => {
    void signInWithRedirect(auth, googleProvider)
  }

  createEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  signEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  inSignOut = async (): Promise<void> => {
    await signOut(auth)
  }
}
