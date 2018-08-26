<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8>
      <v-card>
        <v-list
          v-for="(type, index) of tasksTypes"
          two-line
          subheader
        >
          <v-subheader>{{ type.name }}</v-subheader>
          <create-task-list-tile
            :taskType="type.type"
          ></create-task-list-tile>
          <task-list-tile
            v-for="task in type.list"
            :key="task.id"
            :id="task.id"
            :name="task.name"
            :assigned="task.assigned"
            :status="task.status"
          ></task-list-tile>

          <v-divider v-if="index !== tasksTypes.length - 1"></v-divider>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'

  import { TYPE_FINANCE, TYPE_CLIENTS, TYPE_PROCESS, TYPE_TEAM } from '~/store/tasks'

  import TaskListTile from '~/components/tasks/task-list-tile'
  import CreateTaskListTile from '~/components/tasks/create-task-list-tile'

  export default {
    name: 'tasks',
    components: {
      TaskListTile,
      CreateTaskListTile
    },
    computed: {
      tasksTypes () {
        return [
          {
            name: 'Финансовые задачи',
            type: TYPE_FINANCE,
            list: this.financeTasks
          },
          {
            name: 'Клиентские задачи',
            type: TYPE_CLIENTS,
            list: this.clientsTasks
          },
          {
            name: 'Процессные задачи',
            type: TYPE_PROCESS,
            list: this.processTasks
          },
          {
            name: 'Командные задачи',
            type: TYPE_TEAM,
            list: this.teamTasks
          }
        ]
      },
      ...mapGetters('tasks', [
        'financeTasks',
        'clientsTasks',
        'processTasks',
        'teamTasks'
      ])
    },
    async mounted () {
      await this.$store.dispatch('tasks/fetchAll')
    }
  }
</script>

<style scoped>

</style>