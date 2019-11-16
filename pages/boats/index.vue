<template>
  <main class="home">
   <Boats :boat="boat" />

  </main>
</template>

<script>
  import debounce from "lodash/debounce";



  import Config from "~/assets/config";
  import get from "lodash/get";
  import Defer from "@/mixins/Defer";
  import Boats from "@/components/Sections/Boats/Boats";


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
      Boats

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
</style>
