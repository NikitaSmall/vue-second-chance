import Repository from './BaseRepo'

export default {
  list () {
    return Repository.post(`/graphql`, {
      query: '{ todos { id, desc, status } }'
    })
  },
  addTodo (desc) {
    return Repository.post(`/graphql`, {
      query: `mutation add { add (desc: "${desc}") { id, desc, status } }`
    })
  },
  removeTodo (id) {
    return Repository.post(`/graphql`, {
      query: `mutation remove { remove (id: ${id}) { id, desc, status } }`
    })
  },
  changeStatus (id) {
    return Repository.post(`/graphql`, {
      query: `mutation update { update (id: ${id}) { id, desc, status } }`
    })
  }
}
