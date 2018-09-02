import { Model } from '@vuex-orm/core'

import Profile from './Profile'

export default class Task extends Model {
  static entity = 'tasks'

  static fields () {
    return {
      id: this.attr(null),
      author: this.belongsTo(Profile, 'profile_id'),
      assigned: this.belongsTo(Profile, 'profile_id'),
      name: this.string(''),
      type: this.string(''),
      metric: this.string(''),
      dateStart: this.string(''),
      dateEnd: this.string(''),
      plan: this.number(0),
      status: this.string('')
    }
  }
}
