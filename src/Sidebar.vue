<template>
  <section class="sidebar">
    <h1>Oneira</h1>
    <ul>
      <li><router-link to="/fine-art">Fine art</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </section>
</template>

<style scoped>
h1 {
  display: inline-block;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
}
a {
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
}
a:hover {
  opacity: 0.5;
}
.router-link-active {
  border-bottom: 1px solid #60dfff;
}
ul {
  list-style: none;
  padding-left: 0px;
}
li {
  padding: 5px 0px;
}
.sidebar {
  text-align: right;
}
</style>
