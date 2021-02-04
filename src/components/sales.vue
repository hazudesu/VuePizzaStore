<template >
    <v-container fluid>
        
        
        <v-data-table
            :headers="headers"
            :items="dataSource"
            v-model="selected"
            item-key="id"


            @click:row="handleClick"
        >
            <template v-slot:item.action="{}">
                
                <v-dialog
                    v-model="dialog"
                    max-width="800"
                    hide-overlay
                    elevation="0"
                    persistent
                >
                    <v-container fluid>
                        <v-card >
                            <v-row>
                                <v-col>
                                    <v-card-title class="headline justify-center">Detalle de Orden</v-card-title>
                                    
                                </v-col>
                            </v-row>
                            <v-card>
                                <v-data-table
                                    :headers="mdheaders"
                                    :items="processed"
                                >
                                    </v-data-table>
                                </v-card>
                            <v-card-actions class="justify-center">
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="#43A047"
                                    @click="dialog = false"
                                >
                                    CERRAR
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        
                    </v-container>
                </v-dialog>
            </template>
            
        </v-data-table>
    </v-container>
</template>
<script>
import services from "../services/service";
import dTable from "../classes/tbdata";

var serv = new services();

export default {
    data: ()=> ({
        headers: [
            {
                text:"Order id",
                value: 'id'            
            },
            {
                text:"Client id" ,
                value: 'client_id'
            },
            {
                text:"Order price",
                value: 'order_price'
            },
            {
                text:"Date",
                value:'order_date'
            },
            {
                text:"Detalle" ,
                value: 'action'
            }
        ],
        mdheaders: [
            {
                text: "Size",
                value: 'pizza_size' ,
            },
            {
                text:"Toppings",
                value:'toppings'
            },
            {
                text:"Price",
                value:'price'
            }
        ],
        processed:[],
        dataSource: [],
        dialog:false,
        mdataSource:[],
        id_detail: null,
        selected:null

    
    }),
    methods:{
        seekOrders(){

            serv.getOrderList()
                .then(response =>{
                    this.dataSource = JSON.parse(JSON.stringify(response.data.orders));
                    //console.log(this.dataSource)
                });
        }
        ,
        handleClick(row){
            this.mdataSource = [];
            this.processed = [];

            console.log(row.id);
            this.dialog = true;

            serv.getOrderDetail(row.id)
                .then(response => {
                    this.mdataSource = JSON.parse(JSON.stringify(response.data.pizzas));
                    console.log(JSON.stringify(response.data.pizzas))
                    
                    for(var i = 0 ; this.mdataSource.length ; i++){
                        
                        if(this.mdataSource[i].pizza_size == 'sm'){
                            this.processed.push(new dTable("Pequeña" , this.mdataSource[i].toppings , this.mdataSource[i].price));
                        }
                            else if(this.mdataSource[i].pizza_size == 'm'){
                                this.processed.push(new dTable("Mediana" , this.mdataSource[i].toppings , this.mdataSource[i].price));
                            }
                            else {
                                this.processed.push(new dTable("Grande" , this.mdataSource[i].toppings , this.mdataSource[i].price));
                            }
                    }
                })
        }
    },
    mounted(){
        this.seekOrders();
    }
}

</script>
<style >
    
</style>