import { type UserDocument } from '../../../app/shared/utils/types'

export interface UserRepository {
  getUser: (email: string) => Promise<{ id: null | string }>
  createUser: (values: UserDocument) => Promise<void>
}
