<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view/>
  </div>
</template>

<script>
import home from './components/pages/Home/home'
export default {
  name: 'App',
  components: {
    home: home
  }
}
</script>

<style>

</style>
