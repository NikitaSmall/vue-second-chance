import TodoControls from '../TodoControls/TodoControls.vue'
import TodoTable from '../TodoTable/TodoTable.vue'

export default {
  name: 'TodoListRoot',
  components: {
    TodoControls,
    TodoTable
  },
  data: function () {
    return {
      todos: []
    }
  },
  mounted () {
    this.$root.$on('removeTodo', (index) => {
      this.todos.splice(index, 1)
    })
  }
}
