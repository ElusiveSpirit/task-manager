<template>
  <v-card class="user-profile">
    <v-layout wrap>
      <v-flex xs12>
        <v-progress-linear
          :active="isUpdating"
          class="ma-0"
          color="green lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-form>
      <v-container v-if="Object.keys(employee).length > 0">
        <v-layout column>
          <v-text-field
            label="Имя, Фамилия"
            :value="employee.name"
            single-line
            hide-details
            class="headline"
          ></v-text-field>
          <v-text-field
            label="Должность"
            :value="employee.post"
            single-line
          ></v-text-field>
          <v-flex>
            <h3 class="title">Задачи</h3>
            <employee-tasks></employee-tasks>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0"
        color="green lighten-2"
        hide-details
        label="Авто Обновление"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        color="grey lighten-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>mdi-update</v-icon>
        Обновить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import EmployeeTasks from '~/components/employees/employee-tasks'

  export default {
    components: {
      EmployeeTasks
    },
    data: () => ({
      employee: {},
      selected: '',
      autoUpdate: true,
      isUpdating: false
    }),
    computed: {
      description: {
        get () {
          return this.employee.description
        },
        set (v) {
          console.log(v)
        }
      },
      ...mapState({
        email: state => state.user.email
      })
    },
    async mounted () {
      try {
        const employee = await this.fetchEmployee({ id: 1 })
        this.employee = employee || {}
      } catch (e) {
        this.$nuxt.error({ statusCode: 404, message: 'Задача не найдена' })
      }
    },
    methods: {
      ...mapActions({
        fetchEmployee: 'employees/fetchEmployee'
      })
    },
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      }
    }
  }
</script>

<style lang="sass">
  .user-profile
    width: 80%
    margin: auto
    margin-top: 40px
</style>
