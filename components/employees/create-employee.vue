<template>
  <v-list-tile
    avatar
    @click.native="enterEditMode"
    color="gray"
  >
    <v-list-tile-avatar v-if="!editMode" class="active-field">
      <v-icon>add</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-action-text v-if="editMode">
        <v-text-field
            @blur="blur"
            @keydown.enter="addEmployee"
            @keydown.esc="leaveEditMode"
            v-model="employeeName"
        ></v-text-field>
      </v-list-tile-action-text>
      <v-list-tile-title v-else>
        Добавить работника
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-avatar v-if="editMode" @click.native.stop="addEmployee" class="enter-btn">
      <v-icon>subdirectory_arrow_left</v-icon>
    </v-list-tile-avatar>
  </v-list-tile>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'create-employee',
    props: {
      taskType: {
        type: String
      }
    },
    data: () => ({
      editMode: false,
      employeeName: ''
    }),
    methods: {
      blur () {
        if (this.employeeName.length === 0) {
          this.leaveEditMode()
        }
      },
      leaveEditMode () {
        this.editMode = false
      },
      enterEditMode () {
        this.editMode = true
        this.$nextTick(() => {
          this.$el.querySelector('input').focus()
        })
      },
      async addEmployee () {
        await this.add({
          name: this.employeeName
        })
        this.employeeName = ''
        this.editMode = false
      },
      ...mapActions({
        add: 'employees/addEmployee'
      })
    }
  }
</script>

<style lang="sass" scoped>
  .v-list__tile__title
    color: gray

  .v-list__tile__action-text
    width: 100%
  
  .enter-btn, .active-field
    cursor: pointer
</style>