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
            :items="processed"
        >
        

        </v-data-table>
    </v-container>
</template>

<script>
import {maptop} from "../classes/toppings";
import services from "../services/service";
import dTable from "../classes/tbdata";
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

                    for(var i = 0 ; this.dataSource.length ; i++){
                        if(this.dataSource[i].pizza_size == 'sm'){
                            this.processed.push(new dTable("Pequeña" , this.dataSource[i].toppings , this.dataSource[i].price));
                        }
                            else if(this.dataSource[i].pizza_size == 'm'){
                                this.processed.push(new dTable("Mediana" , this.dataSource[i].toppings , this.dataSource[i].price));
                            }
                            else {
                                this.processed.push(new dTable("Grande" , this.dataSource[i].toppings , this.dataSource[i].price));
                            }
                            
                    }

                })

        },

    }
}
</script>
<style >
    
</style>