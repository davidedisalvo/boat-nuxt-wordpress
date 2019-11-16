<template>
    <v-container fluid class="main-block" >
        <h2>What we do</h2>

        <v-row class="row-custom" no-gutters v-for="item in acf.main_block"  :class="changeClass" :style="{ backgroundImage: 'url(' + item.image + ')' }">
            <v-col class="col-custom" md="6" lg="6" sm="12" >
                <div class="half-screen">
                    <h3>{{item.title}}</h3>
                    <p>{{item.copy}}</p>
                </div>
            </v-col>
            <v-icon center dark>mdi-anchor</v-icon>
          
        </v-row>
      
    </v-container>
</template>
<script>
export default {
    name: "Main-Block",
    props: ["acf"],
    computed: {
        changeClass () {
          
          this.acf.main_block.map(function (item) {
            console.log(item.copy_position)
                if(item.copy_position = 'Left') {
                  console.log('left')
                } else {
                  console.log('right')
                }
            });
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  justify-content: center;
  padding: 50px;
  div {
    position: relative;
    padding: 30px;
  }
}
.main-block {
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
}
.container {
  margin-bottom: 60px;
          @media only screen and (max-width: $mobile) {
            padding: 0;
        }
    .row-custom:nth-child(even) {
      justify-content: flex-end;
        @media only screen and (max-width: $mobile) {
            margin-bottom: 60px;
        }


  }
    .row-custom:nth-child(odd) {
      justify-content: flex-start;
        @media only screen and (max-width: $mobile) {
            margin-bottom: 60px;
        }
  }
}
.row-custom {
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 70vh;
}
.v-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;
  @media only screen and (max-width: $desktop) {
      display: none;
  }

  &:before {
    padding: 10px;
    color: black;
  }
}
.col-custom {
    padding: 70px;
    text-align: left;
    background: #000000ba;
    color: white;
    line-height: 2;
      @media only screen and (max-width: $mobile) {
      padding: 50px;
  }
}
.align-center {
justify-content: center;
align-items: center;
}
section {
  margin: 0 !important;
}
</style>

