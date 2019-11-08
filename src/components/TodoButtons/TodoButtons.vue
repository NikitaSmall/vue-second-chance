<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <button type="button"
              class="btn btn-success"
              v-on:click="complete">Complete</button>

      <button type="button"
              class="btn btn-danger"
              v-on:click="remove">Remove</button>
    </div>
  </div>
</template>

<script src="./TodoButtons.js"></script>
