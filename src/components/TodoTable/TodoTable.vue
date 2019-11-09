<template>
  <table class="table table-hover">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo desc</th>
      <th scope="col">Done</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <TableRow
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:index="todo.id"
      v-bind:todo="todo"
    />
  </tbody>
</table>
</template>

<script src="./TodoTable.js"></script>
