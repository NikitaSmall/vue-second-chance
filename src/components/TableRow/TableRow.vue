<template>
  <tr>
    <th scope="row">{{ index }}</th>
    <td>{{ todo.desc }}</td>
    <td>{{ todo.status }}</td>
    <td>
      <TodoButtons />
    </td>
  </tr>
</template>

<script src="./TableRow.js"></script>
