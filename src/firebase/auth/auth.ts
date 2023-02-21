import { type UserCredential, createUserWithEmailAndPassword, signInWithRedirect, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, googleProvider } from '../firebase.config'

const handleRedirectGoogle = (): void => {
  void signInWithRedirect(auth, googleProvider)
}

const handleSignOut = async (): Promise<void> => {
  await signOut(auth)
}

const handleCreateEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

const handleSignEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export {
  handleRedirectGoogle,
  handleSignOut,
  handleCreateEmailAndPassword,
  handleSignEmailAndPassword
}
