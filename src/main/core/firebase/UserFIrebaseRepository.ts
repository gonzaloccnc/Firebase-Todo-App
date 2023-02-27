import { type UserRepository } from '../../domain/repositories/UserRepository'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from '../../infra/firebase/firebase'
import { type UserDocument } from '../../../app/shared/utils/types'

export class UserFirebaseRepository implements UserRepository {
  getUser = async (email: string): Promise<{ id: string | null }> => {
    const q = query(collection(db, 'users'), where('email', '==', email))
    const user: { id: null | string } = {
      id: null
    }

    const docs = await getDocs(q)
    docs.forEach(usr => {
      if (usr.exists()) {
        user.id = usr.id
      }
    })
    return user
  }

  createUser = async (values: UserDocument): Promise<void> => {
    await setDoc(doc(db, 'users', values.id), {
      email: values.email,
      nombre: values.nombre,
      edad: values.edad
    })
  }
}
