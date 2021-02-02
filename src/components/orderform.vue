<template >
    <v-card
        class="mx-auto my-12"
    >
        <v-card-title> Ordenar Pizzas  </v-card-title>

        <v-item-group
            
        >
            <v-container>
                <v-row
                    cols="12"
                    md="8"
                >
                <v-item>
                    <v-card
                        class="mx-auto my-12"
                        max-height="400px"
                        
                    >
                        <v-card-title> Seleccionar tamaño </v-card-title>
                        <v-container fluid>
                            <v-row align="left">
                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="8"
                                >
                                <v-select
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
        <v-container fluid>
            <v-row align-content="center">
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
        </v-container>

    </v-card>
</template>


<script>
export default {
    data: () =>({
        sizes: ["Small" , "Medium" , "Large"],
        items: ["Jamon" , "Champiñones" , "Pimenton" , "Doble Queso" , "Aceitunas" , "Peperoni" , "Salchichon"],
        model: [],
    })
        
    
}
</script>


<style>
    
</style>