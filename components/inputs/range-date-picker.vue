<template>
  <v-picker
    v-if="!disabled"
    mode="range"
    :value="value"
    @input="saveInput"
    is-double-paned
    popover-align="right"
  >
    <v-chip slot-scope="props">
      <v-avatar class="accent"><v-icon small>calendar_today</v-icon></v-avatar>
      <template v-if="props.inputValue">
        {{ props.inputValue }}
      </template>
      <template v-else>Назначить дату</template>
    </v-chip>
  </v-picker>
  <v-chip v-else>
    <v-avatar class="accent"><v-icon small>calendar_today</v-icon></v-avatar>
    <template v-if="value.start || value.end">
      {{ value.start| moment('DD.MM.YYYY') }}
      -
      {{ value.end | moment('DD.MM.YYYY') }}
    </template>
    <template v-else>Назначить дату</template>
  </v-chip>
</template>

<script>
  import { setupCalendar, DatePicker } from 'v-calendar'
  import 'v-calendar/lib/v-calendar.min.css'

  import InputMixin from '~/utils/mixins/input-mixin'

  setupCalendar({
    firstDayOfWeek: 2,
    locale: 'ru-RU'
  })

  export default {
    mixins: [ InputMixin ],
    components: {
      'v-picker': DatePicker
    },
    props: {
      value: {
        type: Object
      }
    }
  }
</script>