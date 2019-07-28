<template>
  <v-card>
    <v-card-title>
      Uçuş Tablosu
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
  </v-card>
</template>
<script>
export default {
  name: "dataTable",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Çağrı Kodu",
          align: "left",
          value: "callSign"
        },
        {
          text: "Menşei Ülke",
          value: "originCountry"
        },
        {
          text: "Boylam",
          value: "longitude"
        },
        {
          text: "Enlem",
          value: "latitude"
        },
        {
          text: "Uçak indi mi?",
          value: "isLanded"
        },
        {
          text: "Hız",
          value: "velocity"
        }
      ]
    };
  },
  props: ["response"],
  computed: {
    items() {
      let items = [];
      let obj = {};

      if (this.response.length > 1) {
        for (let i = 0; i < this.response.length; i++) {
          let obj = {};

          for (let k = 0; k < 6; k++) {
            let tempRes = this.response[i][k];
            if (k % 6 == 0) {
              obj.callSign = tempRes;
            } else if (k % 6 == 1) {
              obj.originCountry = tempRes;
            } else if (k % 6 == 2) {
              obj.longitude = tempRes;
            } else if (k % 6 == 3) {
              obj.latitude = tempRes;
            } else if (k % 6 == 4) {
              tempRes == true
                ? (obj.isLanded = "Evet")
                : (obj.isLanded = "Hayır");
            } else if (k % 6 == 5) {
              obj.velocity = this.response[i][k];
            }
          }
          items.push(obj);
        }
      }

      return items;
    }
  }
};
</script>

