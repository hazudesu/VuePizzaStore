<template >
    <v-container fluid>
        <v-row>
            <v-col>
                <v-select
                    v-model="tops"
                    outlined
                    label="Toppings"
                    :items="tps"
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
            :items="dataSource"
        >
        

        </v-data-table>
    </v-container>
</template>

<script>
import {maptop} from "../classes/toppings";
import services from "../services/service";
var serv = new services();

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
                value:'price'
            }
        ],
        tops: [],
        tps: ["Jamon" , "Champiñones" , "Pimenton" , "Doble queso" , "Aceitunas" , "Pepperoni" , "Salchichon"],
        dataSource: [],
        processed: []
    
    }),
    methods: {
        seekResults(){

            var tping = maptop.get(this.tops);
            var tpings = tping.getName();

            serv.getSales_Topping(tpings)
                .then(response => {
                    this.dataSource = JSON.parse(JSON.stringify(response.data.pizzas));
                    console.log(this.dataSource);
                })

            
        },
        sizeClass(item){
            if(item.pizza_size == 'sm'){
                return 'Pequeña'
            }
            else if(item.pizza_size == 'm'){
                return 'Mediana';
            }
            else
                return 'Grande';
        }
    }
}
</script>
<style >
    
</style>