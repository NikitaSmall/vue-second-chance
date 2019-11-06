<template>
  <div class="container">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Root',
  props: {
    msg: String
  }
}
</script>
