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

      this.todos.push(todo)
      this.desc = ''
    }
  }
}
