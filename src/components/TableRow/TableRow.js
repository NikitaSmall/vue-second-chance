import TodoButtons from '../TodoButtons/TodoButtons.vue'

export default {
  name: 'TableRow',
  components: {
    TodoButtons
  },
  props: {
    index: Number,
    todo: Object
  }
}
