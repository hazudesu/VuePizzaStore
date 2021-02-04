<template >
    <v-container fluid>
        

        
        <v-data-table
            :headers="headers"
            :items="dataSource"
            
        >

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
            }
        ],
        processed:[],
        dataSource: [],

    
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