<template>
  <tr>
    <th scope="row">{{ index+1 }}</th>
    <td>{{ todo.desc }}</td>
    <td>{{ showStatus(todo.status) }}</td>
    <td>
      <TodoButtons v-bind:todo="todo" v-bind:index="index" />
    </td>
  </tr>
</template>

<script src="./TableRow.js"></script>
