import { REMOVE_TODO_ACTION, COMPLETE_TODO_ACTION } from '../../store/actions'

export default {
  name: 'TodoButtons',
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    complete: function (event) {
      event.preventDefault()
      this.$store.dispatch(COMPLETE_TODO_ACTION, this.index)
    },
    remove: function (event) {
      event.preventDefault()
      this.$store.dispatch(REMOVE_TODO_ACTION, this.index)
    }
  }
}
