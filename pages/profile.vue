<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md8>
      User email: {{ $store.state.user.email }}
      <v-btn
          @click="go"
      >
        GO
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import User from '~/models/User'
  // import Email from '~/models/Email'

  export default {
    async mounted () {
      // const user = await User.create({
      //   id: 10,
      //   username: 'TESTETSTETS'
      // })
      // console.log(user)
    },
    methods: {
      async go () {
        console.log(await User.fetch({ username: '42.zip' }))
        // console.log(await Email.fetch())
      }
    }
  }
</script>
