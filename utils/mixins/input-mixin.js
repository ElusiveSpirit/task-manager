export default {
  props: {
    value: {
      type: String
    },
    editable: {
      type: Boolean,
      default: true
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
