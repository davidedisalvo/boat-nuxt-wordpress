<template>
    <v-container fluid class="main-block" >
        <h2>What we do</h2>

        <v-row :class="`row-custom-${index}`" class="row-custom" no-gutters v-for="(item, index) in acf.main_block" :style="{ backgroundImage: 'url(' + item.image + ')' }" :key="index">
            <v-col :class="`col-custom-${index}`" class="col-custom" md="6" lg="6" sm="12" >
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
                
            });
    }
  },

  mounted () {
    const par = [...this.acf.main_block].length
    for (var i = 0; i < par; i++) {
          this.$gsap.TweenMax.set(`.row-custom-${i}`,{ autoAlpha: 0 })
          const tl2 = new this.$gsap.TimelineMax()
      



    const scene = new this.$scrollmagic.Scene({
        triggerElement: `.row-custom-${i}`,
        offset: '-200',
        duration: '15s',
        reverse: false
      })
      .setTween(tl2.to(`.row-custom-${i}`, 1, { autoAlpha: 1 })
        .to(`.col-custom-${i}`, .6, { autoAlpha: 1 })
        .to(`.row-custom-${i} .v-icon`,30 ,{ autoAlpha: 1, duration: '30s', delay: '3s' })
        .to(`.row-custom-${i} .v-icon`,10 ,{ rotation: 360 })
)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)


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
.half-screen {
  padding: 50px;

  @media only screen and (max-width: $mobile) {
    padding: 30px;

  }
}
.container {
  margin-bottom: 60px;
    @media only screen and (max-width: $mobile) {
      padding: 0;
      margin-bottom: 60px;
  }
    .row-custom:nth-child(even) {
      justify-content: flex-end;
        @media only screen and (max-width: $mobile) {
            margin-bottom: 0px;
        }


  }
    .row-custom:nth-child(odd) {
      justify-content: flex-start;
        @media only screen and (max-width: $mobile) {
            margin-bottom: 0px;
        }
  }
}
.row-custom {
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 70vh;

  .v-icon {

    opacity: 0;
    visibility: hidden;
  }
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
  opacity: 0;
  visibility: hidden;
  transition: all .6s;
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

