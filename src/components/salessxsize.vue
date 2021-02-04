<template >
    <v-container fluid>
        <v-row>
            <v-col>
                <v-select
                    v-model="sizes"
                    outlined
                    label="Tamaños"
                    :items="szs"
                >

                </v-select>
            </v-col>
            <v-col
                class="justify-left"
            >
                <v-btn
                    @click="seekResults"
                >
                    <span> Buscar </span>
                </v-btn>
            </v-col>
        </v-row>
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
                text:"Pizza Size",
                value: 'pizza_size'            
            },
            {
                text:"Toppings",
                value: 'toppings'
            },
            {
                text:"Price",
                value: 'price'
            }
        ],
        szs: ["Pequeña" , "Mediana" , "Grande"]
    
    }),
    methods: {
        seekResults(){
            
        }

    }
}
</script>
<style >
    
</style>