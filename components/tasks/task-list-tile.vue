<template>
  <v-list-tile
    avatar
    :to="{ name: 'tasks-id', params: { id } }"
    class="task-list-tile"
  >
    <v-list-tile-avatar>
      <v-icon v-if="!assigned.name">person_add</v-icon>
      <img v-else-if="assigned.avatar" :src="assigned.avatar">
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

<style lang="sass">
  .task-list-tile
    &.active
      .v-list__tile--link
        background: rgba(0, 0, 0, .04)
</style>
