import TodoControls from '../TodoControls/TodoControls.vue'
import TodoTable from '../TodoTable/TodoTable.vue'

import { SET_TODO_LIST_ACTION } from '../../store/actions'

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
  },
  mounted () {
    this.$store.dispatch(SET_TODO_LIST_ACTION)
  }
}
