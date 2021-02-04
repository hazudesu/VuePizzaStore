<template >
    <v-container fluid>
        v-selec
        <v-data-table
            :headers="headers"
        >

        </v-data-table>
    </v-container>
</template>
<script>
export default {
    data: ()=> ({
        headers: [
            {
                text:"Pizza Size"            
            },
            {
                text:"Toppings"
            },
            {
                text:"Price"
            }
        ]
    
    })
}
</script>
<style >
    
</style>