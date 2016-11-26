<template>
  <nav>
    <ul>
      <li><router-link to="/" class="brand">The Oneira Project</router-link></li>
      <li><router-link to="/fine-art">Fine art</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 20px 0px;
  text-align: center;
}
nav li {
  display: inline-block;
  text-transform: uppercase;
  padding: 0px 10px;
}
.brand {
  font-size: 2rem;
  font-weight: 100;
  color: #000000;
  letter-spacing: 2px;
  margin-right: 20px;
}
</style>
