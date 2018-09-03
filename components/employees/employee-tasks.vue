<template>
  <v-list two-line>
    <v-list-tile
      v-for="item in employeeTasks"
      :key="item.title"
      avatar
      @click=""
    >
      <v-list-tile-avatar>
        <v-icon>event_note</v-icon>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">info</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    props: {
      profile: Object
    },
    computed: {
      employeeTasks () {
        return [
          {
            title: 'Задача 1',
            description: 'Описание задачи 1'
          },
          {
            title: 'Задача 2',
            description: 'Описание задачи 2'
          },
          {
            title: 'Задача 3',
            description: 'Описание задачи 3'
          }
        ]
      }
    }
  }
</script>

<style lang="sass">
</style>
