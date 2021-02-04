<template >
    <v-container fluid>
        

        
        <v-data-table
            :headers="headers"
            :items="dataSource"
            v-model="selected"
            item-key="id"
            
             
        >
            <template v-slot:item.action="{}">
                <v-btn
                    @click.stop="dialog = true"
                    
                >
                    VER
                </v-btn>
                <v-dialog
                    v-model="dialog"
                    max-width="800"
                    hide-overlay
                    elevation="0"
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
                                >
                                    </v-data-table>
                                </v-card>
                            <v-card-actions class="justify-center">
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="#43A047"
                                    @click="seekDetail()"

                                >
                                    UPDATE
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
                    console.log(this.dataSource)
                });
        }
    },
    mounted(){
        this.seekOrders();
    }
}

</script>
<style >
    
</style>