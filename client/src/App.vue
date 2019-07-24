<template>
  <div id="app">
    <p>Hey</p>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data(){
    return{
      socket: io('http://localhost:3000')
    }
  },
  mounted(){
    this.socket.on('RESPONSE', (data) => {
      console.log('VEri geldi veri')
    });
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
