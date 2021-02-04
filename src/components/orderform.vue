<template>
    <v-card
        class="mx-auto my-12"
        id="card-pedidos"
        >
       
        <v-card-title class="titulo justify-center" > Ordenar Pizzas  </v-card-title>

        <v-text-field
            class="cedula"
            label="Cedula"
            v-model="message"
            outlined
            clearable

            type="text"
        ></v-text-field>
      
        <v-item-group>
            <v-card-subtitle v-bind="piz" class="subtitulo"> Pizza #{{piz}}</v-card-subtitle>
            <v-container fluid class="row1">
                <v-row
                    cols="12"
                    md="8"
                    
                >
                <v-item>
                    <v-card
                        class="mx-auto my-12"
                        min-height="150px"
                        min-width="500px"
                    >
                    <v-img
                        src="@/assets/pizza1.jpg"
                        height="150px"
                        width="500px"
                    ></v-img>
                        <v-card-title> Seleccionar tamaño </v-card-title>
                        <v-container fluid>
                            <v-row align="left">
                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="8"
                                >
                                <v-select
                                    v-model="slsize"
                                    outlined
                                    label="Tamaño"
                                    :items="sizes"
                                ></v-select>

                                </v-col>

                            </v-row>
                        </v-container>
                    </v-card>
                </v-item>

                <v-item>
                    <v-card
                        class="mx-auto "
                       
                        min-width="300px"
                    >
                        <v-card-title> Seleccionar Toppings </v-card-title>
                        <v-list shaped>
                            <v-list-item-group
                                v-model="model"
                                multiple
                            >
                                <template v-for="(item , i) in items">
                                    <v-divider
                                        v-if="!item"
                                        :key="`divider-${i}`"
                                    ></v-divider>
                                    
                                    <v-list-item
                                        v-else
                                        :key="`item-${i}`"
                                        :value="item"
                                        active-class="orange darken-3"
                                    >
                                        <template v-slot:default="{ active }">
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item"></v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-action>
                                                <v-checkbox
                                                    :input-value="active"
                                                    color="black"
                                                >

                                                </v-checkbox>
                                            </v-list-item-action>
                                        </template>

                                    </v-list-item>

                                </template>
                            </v-list-item-group>
                        </v-list>

                    </v-card>
                </v-item>

                </v-row>
            </v-container>
        </v-item-group>

<!--         <v-container fluid>
            
            <v-row align="center" justify="center">
                <v-col
                    cols="12"
                    class="py-2"
                
                >
                    <v-btn-toggle
                        v-model="icon"
                        borderless
                    >
                        <v-btn value="left">
                            <span class="hidden-sm-and-down">Atras</span>
                            <v-icon right>
                                mdi-format-align-left
                            </v-icon>
                        </v-btn>
                        <v-btn value="center">
                            <span class="hidden-sm-and-down">Otra Pizza</span>

                            <v-icon right>
                                mdi-format-align-center
                            </v-icon>
                        </v-btn>

                        <v-btn value="right">
                            <span class="hidden-sm-and-down">Listo</span>

                            <v-icon right>
                                mdi-format-align-right
                            </v-icon>
                        </v-btn>

                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-container> -->


    <v-container>
    </v-container>

    <v-container class="elcontainer">
    <v-row 
        
        color="deep-purple"
        horizontal
        class="linea"
    >
    <v-btn
        to="/"
    >
      <span>Salir</span>

      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-btn
        to="/order"
    >
      <span>Reiniciar</span>

      <v-icon>mdi-redo-variant</v-icon>
    </v-btn>

    <v-btn
        v-on:click="appendPizza"
        :disabled="slsize == null"
    >
      <v>Otra Pizza</v>

      <v-icon>mdi-plus-box</v-icon>
    </v-btn>

    <v-dialog
        v-model="dialog"
        persistent
        max-width="600"
    >
        <template v-slot:activator="{on , attrs}">
            <v-btn
                v-bind="attrs"
                v-on="on"
                v-on:click="sendOrder"
                :disabled="slsize == null"
                
            >
                <span>Listo</span>
                <v-icon>mdi-check-circle</v-icon>
            </v-btn>
        </template>

        <v-card fluid>
            <v-card-title class="headline">
                Confirmacion de compra
            </v-card-title>
                

            <v-container fluid class="topping">
                <v-row>
                    <v-col
                        class="rou"
                        v-for="(items , i) in pizzas"
                        :key="i"
                        cols="12"
                    >

                    <v-card
                        max-width="600px"
                        class="card2"
                        
                    >
                        <v-row>
                            <v-col>
                                <div class="d-flex flex-no-wrap justify-space-between">
                            <div v-if="items.pizza_size === 'sm'">
                                <v-card-title> Pequeña </v-card-title>
                            </div>
                            <div v-else-if="items.pizza_size === 'm'">
                                <v-card-title> Mediana </v-card-title>
                            </div>
                            <div v-else-if="items.pizza_size === 'lg'">
                                <v-card-title> Grande </v-card-title>
                               
                            </div>
                        </div>
                            </v-col>
                            <v-col>
                                <v-card-title
                                    v-text="items.price"
                                ></v-card-title>
                            </v-col>
                        </v-row>

                        <v-container fluid>
                            <v-row
                                
                            >
                                <v-col
                                    v-for="(tops , j) in items.toppings"
                                    :key="j"
                                    
                                >
                                    <v-card>
                                        <v-card-text
                                            class="items"
                                            v-text="tops.name"
                                        >
                                            
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-card>

                    </v-col>
                    <v-col>
                        <v-card>
                            <v-row>
                                <v-col>
                                    <v-card-title>Total Orden</v-card-title>
                                </v-col>
                                <v-col>
                                    <v-card-title
                                        v-text="currentTotal"
                                    ></v-card-title>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="#D32F2F"
                    @click="dialog = false"
                >
                    Cancelar
                </v-btn>

                <v-btn
                    text
                    color="#43A047"
                    @click="confirmOrder"
                >
                    Confirmar
                </v-btn>
            </v-card-actions>


        </v-card>
    </v-dialog> 
    
  </v-row>
    </v-container>

    </v-card>
</template>


<script>
    import Order from '../classes/orden';
    import Pizza from '../classes/pizza';
    import {maptop, sizet} from '../classes/toppings';
    import services from '../services/service';

    var srv = new services();
    var currentOrder;
    var pizzas = [];
    

export default {
    data: () =>({
        sizes: ["Pequeña" , "Mediana" , "Grande"],
        items: ["Jamon" , "Champiñones" , "Pimenton" , "Doble queso" , "Aceitunas" , "Pepperoni" , "Salchichon"],
        model: [],
        slsize: null,
        piz:1,
        dialog: false,
        pizzas: pizzas,
        currentTotal: 0
    }),
    methods: {
        appendPizza: function(){
            var selTop = [];
            for(var i = 0 ; i < this.model.length ; i++){
                selTop.push(maptop.get(this.model[i]));
            }
            var thPizza = new Pizza(sizet.get(this.slsize) , 0 , selTop);
            pizzas.push(thPizza);
            this.currentTotal += thPizza.getPrice();
            //console.log(JSON.stringify(pizzas));
            this.model = [];
            this.slsize = 0;
            this.piz += 1;
        },
        sendOrder: function(){
            /*var selTop = [];
            for(var i = 0 ; i < this.model.length ; i++){
                selTop.push(maptop.get(this.model[i]));
            }
            pizzas.push(new Pizza(sizet.get(this.slsize) , 0 , selTop));*/

            this.appendPizza();
            
            
        },

        confirmOrder(){
            this.dialog = false;
            currentOrder = new Order('clientId' , 0 , pizzas);
            console.log(JSON.stringify(currentOrder));
            srv.postOrder(JSON.stringify(currentOrder));

        },

        resetOrders(){
            this.piz = 0;
            this.model = [];
            this.slsize = null;
        }
    }
        
    
}
</script>


<style>
    .linea{
        align-content: center;
        padding-left: 30%;
    }

    .row1{
        align-content:stretch;
        padding-left: 100px;
        padding-right: 100px;
        background: url( 'https://media.istockphoto.com/vectors/vector-seamless-pattern-of-black-and-white-pizza-vector-id1142653274?b=1&k=6&m=1142653274&s=612x612&w=0&h=UcAd6onrNLGjG0cUQ_uDwy2GX6-aDXtjQa0kuetLL70=');
    }

    .titulo{
        background-color: black;
        color: white;
    }

    .card-pedidos{
        background-image: "@/assets/pizza.jpg";
    }

    .subtitulo{
        text-align: center;
        color: rgb(5, 5, 5)  !important;
        font-weight: bold;
    }

    .topping{
        
        background: url( 'https://media.istockphoto.com/vectors/vector-seamless-pattern-of-black-and-white-pizza-vector-id1142653274?b=1&k=6&m=1142653274&s=612x612&w=0&h=UcAd6onrNLGjG0cUQ_uDwy2GX6-aDXtjQa0kuetLL70=');
    
    }

    .items{
        background-color: #d6562e;
        text-decoration-color: black;
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 25;
        text-align: center;
    
    }
    
    .rou{
        color: #d6562e;
    }

    .cedula{
        align-content: center;
    }
</style>