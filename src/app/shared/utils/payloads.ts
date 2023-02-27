import { type TodoModel, type TodoUser } from '../../../main/domain/models/TodoModel'
import { type TweetModel } from '../../../main/domain/models/TweetModel'
import { type TodoUserDelete, type TweetDelete } from './types'

export type TodoPayload = TodoUser | TodoUserDelete | TodoModel[]

export type TweetPayload = TweetModel | TweetDelete | TweetModel[]
