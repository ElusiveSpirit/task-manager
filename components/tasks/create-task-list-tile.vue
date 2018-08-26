<template>
  <v-list-tile
    avatar
    @click.native="enterEditMode"
    color="gray"
  >
    <v-list-tile-avatar>
      <v-icon v-if="editMode" @click.native.stop="addTask">check</v-icon>
      <v-icon v-else>add</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-action-text v-if="editMode">
        <v-text-field
            @blur="blur"
            @keydown.enter="addTask"
            @keydown.esc="leaveEditMode"
            v-model="taskName"
        ></v-text-field>
      </v-list-tile-action-text>
      <v-list-tile-title v-else>
        Добавить задачу
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'create-task-list-tile',
    props: {
      taskType: {
        type: String
      }
    },
    data: () => ({
      editMode: false,
      taskName: ''
    }),
    methods: {
      blur () {
        if (this.taskName.length === 0) {
          this.leaveEditMode()
        }
      },
      leaveEditMode () {
        this.editMode = false
      },
      enterEditMode () {
        this.editMode = true
        this.$nextTick(() => {
          this.$el.querySelector('input').focus()
        })
      },
      async addTask () {
        await this.$store.dispatch('tasks/addTask', {
          type: this.taskType,
          name: this.taskName
        })
        this.editMode = false
      }
    }
  }
</script>

<style lang="sass" scoped>
  .v-list__tile__title
    color: gray

  .v-list__tile__action-text
    width: 100%
</style>