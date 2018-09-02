import { Model } from '@vuex-orm/core'

import Profile from './Profile'

export default class Account extends Model {
  static entity = 'accounts'

  static fields () {
    return {
      id: this.attr(null),
      companyName: this.string(''),
      profiles: this.hasMany(Profile, 'account_id')
    }
  }
}
