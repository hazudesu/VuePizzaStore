<template>
    <v-card
        class="mx-auto my-12"
        id="card-pedidos"
        
        >
        <v-card-title class="titulo" > Ordenar Pizzas  </v-card-title>

        <v-item-group>
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
    <v-row align-content="center"
        :value="value"
        color="deep-purple"
        horizontal
        class="linea"
    >
    <v-btn>
      <span>Atras</span>

      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-btn>
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
            >
                <span>Listo</span>
                <v-icon>mdi-check-circle</v-icon>
            </v-btn>
        </template>
    </v-dialog>
    
  </v-row>
    </v-container>

    </v-card>
</template>


<script>
export default {
    data: () =>({
        sizes: ["Pequeña" , "Mediana" , "Grande"],
        items: ["Jamon" , "Champiñones" , "Pimenton" , "Doble Queso" , "Aceitunas" , "Peperoni" , "Salchichon"],
        model: [],
        slsize: null,
    })
        
    
}
</script>


<style>
    .linea{
        align-content: center;
        padding-left: 40%;
    }

    .row1{
        align-content:stretch;
        padding-left: 100px;
        padding-right: 100px;
        background: url( 'https://media.istockphoto.com/vectors/vector-seamless-pattern-of-black-and-white-pizza-vector-id1142653274?b=1&k=6&m=1142653274&s=612x612&w=0&h=UcAd6onrNLGjG0cUQ_uDwy2GX6-aDXtjQa0kuetLL70=');
    }

    .titulo{
        text-align: center;
        padding-left: 50%;
        background-color: black;
        color: white;
    }

    .card-pedidos{
        background-image: "@/assets/pizza.jpg";
        background-color: hotpink;
    }

</style>