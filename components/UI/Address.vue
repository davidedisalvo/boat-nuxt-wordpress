<template>
    <v-container fluid id="trigger" class="main-block" >
        <h2>Or send us an email</h2>
        <v-row class="row-custom" no-gutters :style="{ backgroundImage: 'url(' + contact.acf.background_image + ')' }">
            <v-col class="col-custom" md="6" lg="6" sm="12" >
                <div class="half-screen">
                    <h3>Email: {{contact.acf.email}}</h3>
                    <h3>Phone number: {{contact.acf.phone_number}}</h3>
                    <h3>Address: {{contact.acf.address}}</h3>
                </div>
            </v-col>
            <v-icon center dark>mdi-anchor</v-icon>
          
        </v-row>
      
    </v-container>
</template>
<script>
export default {
    name: "Main-Block",
    props: ['contact'],
    computed: {
        changeClass () {
          
          
    }
  },

      mounted () {
      let tl = this.$gsap.TweenMax.to('.half-screen', 1, { autoAlpha: 0 })
      const scene = new this.$scrollmagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 'onLeave',
        duration: '.3'
      })
      .setPin('#trigger')
      .setTween(tl)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

    },
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

.half-screen {
    @media only screen and (max-width: $mobile) {
        text-align: center;
    }
}
.main-block {
    margin-top: 100px;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
}
.container {
  margin-bottom: 60px;
          @media only screen and (max-width: $mobile) {
            padding: 0;
            margin-bottom: 0;
        }
    .row-custom {
      justify-content: flex-start;

  }
    
}

h3 {
    color: white;
    @media only screen and (max-width: $mobile) {
        font-size: 23px;

    }
}
.row-custom {
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 70vh;
        @media only screen and (max-width: $mobile) {
            background-position: right;

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
    padding: 70px;
    text-align: left;
    background: #000000ba;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 2;
      @media only screen and (max-width: $mobile) {
      padding: 0px;
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

