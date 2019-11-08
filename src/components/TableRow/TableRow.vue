<template>
  <tr>
    <th scope="row">{{ index+1 }}</th>
    <td>{{ todo.desc }}</td>
    <td>{{ showStatus(todo.status) }}</td>
    <td>
      <TodoButtons />
    </td>
  </tr>
</template>

<script src="./TableRow.js"></script>
