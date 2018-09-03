<template>
  <v-list-tile
    :to="{ name: 'employees-id', params: { id: profile.id } }"
    avatar
  >
    <v-list-tile-avatar>
      <img v-if="profile.avatar" :src="profile.avatar">
      <img v-else src="~/assets/images/no-avatar.png">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="profile.name"></v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      profile: Object
    }
  }
</script>

<style lang="sass">
</style>
