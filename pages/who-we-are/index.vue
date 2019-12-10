<template>
  <main class="home">
      <hero :acf = acf />
      <stats :acf = acf />
      <slider :acf= acf />
      <main-block :acf="acf"><div class="button-container"><v-btn class="ma-2 custom-button" outlined color="indigo"><nuxt-link to="/contact-us" tag="span">Contact Us</nuxt-link><v-icon>mdi-anchor</v-icon></v-btn></div>
</main-block>
      

  </main>
</template>

<script>
  import debounce from "lodash/debounce";



  import Config from "~/assets/config";
  import get from "lodash/get";
  import Defer from "@/mixins/Defer";
  import hero from "@/components/Sections/who-we-are/hero";
  import stats from "@/components/Sections/who-we-are/stats";
  import slider from "@/components/Sections/who-we-are/slider";
  import MainBlock from "@/components/Sections/Home/Main-block";





  export default {
    async fetch ({ app, store }) {
      if (!store.state.boat.length) {
        const whoWeAre = await app.$http.$get(Config.wpDomain + Config.api.whoWeAre);
        store.commit("setwhoWeAre", whoWeAre);
      }
      if (!store.state.boat.length) {
        const boat = await app.$http.$get(Config.wpDomain + Config.api.boat);
        store.commit("setBoat", boat);
      }
    
    },
    mixins: [Defer()],
    data () {
      return {
        animateHeader: false
      };
    },
    components: {
      hero,
      stats,
      slider,
      MainBlock
    },
    head () {
      return { title: "Home" };
    },
   
    methods: {
      
    },
    computed: {
      whoWeAre () {
        if (this.$store.state.whoWeAre == null) return false;
        return this.$store.state.whoWeAre;
      },
      acf () {
        if (this.$store.state.whoWeAre == null) return false;
        return this.whoWeAre.acf;
      }
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    @include media(sm) {
      max-width: 480px;
      padding-left: 0;
    }
  }
  .custom-button {
    color: white;
    border-color: white;
  }
  section {
    margin: $gap / 1.5 0;
    width: 100%;

    @include media(md) {
      margin: $gap * 3 auto;
    }
  }

  .row-custom {
    background-position: bottom;
  }

 .page-enter-active {
      animation: acrossIn .40s ease-out both;
    } 
    .page-leave-active {
      animation: acrossOut .60s ease-in both;
    } 
    @keyframes acrossIn {
      0% {
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes acrossOut {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(100%, 0, 0);
      }
    }
</style>
