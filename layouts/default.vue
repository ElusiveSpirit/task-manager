<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      v-model="sidebar"
      fixed
      app
      color="primary"
      dark
      :clipped="false"
    >
      <v-toolbar @click.native="$router.push({ name: 'profile' })" class="profile-toolbar">
        <v-avatar
          :size="46"
          color="grey lighten-4"
        >
          <img src="~/assets/images/no-avatar.png" alt="avatar">
        </v-avatar>
        <v-toolbar-title>{{ email }}</v-toolbar-title>
      </v-toolbar>
      <v-list dark>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon color="white" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark>
      <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn slot="activator" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile :to="{ name: 'settings' }" nuxt
          ><v-list-tile-title>Настройки</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            @click="logout"
          ><v-list-tile-title>Выйти</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fill-height class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    middleware: 'authenticated',
    data: () => ({
      items: [
        { icon: 'apps', title: 'Главная', to: { name: 'index' } },
        { icon: 'check', title: 'Задачи', to: { name: 'tasks' } }
      ],
      title: 'Balanced Business'
    }),
    computed: {
      sidebar: {
        set (v) {
          this.$store.commit('setSidebar', v)
        },
        get () {
          return this.$store.state.sidebar
        }
      },
      miniVariant: {
        set (v) {
          this.$store.commit('setMiniVariant', v)
        },
        get () {
          return this.$store.state.miniVariant
        }
      },
      ...mapState({
        email: state => state.user.email
      })
    },
    methods: {
      async logout () {
        await this.$store.dispatch('user/logout')
      }
    },
    watch: {
      '$store.state.user.id' (val) {
        // Go to login page when user logged out
        if (!val) {
          this.$router.push({ name: 'login' })
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .profile-toolbar
    cursor: pointer
</style>