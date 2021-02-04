<template>
  <v-app>
    <v-app-bar
      absolute
      color="#d6562e"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :src="require('@/assets/pizza.jpg')"
          gradient="to top right, rgba(214,86,46,.7), rgba(25,32,72,.7) "
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title> Pizzeria DANG </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/"> Homepage </v-tab>
          <v-tab to="/order"> Ordenar Pizzas </v-tab>
          <v-tab to="/sales" > Resumen de Ventas</v-tab>
          <v-tab to="/salesxsize"> Ventas x Size </v-tab>
          <v-tab to="/salesxtop"> Ventas x Topping </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

  
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="">
        <strong class="subheading">¡Contáctanos por nuestras redes sociales!</strong>

        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-instagram</v-icon>
        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-twitter</v-icon>
        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-twitch</v-icon>
        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-microsoft-windows</v-icon>
        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-youtube</v-icon>
        <v-spacer></v-spacer>
        <v-icon size="24px">mdi-discord</v-icon>
     
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>VENEZUELA - DANG C.A</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .card1{
    background-color: #d6562e;
  }
  .py-2{
    background-color: #d6562e;
  }
</style>