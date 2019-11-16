<template>
  <v-layout >
      <v-carousel hide-delimiters cycle continuous>
    <v-carousel-item
      v-for="(item,i) in acf.home_carousel"
      :key="i"
      :src="item"
    >
    <div class="button-container"><v-btn class="ma-2 custom-button" outlined color="indigo"><nuxt-link to="/boats" tag="span">View boats</nuxt-link><v-icon>mdi-anchor</v-icon></v-btn></div>
    </v-carousel-item>
  </v-carousel>
</v-layout>
</template>

<script>


  export default {
    name: "TheCarousel",
    props: ["acf"],
    data () {
      return {
       
      };
    },
   
  };
</script>

<style lang="scss" scoped>

  .hero {
    background-size: cover;
    background-position: center;
    height: 50vh;
    align-items: flex-end;
    justify-content: flex-end;
    display: flex;
  }


  .custom-button {
    color: $darkblu;
    margin: 20px;
    border-radius: 0;
    border: 2px solid $darkblu;
    font-weight: bold;
  }

  .v-btn:hover {
    .v-icon {
      transform: rotate(360deg);
    }
  }

  .button-container {
    background: #fffdfda8;
    display: flex;
    justify-content: center;
    width: 100%;
  }


</style>
