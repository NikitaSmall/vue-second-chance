import TableRow from '../TableRow/TableRow.vue'

export default {
  name: 'TodoTable',
  components: {
    TableRow
  },
  props: {
    todos: Array
  }
}
