import VuexORM from '@vuex-orm/core'
// import VuexORMGraphQL from '@vuex-orm/plugin-graphql'

import {
  User,
  Email,
  Profile,
  Account,
  Task
} from '~/models'

export const database = new VuexORM.Database()

database.register(User, {})
database.register(Email, {})
database.register(Profile, {})
database.register(Account, {})
database.register(Task, {})

// const options = {
//   database,
//   debug: process.env.NODE_ENV !== 'production',
//   url: 'http://192.168.1.187:8800/graphql/',
//   connectionQueryMode: 'plain'
// }
// VuexORM.use(VuexORMGraphQL, options)

export default ({store}) => {
  VuexORM.install(database)(store)
}
