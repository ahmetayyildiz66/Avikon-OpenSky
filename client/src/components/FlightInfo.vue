<template>
    <div class="Wrapper">
        <div class="narrow">
            <Table />
        </div>
        <div class="wide">
            <Map />
        </div>
    </div>
</template>
<script>
import Table from './Table'
import Map from './Map'

export default {
    name: 'flightInfo',
    components: {
        Table,
        Map
    }
}
</script>
<style scoped>
    .Wrapper{
        width: 100%;
        display: flex;
    }

    .narrow{
        width: 45%;
        background-color: blue;
    }

    .wide{
        width: 55%;
        background-color: green;
    }
</style>
