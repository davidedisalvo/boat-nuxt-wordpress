<template>
    <v-container>
        <v-row>
            <v-col class="privacy">
                    <div v-html="privacy.content.rendered"></div>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  import Config from "~/assets/config";

  export default {
    async fetch ({ app, store }) {
      if (!store.state.privacy.length) {
        const privacy = await app.$http.$get(Config.wpDomain + Config.api.privacy);
        store.commit("setPrivacy", privacy);
      }
    },
    data () {
      return {
        animateHeader: false
      };
    },
    components: {

    },
    head () {
      return { title: "Home" };
    },
   
    methods: {

    },
    computed: {
      privacy () {
        if (this.$store.state.privacy == null) return false;
        return this.$store.state.privacy;
      },
      acf () {
        if (this.$store.state.privacy == null) return false;
        return this.boat.acf;
      }
    }
  };
</script>
<style lang="scss">
.privacy {
    div {
    display: flex;
    flex-direction: column;
    h2 {
    margin-bottom: 50px;
    margin-top: 70px;
}
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
