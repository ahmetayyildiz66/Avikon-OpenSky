<template>
  <v-app>
    <Navbar />
    <FlightInfo />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import FlightInfo from './components/FlightInfo'

import io from "socket.io-client";

export default {
  name: "App",
  components: {
    Navbar,
    FlightInfo
  },
  data: () => ({
    socket: io("http://localhost:3000")
  }),
  mounted(){
    this.socket.on('RESPONSE', (data) => {
      console.log(data)
    });
  }
};
</script>
