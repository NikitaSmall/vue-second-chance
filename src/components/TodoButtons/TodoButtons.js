export default {
  name: 'TodoButtons',
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    complete: function (event) {
      event.preventDefault()

      this.todo.status = true
    },
    remove: function (event) {
      event.preventDefault()

      this.$root.$emit('removeTodo', this.index)
    }
  }
}
