<template>
  <v-list two-line>
    <v-list-tile
      v-for="item in employeeTasks"
      :key="item.title"
      avatar
      @click=""
    >
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.dateStart + '-' + item.dateEnd }}</v-list-tile-sub-title>
      </v-list-tile-content>

      <task-status :status="item.status"></task-status>
    </v-list-tile>
  </v-list>
</template>

<script>
  import TaskStatus from '../tasks/task-status'

  export default {
    components: {
      TaskStatus
    },
    props: {
      profile: Object
    },
    computed: {
      employeeTasks () {
        return [
          {
            title: 'Задача 1',
            dateStart: '4-09-2018',
            dateEnd: '10-09-2018',
            status: 'bad'
          },
          {
            title: 'Задача 2',
            dateStart: '4-09-2018',
            dateEnd: '10-09-2018',
            status: 'good'
          },
          {
            title: 'Задача 3',
            dateStart: '4-09-2018',
            dateEnd: '10-09-2018',
            status: 'ok'
          }
        ]
      }
    }
  }
</script>

<style lang="sass">
</style>
