<template>
  <div class="navbar">
    <div class="logo">
      <router-link tag="h2" :to="{ name: 'Home' }">Weather App</router-link>
    </div>
    <div class="nav">
      <ul>
        <router-link :to="{ name: 'Home' }" tag="li" exact>
          <h3>Home</h3>
        </router-link>
        <router-link :to="{ name: 'Favourite' }" tag="li" exact>
          <h3>Favourite</h3>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  color: black;
  padding: 0 15vw;
  padding-top: 25px;
  position: fixed;
  width: 100%;
  z-index: 500;
  background: none;
  h2,
  h3 {
    font-weight: 600;
    cursor: pointer;
  }
  .nav {
    li {
      display: inline-block;
      margin: 0 20px;
    }
    li::after {
      content: "";
      height: 4px;
      width: 0;
      background: blue;
      display: block;
      transition: 0.3s all;
    }
    li:hover::after {
      width: 100%;
    }
    .router-link-active::after {
      width: 100%;
    }
  }
}
</style>
