<template>
  <v-list-tile-action>
    <v-btn icon ripple>
      <v-icon :color="taskStatusColor">{{ taskStatusIcon }}</v-icon>
    </v-btn>
  </v-list-tile-action>
</template>

<script>
  import { TASK_STATUS_ICON } from '~/store/tasks'

  export default {
    props: {
      status: String
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
</style>
