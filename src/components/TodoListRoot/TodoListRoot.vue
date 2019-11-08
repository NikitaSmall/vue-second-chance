<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <TodoControls v-bind:todos="todos" />
        </div>
        <div class="col-md-6">
          <TodoTable v-bind:todos="todos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TodoListRoot.js"></script>
<style src="./TodoListRoot.css"></style>
