<template>
  <v-layout wrap justify-center>
    <v-flex v-show="showEmployeesList" sm12 md6>
      <v-container fluid fill-height class="container-mobile-flat">
        <v-layout fill-height>
          <v-card class="container-max-width">
            <v-list subheader>
              <v-subheader>Список сотрудников</v-subheader>
              <create-employee></create-employee>
              <employee-tile
                v-for="profile in profiles"
                :key="profile.name"
                :profile="profile"
              ></employee-tile>
            </v-list>
          </v-card>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex v-show="showDetailEmployee" sm12 md6>
      <v-container fluid fill-height class="container-mobile-flat">
        <v-layout fill-height>
          <nuxt-child :key="$route.params.id" class="container-max-width" />
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'
  import EmployeeTile from '~/components/employees/employee-tile'
  import CreateEmployee from '~/components/employees/create-employee'

  export default {
    name: 'employees',
    components: {
      EmployeeTile,
      CreateEmployee
    },
    computed: {
      profiles () {
        return this.employees
      },
      showEmployeesList () {
        return this.$route.name === 'employees' || this.$vuetify.breakpoint.mdAndUp
      },
      showDetailEmployee () {
        return this.$route.name !== 'employees' || this.$vuetify.breakpoint.mdAndUp
      },
      ...mapState({
        employees: state => state.employees.list
      })
    }
  }
</script>

<style scoped>

</style>