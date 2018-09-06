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
          <croppa v-model="myCroppa"></croppa>
          <v-text-field
            label="Имя, Фамилия"
            :value="employee.name"
            single-line
            hide-details
            class="headline"
          ></v-text-field>
          <v-text-field
            label="Email"
            :value="employee.email"
            single-line
          ></v-text-field>
          <v-select
            :value="employee.role"
            :items="roles"
            label="Роль"
          ></v-select>
          <v-text-field
            label="Должность"
            :value="employee.post"
            single-line
          ></v-text-field>

          <v-text-field
            label="Старый пароль"
            v-model="oldPassword"
            type="password"
            single-line
          ></v-text-field>
          <v-text-field
            label="Новый пароль"
            v-model="newPassword"
            type="password"
            single-line
          ></v-text-field>
          <v-text-field
            label="Повторите новый пароль"
            v-model="repeatNewPassword"
            type="password"
            single-line
          ></v-text-field>
          <v-btn
            class="change-password-btn"
            :disabled="!checkMatchPassword"
            color="grey lighten-3"
            depressed
            @click="changePassword"
          >
            Изменить пароль
          </v-btn>
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
  import { ROLES } from '~/store/employees'
  import { mapState, mapActions } from 'vuex'
  import EmployeeTasks from '~/components/employees/employee-tasks'

  export default {
    components: {
      EmployeeTasks
    },
    data: () => ({
      roles: ROLES,
      employee: {},
      selected: '',
      autoUpdate: true,
      isUpdating: false,
      myCroppa: {},
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: ''
    }),
    computed: {
      checkMatchPassword () {
        return this.newPassword === this.repeatNewPassword
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
      uploadCroppedImage () {
        this.myCroppa.generateBlob((blob) => {
          // write code to upload the cropped image file (a file is a blob)
        }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      },
      changePassword () {
        console.log('Пароль изменен')
      },
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
    .change-password-btn
      width: 200px
      margin: auto
</style>
