<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md8>
      Hello {{ $store.state.user.email }}
    </v-flex>
  </v-layout>
</template>
