<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    middleware: 'not-authenticated-only',
    data: () => ({
    })
  }
</script>
