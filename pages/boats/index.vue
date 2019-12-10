<template>
  <main class="home">
    <MyFilter :boat="boat" />
    <Boats :boat="boat" /> 

  </main>
</template>

<script>
  import debounce from "lodash/debounce";



  import Config from "~/assets/config";
  import get from "lodash/get";
  import Defer from "@/mixins/Defer";
  import Boats from "@/components/Sections/Boats/Boats";
  import MyFilter from "@/components/Sections/Boats/MyFilter";



  export default {
    async fetch ({ app, store }) {
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
      Boats,
      MyFilter

    },
    head () {
      return { title: "Home" };
    },
   
    methods: {
      hideMenu () {
        this.$store.commit("hideMenuBg");
      },
      showMenu (response) {
        if (
          response.index >= 0 &&
          response.direction === "down" &&
          !this.$store.state.menuScrolled
        ) {
          this.animateWork = true;
          this.$store.dispatch("showMenu");
        }
      }
    },
    computed: {
      boat () {
        if (this.$store.state.boat == null) return false;
        return this.$store.state.boat;
      },
      acf () {
        if (this.$store.state.boat == null) return false;
        return this.boat.acf;
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

  section {
    margin: $gap / 1.5 0;
    width: 100%;

    @include media(md) {
      margin: $gap * 3 auto;
    }
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
