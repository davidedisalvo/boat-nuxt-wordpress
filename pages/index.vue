<template>
  <main class="home" v-if="acf">
    <hero-section :acf="acf" :animateHeader="animateHeader"/>
    <Quote :acf="acf" />
    <main-block :acf="acf" />
    <GalleryGrid :acf="acf" />

  </main>
</template>

<script>
  import debounce from "lodash/debounce";
  import HeroSection from "@/components/Sections/Home/HeroSection";
  import Config from "~/assets/config";
  import get from "lodash/get";
  import Defer from "@/mixins/Defer";
  import Quote from "@/components/Sections/Home/Quote";
  import MainBlock from "@/components/Sections/Home/Main-block";
  import GalleryGrid from "@/components/Sections/Home/GalleryGrid";




  export default {
    async fetch ({ app, store }) {
      if (!store.state.homePage.length) {
        const home = await app.$http.$get(Config.wpDomain + Config.api.homePage);
        store.commit("setHomepage", home);
      }
    },
    mixins: [Defer()],
    data () {
      return {
        animateHeader: false
      };
    },
    components: {
      HeroSection,
      Quote,
      MainBlock,
      GalleryGrid
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
      homePage () {
        if (this.$store.state.homePage == null) return false;
        return this.$store.state.homePage;
      },
      acf () {
        if (this.$store.state.homePage == null) return false;
        return this.homePage.acf;
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
