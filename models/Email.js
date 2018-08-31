import { Model } from '@vuex-orm/core'

import User from './User'

export default class Email extends Model {
  static entity = 'emails'

  static fields () {
    return {
      id: this.attr(null),
      author: this.belongsTo(User, 'user_id'),
      email: this.attr(''),
      verified: this.attr(false),
      primary: this.attr(false)
    }
  }
}
