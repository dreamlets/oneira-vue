<template>
  <div class="HolyGrail">
    <div class="HolyGrail-body">
      <main class="HolyGrail-content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
      <nav class="HolyGrail-nav">
        <Sidebar></Sidebar>
      </nav>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}
.HolyGrail-content {
  flex: 1;
}

.HolyGrail-nav {
  /* 12em is the width of the columns */
  flex: 0 0 9em;
  margin-right: 5em;
}

.HolyGrail-nav {
  /* put the nav on the left */
  order: -1;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
