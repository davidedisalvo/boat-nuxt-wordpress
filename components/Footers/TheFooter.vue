<template>
<v-footer
    color="primary lighten-1"
    padless
  >
  <v-container>

  <v-row justify="center">
    <p class="copyright">&copy; Davide Di Salvo using <a href="https://github.com/bovas85/nuxt-headless">https://github.com/bovas85/nuxt-headless</a> as boilerplate</p>
  </v-row>
    <v-row
      justify="center"
      no-gutters
    >

      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        
        <nuxt-link
          to="/boats"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>OUR BOATS</v-btn>
          
        </nuxt-link>
                <nuxt-link
          to="/contact-us"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>CONTACT US</v-btn>
          
        </nuxt-link>
        <nuxt-link
          to="/privacy"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>Privacy policy</v-btn>
          
        </nuxt-link>
      </v-col>
    </v-row>
      </v-container>

  </v-footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    props: {
      mobilenav: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.justify-center {
  justify-content: center;

  .text-center {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: $mobile) {
      justify-content: space-between;

    }
  }
}

.v-btn:not(.v-btn--round).v-size--default {
  @media only screen and (max-width: $mobile) {
    padding: 0 !important;

  }
  
}

.copyright {
  font-size: 13px;
  text-align: center;
  margin-bottom: 20px;
}
  footer {
    background-color: $grey;
    color: white;
    padding: $gap;

  }
</style>
