import { type UserCredential } from 'firebase/auth'

export interface AuthRepository {
  redirectWithGoogle: () => void
  createEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
  signEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
  inSignOut: () => Promise<void>
}
