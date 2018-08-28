<template>
  <v-card>
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
      <v-container v-if="Object.keys(task).length > 0">
        <v-layout column>
          <v-text-field
            label="Название задачи"
            :value="task.name"
            single-line
            hide-details
            class="headline"
          ></v-text-field>
          <v-layout space-between align-center row class="my-3">
            <user-input
              :value="null"
              :users="users"
              :disabled="false"
            ></user-input>
            <range-date-picker
              :value="{ start: task.dateStart, end: task.dateEnd }"
              :disabled="false"
            ></range-date-picker>
          </v-layout>
          <v-layout row>
            <rich-text-area
              v-model="description"
              :disabled="false"
            ></rich-text-area>
          </v-layout>
          <v-layout column class="my-2 task-metrics">
            <v-flex>
              <h3 class="title">Метрика</h3>
              <v-select
                v-model="metricType"
                :hint="metricType.info"
                :items="metricTypes"
                item-text="name"
                item-value="slug"
                label="Выберите тип"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-flex>
            <v-flex v-if="metricType.slug === 'automatic'">
              <h3 class="title">Настройки автоматической метрики</h3>
              <p class="subtitle">Введите формулу для расчёта</p>

            </v-flex>
          </v-layout>
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
  import RichTextArea from '~/components/inputs/rich-text-area'
  import RangeDatePicker from '~/components/inputs/range-date-picker'
  import UserInput from '~/components/inputs/user-input'

  export default {
    components: {
      UserInput,
      RichTextArea,
      RangeDatePicker
    },
    data: () => ({
      task: {},
      metricType: {},
      selected: '',
      autoUpdate: true,
      isUpdating: false,
      users: [
        { name: 'Sandra Adams', avatar: '' },
        { name: 'Ali Connors', avatar: '' }
      ],
      metricTypes: [
        {
          slug: 'manual',
          name: 'Ручная',
          info: 'Ручной ввод ежедневной метрики'
        },
        {
          slug: 'automatic',
          name: 'Автоматическая',
          info: 'Автоматический сбор метрики по формуле'
        }
      ]
    }),
    computed: {
      description: {
        get () {
          return this.task.description
        },
        set (v) {
          console.log(v)
        }
      }
    },
    async mounted () {
      try {
        const task = await this.$store.dispatch('tasks/fetchTask', {
          id: this.$route.params.id
        })
        this.task = task || {}
      } catch (e) {
        this.$nuxt.error({ statusCode: 404, message: 'Задача не найдена' })
      }
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

<style lang="sass" scoped>
  .task-metrics
    .flex
      margin: 10px 0
</style>