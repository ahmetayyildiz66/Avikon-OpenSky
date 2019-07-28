<template>
  <div>
    <table border="1" style="width:100%">
      <tr>
        <th align="left">
          <button v-on:click="submit" style="width: 100%">
            Firstname
            <v-icon>search</v-icon>
          </button>
        </th>
        <th align="left">Lastname</th>
        <th align="left">Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'table',
  methods:{
    submit(){
      console.log('Clicked on firstname')
    }
  },
  props: {
    result: []
  }
}
</script>
