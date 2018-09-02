import { Model } from '@vuex-orm/core'

import User from './User'
import Account from './Account'
import Task from './Task'

export default class Profile extends Model {
  static entity = 'profiles'

  static fields () {
    return {
      id: this.attr(null),
      user: this.belongsTo(User, 'user_id'),
      account: this.belongsTo(Account, 'account_id'),
      tasks: this.hasMany(Task, 'profile_id'),
      role: this.string('')
    }
  }
}
