<template>
 <v-container class="center">
      <h2>Our boats</h2>
      <transition-group name="test" tag="div" class="row">

        <v-col  md="4" sm="6" xsm="12" v-for="(item, index) in boatList" :key="index">
          <v-card 
          class="mx-auto"
          max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.acf.post_image" 
            >
              
            </v-img>

            <v-card-title><h3>{{item.acf.post_title}}</h3></v-card-title>

            <v-card-text class="text--primary">

              <div><p>{{item.acf.post_description}}</p></div>

            </v-card-text>

            <v-card-actions>

              <v-btn
                color="orange"
                text
                
              >
              <nuxt-link :to='"/boats/"+item.id'>
                Explore 
              </nuxt-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition-group>
      <p v-if="errorMessage" class="errorMessage">We don't have any boat at that price</p>

    </v-container>
</template>
<script>

export default {
    props: ["boat"],
    data() {
      return {
        errorMessage: false
      }
    },


    computed: {
      boatList () {
        if (this.$store.state.filterOn == true ) {
                let price = this.$store.state.filteredBoat.filter(el=> {
                let elNumber = parseInt(el.acf.price, 10);
                return elNumber > this.$store.state.price
                
          })

          if(price.length < 1) {
            this.errorMessage = true
          }
          return price
        } 
        if (this.$store.state.filterOn == false) {
            let price = this.$store.state.boat.filter(el=> {
            let elNumber = parseInt(el.acf.price, 10);
            return elNumber > this.$store.state.price
          })

          if(price.length < 1) {
            this.errorMessage = true
          }

          return price
        }

        if(this.$store.state.boat.length < 1) {
            this.errorMessage = true
          }

          return this.$store.state.boat

        

      }
    }
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}

h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.v-card {
    margin: 0 auto;
}
.v-card__text {
    p {
       -webkit-line-clamp: 3;
          overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;

    }   
}

.center {
    justify-content: center;
}

.test {
  &-move { transition: all 600ms ease-in-out 50ms }
  &-enter-active { transition: all 300ms ease-out }

  &-leave-active {
    transition: all 200ms ease-in;

  }

  &-enter,
  &-leave-to { opacity: 0 }
  &-enter { transform: scale(0.9) }

}

.errorMessage {
  text-align: center;
  color: red;
  padding: 50px 0;
}

</style>
