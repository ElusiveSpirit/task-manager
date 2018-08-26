<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm8 md6 lg4 xl3>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
            <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="authenticate" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    layout: 'public',
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      async authenticate () {
        try {
          await this.$store.dispatch('user/authenticate', { email: this.email })
          this.$router.push({ name: 'index' })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>