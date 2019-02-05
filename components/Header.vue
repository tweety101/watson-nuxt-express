<template>
  <div class="header">
    <Logo class="logo"/>
    <nav class="nav">
      <ul class="nav-items">
        <li>
          <nuxt-link to="/chat">Chat Window</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
      </ul>
    </nav>
    
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  components: {
    Logo
  }
}
</script>


<style scoped>
.header {
  display: flex;
  height: 80px;

}
.logo {
  flex: 0 0 200px;

}
.nav {
  flex: 1;
  display: flex;
}
.nav-items {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;
}


</style>
