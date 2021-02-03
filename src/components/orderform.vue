<template >
    <v-card
        class="mx-auto my-12"
    >
        <v-card-title> Ordenar Pizzas  </v-card-title>
        <v-card-subtitle v-bind="piz"> Pizza #{{piz}}</v-card-subtitle>

        <v-item-group>
            <v-container>
                <v-row
                    cols="12"
                    md="8"
                >
                <v-item>
                    <v-card
                        class="mx-auto my-12"
                        min-height="300px"
                        min-width="500px"
                    >
                    <v-img
                        src="@/assets/pizza1.jpg"
                        height="200px"
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
                                        active-class="deep-purple--text text--accent-4"
                                    >
                                        <template v-slot:default="{ active }">
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item"></v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-action>
                                                <v-checkbox
                                                    :input-value="active"
                                                    color="deep-purple accent-4"
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
                        <v-btn 
                            value="center"
                            v-on:click="appendPizza"
                        >
                            <span class="hidden-sm-and-down">Otra Pizza</span>

                            <v-icon right>
                                mdi-format-align-center
                            </v-icon>
                        </v-btn>

                        <v-btn 
                            value="right"
                            v-on:click="sendOrder"
                        >
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

    <v-row align-content="center"
        :value="value"
        color="deep-purple"
        horizontal
    >
    <v-btn>
      <span>Atras</span>

      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-btn>
      <v>Otra Pizza</v>

      <v-icon>mdi-plus-box</v-icon>
    </v-btn>

    <v-btn>
      <span>Listo</span>

      <v-icon>mdi-check-circle</v-icon>
    </v-btn>
  </v-row>

    </v-card>
</template>


<script>
import Order from '../classes/orden';
import Pizza from '../classes/pizza';
import {maptop, sizet} from '../classes/toppings';

var currentOrder;
var pizzas = [];

export default {
    
    data: () =>({
        piz: 1,
        sizes: ["Pequeña" , "Mediana" , "Grande"],
        items: ["Jamon" , "Champiñones" , "Pimenton" , "Doble Queso" , "Aceitunas" , "Peperoni" , "Salchichon"],
        model: [],
        slsize: null,
    }),
    methods: {
        appendPizza: function(){
            var selTop = [];
            for(var i = 0 ; i < this.model.length ; i++){
                selTop.push(maptop.get(this.model[i]));
            }
            pizzas.push(new Pizza(sizet.get(this.slsize) , 0 , selTop));
            console.log(JSON.stringify(pizzas));

            this.model = [];
            this.slsize = 0;
            this.piz += 1;
        },

        sendOrder: function(){
            var selTop = [];
            for(var i = 0 ; i < this.model.length ; i++){
                selTop.push(maptop.get(this.model[i]));
            }
            pizzas.push(new Pizza(sizet.get(this.slsize) , 0 , selTop));
            
            currentOrder = new Order('clientId' , 0 , pizzas);
            console.log(JSON.stringify(currentOrder));
        }
    }
        
    
}
</script>


<style>
    
</style>