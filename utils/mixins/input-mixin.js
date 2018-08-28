export default {
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    editing: false
  }),
  methods: {
    saveInput (value) {
      this.$emit('input', value)
    }
  }
}
