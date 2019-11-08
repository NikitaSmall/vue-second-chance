<template>
  <form class="form-inline">
    <h2>Todo controls</h2>
    <label class="sr-only" for="todo-desc">Todo desc</label>
    <input type="text"
           class="form-control mb-2 mr-sm-2"
           id="todo-desc"
           placeholder="Buy some milk"
           v-model="desc">

    <button type="submit"
            class="btn btn-primary mb-2"
            v-on:click="addTodo">Add</button>
  </form>
</template>

<script src="./TodoControls.js"></script>
