<template>
  <v-list subheader>
    <v-subheader>Recent chat</v-subheader>
    <v-list-tile
      v-for="profile in profiles"
      :key="profile.title"
      avatar
      @click=""
    >
      <v-list-tile-avatar>
        <img :src="profile.avatar">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="profile.title"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon :color="profile.active ? 'teal' : 'grey'">chat_bubble</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    layout: 'double-pane',
    computed: {
      profiles: []
    }
  }
</script>
