<template>
    <div class="Wrapper">
        <div class="dataTable">
            <Table :response="response"/>
        </div>  
    </div>
</template>
<script>
import Table from './Table'

export default {
    name: 'flightInfo',
    components: {
        Table
    },
    props: ['response']
}
</script>
<style scoped>
    .Wrapper{
        width: 100%;
        display: flex;
    }

    .dataTable{
        width: 100%;
    }
</style>
