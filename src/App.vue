<template>
  <v-app>
    <v-app-bar
      absolute
      color="#6A76AB"
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
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7) "
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title> Pizzeria DANG </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/"> Homepage </v-tab>
          <v-tab to="/order"> Ordenar Pizzas </v-tab>
          <v-tab to="/pupu" > Resumen de Ventas</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
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
