<template>
  <v-layout wrap justify-center>
    <v-flex v-show="showTaskList" sm12 md6>
      <v-container fluid fill-height class="container-mobile-flat">
        <v-layout fill-height>
            <v-card class="container-max-width">
              <v-list
                v-for="(type, index) of tasksTypes"
                :key="index"
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
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex v-show="showDetailTask" sm12 md6>
      <v-container fluid fill-height class="container-mobile-flat">
        <v-layout fill-height>
          <nuxt-child :key="$route.params.id" class="container-max-width" />
        </v-layout>
      </v-container>
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
      showTaskList () {
        return this.$route.name === 'tasks' || this.$vuetify.breakpoint.mdAndUp
      },
      showDetailTask () {
        return this.$route.name !== 'tasks' || this.$vuetify.breakpoint.mdAndUp
      },
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
