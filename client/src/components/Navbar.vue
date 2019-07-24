<template>
  <div class="Navbar">
    <div class="container">
      <img class="Navbar-logo" src="../assets/AvikonIcon.jpeg" alt="Avikon Icon" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Navbar {
  display: flex;
  align-items: center;
  height: 80px;
  
  background-color: #337ab7;

  &-logo {
    margin-left: 100px;
    width: 60px;
  }
}
</style>

