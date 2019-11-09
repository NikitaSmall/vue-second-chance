import Vue from 'vue'
import Vuex from 'vuex'

import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, LOAD_START, LOAD_STOP, SET_TODO_LIST } from './mutations'
import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, COMPLETE_TODO_ACTION, SET_TODO_LIST_ACTION } from './actions'

import { RepositoryFactory } from '../api/repositories/RepositoryFactory'
const TodoRepository = RepositoryFactory.get('todo')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    loading: false
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
    },
    [SET_TODO_LIST] (state, todos) {
      state.todos = todos
    },
    [LOAD_START] (state) {
      state.loading = true
    },
    [LOAD_STOP] (state) {
      state.loading = false
    }
  },
  actions: {
    async [SET_TODO_LIST_ACTION] (context) {
      context.commit(LOAD_START)
      const { data } = await TodoRepository.list()
      context.commit(LOAD_STOP)

      context.commit(SET_TODO_LIST, data.data.todos)
    },
    async [ADD_TODO_ACTION] (context, todo) {
      try {
        context.commit(LOAD_START)
        const { data } = await TodoRepository.addTodo(todo.desc)
        context.commit(LOAD_STOP)

        context.commit(SET_TODO_LIST, data.data.add)
      } catch (e) {
        window.console.log(e)
      }
    },
    async [REMOVE_TODO_ACTION] (context, index) {
      try {
        context.commit(LOAD_START)
        const { data } = await TodoRepository.removeTodo(index)
        context.commit(LOAD_STOP)

        context.commit(SET_TODO_LIST, data.data.remove)
      } catch (e) {
        window.console.log(e)
      }
    },
    async [COMPLETE_TODO_ACTION] (context, index) {
      try {
        context.commit(LOAD_START)
        const { data } = await TodoRepository.changeStatus(index)
        context.commit(LOAD_STOP)

        context.commit(SET_TODO_LIST, data.data.update)
      } catch (e) {
        window.console.log(e)
      }
    }
  }
})

export default store
