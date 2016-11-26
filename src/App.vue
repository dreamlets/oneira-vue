<template>
  <main>
    <Navbar></Navbar>
    <section>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </main>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
html {
  background: url(static/lightpaperfibers.png) repeat;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
section {
  text-align: center;
}

</style>
