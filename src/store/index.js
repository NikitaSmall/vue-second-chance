import Vue from 'vue'
import Vuex from 'vuex'

import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from './mutations'
import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, COMPLETE_TODO_ACTION } from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    [ADD_TODO] (state, todo) {
      state.todos.push(todo)
    },
    [REMOVE_TODO] (state, index) {
      state.todos.splice(index, 1)
    },
    [COMPLETE_TODO] (state, index) {
      state.todos[index].status = true
    }
  },
  actions: {
    [ADD_TODO_ACTION] (context, todo) {
      context.commit(ADD_TODO, todo)
    },
    [REMOVE_TODO_ACTION] (context, index) {
      context.commit(REMOVE_TODO, index)
    },
    [COMPLETE_TODO_ACTION] (context, index) {
      context.commit(COMPLETE_TODO, index)
    }
  }
})

export default store
