<template>
  <div class="Navbar">
    <div class="Wrapper">
      <img class="Navbar-logo" src="../assets/AvikonIcon.jpeg" alt="Avikon Icon" />
      <h2 class="Navbar-header">Avikon Uçuş Bilgi Sistemi</h2>
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

  &-header{
    color: #fff;
    margin-left: auto;
  }

  .Wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    margin: 15px;
  }

  &-logo {
    width: 60px;
  }
}
</style>

