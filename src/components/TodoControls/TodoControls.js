import { ADD_TODO_ACTION } from '../../store/actions'

export default {
  name: 'TodoControls',
  props: {
    todos: Array
  },
  data: function () {
    return {
      desc: ''
    }
  },
  methods: {
    addTodo: function (event) {
      event.preventDefault()

      let todo = {
        desc: this.desc,
        status: false
      }

      this.$store.dispatch(ADD_TODO_ACTION, todo)
      this.desc = ''
    }
  }
}
