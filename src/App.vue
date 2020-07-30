<template>
  <div>
    <myNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import myNavbar from "./components/myNavbar";
export default {
  components: {
    myNavbar
  }
};
</script>

<style></style>
