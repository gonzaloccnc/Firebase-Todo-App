import { type QuerySnapshot, collection, getDocs, deleteDoc, doc, setDoc, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'
import { type TweetFirebase, type DocumentFirebase, type UserDocument } from '../../utils/types'

const getUser = async (email: string): Promise<{ id: null | string }> => {
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

const createUser = async (values: UserDocument): Promise<void> => {
  await setDoc(doc(db, 'users', values.id), {
    email: values.email,
    nombre: values.nombre,
    edad: values.edad
  })
}

const addDocument = async (userid: string, todoValues: DocumentFirebase): Promise<void> => {
  await setDoc(doc(db, 'users', userid, 'todos', todoValues.id), {
    todo: todoValues.todo,
    important: todoValues.important
  })
}

const getDocuments = async (userid: string): Promise<QuerySnapshot<DocumentFirebase>> => {
  return await getDocs(collection(db, 'users', userid, 'todos')) as QuerySnapshot<DocumentFirebase>
}

const updateDocument = async (userid: string, todoValues: DocumentFirebase): Promise<void> => {
  await setDoc(doc(db, 'users', userid, 'todos', todoValues.id), {
    todo: todoValues.todo,
    important: todoValues.important
  })
}

const deleteDocument = async (userid: string, todoid: string): Promise<void> => {
  await deleteDoc(doc(db, 'users', userid, 'todos', todoid))
}

const getTwets = async (): Promise<QuerySnapshot<TweetFirebase>> => {
  return await getDocs(collection(db, 'tweets')) as QuerySnapshot<TweetFirebase>
}

const addTweet = async (tweet: TweetFirebase): Promise<void> => {
  await setDoc(doc(db, 'tweets', tweet.id), {
    date: tweet.date,
    domain: tweet.domain,
    likes: tweet.likes,
    logo: tweet.logo,
    user: tweet.user,
    value: tweet.value
  })
}

export {
  addDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
  getUser,
  createUser,
  getTwets,
  addTweet
}
