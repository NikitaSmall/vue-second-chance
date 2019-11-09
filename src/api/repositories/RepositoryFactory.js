import TodoRepository from './TodoRepository'

const repositories = {
  todo: TodoRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
