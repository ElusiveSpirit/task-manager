import { Model } from '@vuex-orm/core'

import Profile from './Profile'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.attr(null),
      username: this.string(''),
      email: this.string(''),
      firstName: this.string(''),
      lastName: this.string(''),
      profiles: this.hasMany(Profile, 'user_id')
    }
  }
}
