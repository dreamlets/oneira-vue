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
@media (min-width: 1200px) {
  nav {
    padding: 20px 0px;
    text-align: center;
  }
  nav li {
    display: inline-block;
  }
  .brand {
    font-size: 2rem;
    margin-right: 20px;
  }
}
.brand {
  font-weight: 300;
  color: #000000;
  letter-spacing: 2px;
}
nav {
  padding: 20px 0;
  text-align: center;
}
nav ul {
  padding-left: 0px;
}
nav li {
  text-transform: uppercase;
  padding: 0px 10px;
}
</style>
