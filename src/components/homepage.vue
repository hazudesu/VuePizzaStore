<template >
    <v-container fluid>
        <v-card
            min-width="700px"
            min-height="500px"
        >
            <!-- <v-card-title
                class="justify-center"
            >
                ORDENA TU PIZZA!!!
            </v-card-title> -->

            <v-img
                src="@/assets/pizza2.jpg"
                height="350px"
            ></v-img>

            <v-card-text
                class="textcard"
            >
               <!--  <h1 class="justify-center"> Disfruta del verdadero sabor de la Nonna con Pizzas DANG</h1>
                <p> DANG that's tasty </p> -->
            </v-card-text>
            <v-card-actions
                class="justify-center"
            >
                <v-btn
                    x-large
                    color="#F4511E"
                    elevation="20"
                >
                <span>
                    ¡ORDENA YA!
                </span>

                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
   
}
</script>

<style >
    h1{
    padding-top: 100px;
    padding-left: 29%;
	position: center;
	top: 100px;
	left: 200px;
}
</style>