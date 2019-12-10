<template>
  <main class="single-boat">
    <v-container>
      <h2>{{singleBoat[0].acf.post_title}}</h2>

      <v-row class="general-container">
        <v-col md="6" sm="12" class="image">
          <img :src="singleBoat[0].acf.post_image" alt="">
        </v-col>
        <v-col md="6" sm="12" class="basic-info">
          <h3>Price: {{singleBoat[0].acf.price}} £</h3>
          <h3>Location: {{singleBoat[0].acf.location}}</h3>
          <h3>Type: {{singleBoat[0].acf.type}}</h3>
        </v-col>
      </v-row>
      <v-row>
        <p class="description">{{singleBoat[0].acf.post_description}}</p>
      </v-row>
      <v-icon class="icon-custom" center dark>mdi-anchor</v-icon>


    </v-container>
    <v-container>
      <v-row class="button-container">
        <v-col sm="12" md="6">
          <div class="button-container"><v-btn class="ma-2 custom-button" outlined color="indigo"><nuxt-link to="/boats" tag="span">Back to Our boats</nuxt-link><v-icon>mdi-anchor</v-icon></v-btn></div>
        </v-col>
        <v-col sm="12" md="6">
          <div class="button-container"><v-btn class="ma-2 custom-button" outlined color="indigo"><nuxt-link to="/contact-us" tag="span">Contact us</nuxt-link><v-icon>mdi-anchor</v-icon></v-btn></div>
        </v-col>
      </v-row>
    </v-container>
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
        animateHeader: false,
        id: this.$route.params.id
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
      singleBoat () {
        if (this.$store.state.boat == null) return false;
        const idRoute = this.id
        const element = this.$store.state.boat.filter(el => {
            console.log(el.id)
            console.log(idRoute)
            return el.id == idRoute
        });
        return element
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

  h3 {
    color: white;
  }

  .basic-info {
    line-height: 3;
  }

  .icon-custom {
  position: absolute;
    top: 100%;
    margin-top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: #394865;
    border-radius: 50%;
    padding: 10px;
  }

  .description {
    text-align: center;
    padding: 20px;
  }



  section {
    margin: $gap / 1.5 0;
    width: 100%;

    @include media(md) {
      margin: $gap * 3 auto;
    }
  }

  .container:first-child {
    border-bottom: 2px solid $darkblu;

  }

  .general-container {
    background: #686868;
    padding: 5px;
    border-radius: 20px 0;
        @media only screen and (max-width: $mobile) {
      flex-direction: column;
    }
  }

  main {
    margin: 50px 0;

    @media only screen and (max-width: $mobile) {
      margin: 0;
    }
    
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
    display: flex;
    justify-content: center;
    .col-6:last-child {
      justify-content: flex-end;
      display: flex;
    }
  }

  h2 {
    @media only screen and (max-width: $mobile) {
      margin-bottom: 40px;
    }
  }

  .v-btn {
    @media only screen and (max-width: $mobile) {
      width: 100%;
    }
  }

  .image {
        @media only screen and (max-width: $mobile) {
      width: 100%;
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

