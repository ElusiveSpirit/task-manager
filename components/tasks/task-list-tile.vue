<template>
  <v-list-tile
    avatar
    @click=""
  >
    <v-list-tile-avatar>
          <img v-if="assigned.avatar" :src="assigned.avatar">
          <img v-else src="~/assets/images/no-avatar.png">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        {{ assigned.name }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn icon ripple>
        <v-icon :color="taskStatusColor">{{ taskStatusIcon }}</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  import { TASK_STATUS_ICON } from '~/store/tasks'

  export default {
    props: {
      id: { type: String },
      name: { type: String },
      assigned: { type: Object, default: {} },
      status: { type: String }
    },
    computed: {
      taskStatusIcon () {
        return TASK_STATUS_ICON[this.status].icon
      },
      taskStatusColor () {
        return TASK_STATUS_ICON[this.status].color
      }
    }
  }
</script>