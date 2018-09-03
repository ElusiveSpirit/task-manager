<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      v-model="sidebar"
      fixed
      app
      dark
      hide-overlay
      :clipped="false"
    >
      <v-toolbar @click.native="$router.push({ name: 'profile' })" flat class="profile-toolbar">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="~/assets/images/no-avatar.png" alt="avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ email }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="miniVariant = !miniVariant"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dark dense>
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
      <v-container fluid fill-height class="pa-0">
        <v-layout wrap justify-center>
          <v-flex v-show="showList" sm12 md6>
            <v-container fluid fill-height class="container-mobile-flat container-mobile-flat_first">
              <v-layout fill-height>
                <v-card class="container-max-width">
                  <nuxt />
                </v-card>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex v-show="showDetail" sm12 md6>
            <v-container fluid fill-height class="container-mobile-flat">
              <v-layout fill-height>
                <v-card class="container-max-width">
                  <nuxt-child :key="$route.params.id" class="container-max-width" />
                </v-card>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Default from './default'

  export default {
    extends: Default,
    computed: {
      showList () {
        return this.$route.name.includes('-id') || this.$vuetify.breakpoint.mdAndUp
      },
      showDetail () {
        return !this.$route.name.includes('-id') || this.$vuetify.breakpoint.mdAndUp
      }
    }
  }
</script>

<style lang="sass">
  .container.container-mobile-flat_first
    padding-right: 0
</style>
