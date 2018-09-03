<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm8 md6 lg4 xl3>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Signup form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" class="data" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              prepend-icon="email"
              name="email"
              label="Email"
              type="email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              :rules="[checkPassword]"
            ></v-text-field>
            <v-text-field
              v-model="repeatPassword"
              id="repeatPassword"
              prepend-icon="lock"
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              :rules="[checkPassword]"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="authenticate" color="primary">Signup</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    layout: 'public',
    data: () => ({
      email: '',
      password: '',
      repeatPassword: '',
      valid: true
    }),
    computed: {
      checkPassword () {
        return (this.password === this.repeatPassword && !!this.password) || 'Пароли не совпадают'
      }
    },
    methods: {
      async authenticate () {
        if (this.$refs.form.validate()) {
          let answer = await this.signup({email: this.email, password: this.password})
          if (answer) {
            this.$router.push({name: 'index'})
          }
        }
      },
      ...mapActions({
        signup: 'user/signup'
      })
    }
  }
</script>