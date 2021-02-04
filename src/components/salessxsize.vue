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
            :items="processed"
        >

        </v-data-table>
    </v-container>
</template>
<script>
import services from "../services/service";
import dTable from "../classes/tbdata";
import {sizet} from "../classes/toppings";

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
                value: 'price'
            }
        ],
        szs: ["Pequeña" , "Mediana" , "Grande"],
        dataSource: [],
        processed: [],
        sizes: null
    
    }),
    methods: {
        seekResults(){
            var sizeTag = sizet.get(this.sizes);

            serv.getSales_Size(sizeTag)
                .then(response =>{
                    this.dataSource = [];
                    this.processed = [];

                    this.dataSource = JSON.parse(JSON.stringify(response.data.pizzas));

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
        }

    }
}
</script>
<style >
    
</style>