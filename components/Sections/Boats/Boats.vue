<template>
 <v-container class="center">
      <h2>Our boats</h2>
      <v-row >
        <v-col  md="4" sm="6" xsm="12" v-for="item in boat" >
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
                <div><p>{{item.id}}</p></div>

            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                text
                
              >
                Share
              </v-btn>

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
      </v-row>
    </v-container>
</template>
<script>
export default {
    props: ["boat"]
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
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
</style>
