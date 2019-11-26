<template>
  <section v-if="acf">
    <TheCarousel :acf="acf" />
    <div class="pin-container">
          <div class="arrow"><v-icon>fa-arrow-down</v-icon></div>

    </div>

  </section>
</template>

<script>
import LazyImage from "@/components/UI/LazyImage";
import TheCarousel from "@/components/Sliders/TheCarousel";
import Quote from "@/components/Sections/Home/Quote";



export default {
  name: "HeroSection",
  props: ["acf", "animateHeader"],
  components: {
    IconArrow: () => import("@/components/Icons/IconArrow"),
    LazyImage,
    TheCarousel,
    Quote
  },
  data () {
    return {
      offsetTop: 0,
    }
  },

  mounted () {
    let tl = this.$gsap.TweenMax.to('.arrow > .v-icon', .5, { duration: .5, y: 3, repeat:-1, yoyo:true })
    let tl2 = this.$gsap.TweenMax.to('.arrow', .2, { duration: .2, autoAlpha: 0 })

     const scene = new this.$scrollmagic.Scene({
        triggerElement: '.arrow',
        triggerHook: 'onLeave',
        offset: '-600',
      })
      .setPin('.arrow')
      .setTween(tl2)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)
  },

};
</script>

<style lang="scss" scoped>
section {
  margin: 0 !important;
  margin-bottom: 60px !important;
}

.arrow{
  border: 2px solid $darkblu;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
    height: 50px;
    margin: 0 auto;
      margin-top: 40px;

    position: relative;
    opacity: 1;
    visibility: 1;
  .v-icon{
    color: $darkblu;
  color: #394865;


  }
  

}
</style>
