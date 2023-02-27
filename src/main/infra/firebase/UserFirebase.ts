import { type UserDocument } from '../../../app/shared/utils/types'
import { UserFirebaseRepository } from '../../core/firebase/UserFIrebaseRepository'

const userFirebase = new UserFirebaseRepository()

const createUser = async (values: UserDocument): Promise<void> => {
  await userFirebase.createUser(values)
}

const getUser = async (email: string): Promise<{ id: string | null }> => {
  return await userFirebase.getUser(email)
}

export {
  createUser,
  getUser
}
