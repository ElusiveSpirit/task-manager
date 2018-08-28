<template>
  <v-autocomplete
    :value="value"
    @input="saveInput"
    :disabled="disabled"
    :items="users"
    single-line
    hide-details
    chips
    label="+ Добавить исполнителя"
    item-text="name"
    item-value="name"
  >
    <template
      slot="selection"
      slot-scope="data"
    >
      <v-chip
        :selected="data.selected"
        close
        class="chip--select-multi"
        @input="data.parent.selectItem(data.item)"
      >
        <v-avatar>
          <img v-if="data.item.avatar" :src="data.item.avatar">
          <img v-else src="~/assets/images/no-avatar.png">
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>
    <template
      slot="item"
      slot-scope="data"
    >
      <template v-if="typeof data.item !== 'object'">
        <v-list-tile-content v-text="data.item"></v-list-tile-content>
      </template>
      <template v-else>
        <v-list-tile-avatar>
          <img v-if="data.item.avatar" :src="data.item.avatar">
          <img v-else src="~/assets/images/no-avatar.png">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
  import InputMixin from '~/utils/mixins/input-mixin'

  export default {
    name: 'user-input',
    mixins: [ InputMixin ],
    props: {
      users: {
        type: Array
      }
    }
  }
</script>
