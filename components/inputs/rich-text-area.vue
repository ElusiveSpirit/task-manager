<template>
  <quill-editor
    :value="value"
    ref="editor"
    @focus="setActive(true)"
    @blur="setActive(false)"
    @ready="updateEditorEnabled"
    @change="saveInput"
    :class="{ active: editorActive }"
  ></quill-editor>
</template>

<script>
  import InputMixin from '~/utils/mixins/input-mixin'

  export default {
    name: 'rich-text-area',
    mixins: [ InputMixin ],
    data: () => ({
      editorActive: false
    }),
    computed: {
      editor () {
        return this.$refs.editor.quill
      }
    },
    methods: {
      updateEditorEnabled () {
        const isEnabled = this.editable && !this.loading
        this.editor.enable(isEnabled)
      },
      saveInput ({ html }) {
        this.$emit('input', html)
      },
      setActive (value) {
        if (this.editable) {
          this.editorActive = value
        }
      }
    },
    watch: {
      editable () { this.updateEditorEnabled() },
      loading () { this.updateEditorEnabled() }
    }
  }
</script>

<style lang="sass">
  .quill-editor
    min-height: 200px
    display: flex
    flex-direction: column
    transition: min-height .5s ease

    .ql-toolbar.ql-snow
      opacity: 0
      visibility: hidden
      margin-top: -40px
      transition: margin .5s ease, opacity .5s ease

      border: none
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)
    .ql-container.ql-snow
      border-right: none
      border-left: none
      border-bottom: 1px solid white
      .ql-editor
        transition: border .5s ease
        &:hover, &:focus
          border-bottom: 1px solid gray

    &.active
      min-height: 240px
      .ql-toolbar.ql-snow
        opacity: 1
        margin: 0
        visibility: visible
</style>