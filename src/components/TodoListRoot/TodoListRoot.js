import TodoControls from '../TodoControls/TodoControls.vue'
import TodoTable from '../TodoTable/TodoTable.vue'

export default {
  name: 'TodoListRoot',
  components: {
    TodoControls,
    TodoTable
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
