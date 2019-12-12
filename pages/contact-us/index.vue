<template>
  <main class="contact-us">
    <Map :contact="contact"/>
    <Form :contact="contact" />
    <Address :contact="contact" />


  </main>
</template>

<script>
    import debounce from "lodash/debounce";



    import Config from "~/assets/config";
    import get from "lodash/get";
    import Defer from "@/mixins/Defer";
    import Boats from "@/components/Sections/Boats/Boats";
    import Form from "@/components/UI/Form";
    import Address from "@/components/UI/Address";
    import Map from "@/components/UI/Map";





  export default {
    async fetch ({ app, store }) {
      if (!store.state.contact.length) {
        const contact = await app.$http.$get(Config.wpDomain + Config.api.contact);
        store.commit("setContact", contact);
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
      Form,
      Address,
      Map

    },
    head () {
      return { title: "Home" };
    },
   
    methods: {

    },
    computed: {
      contact () {
        if (this.$store.state.contact == null) return false;
        return this.$store.state.contact;
      },
      acf () {
        if (this.$store.state.contact == null) return false;
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
