import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'

import User from '~/models/User'
import Email from '~/models/Email'
import users from '~/store/users'

export const database = new VuexORM.Database()

database.register(User, users)
database.register(Email, {})

const options = {
  database,
  debug: process.env.NODE_ENV !== 'production',
  url: 'http://192.168.1.187:8800/graphql/',
  connectionQueryMode: 'edges'
  // credentials: 'allow-all'
}
VuexORM.use(VuexORMGraphQL, options)

export default ({store}) => {
  VuexORM.install(database)(store)
}
