<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Todo list</a>
    </nav>

    <Root />
  </div>
</template>

<script>
import Root from './components/Root/Root.vue'
import store from './store'

export default {
  name: 'app',
  store,
  components: {
    Root
  }
}
</script>
