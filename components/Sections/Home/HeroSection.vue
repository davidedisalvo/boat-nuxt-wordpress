<template>
  <section v-if="acf"  ref='main'>
    <TheCarousel :acf="acf" />
    <div class="pin-container">
      <div class="arrow" @click="scrollDown()"><v-icon>fa-arrow-down</v-icon></div>
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

  methods: {
    scrollDown () {
      console.log(this.$refs['main'])
      const el = this.$refs['main']
       window.scrollTo(0, 300);
    }
  },

  mounted () {
    const observe_box = scrollzzz({
      targets: '.pin-container',
      debug: false,
      progressione: true,
      trigger: 0.7
    });

    observe_box
      .init()
      .observe(({ direction, position, entry }) => { 
      console.log(entry)
      if (position == 'intersect') {
        entry.target.classList.add('changed');
      }
    });
  },

};
</script>

<style lang="scss" scoped>
section {
  margin: 0 !important;
  margin-bottom: 60px !important;
}

.pin-container {
  padding: 50px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 4px;
    width: 100%;
    background: $darkblu;
  }
}

.arrow{
  cursor: pointer;
  border: 2px solid $darkblu;
  padding: 20px;
  background: white;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  opacity: 1;
  visibility: 1;
    .v-icon{
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
    color: $darkblu;
    color: #394865;
  }
}

.changed {
  visibility: hidden;
  opacity: 0;
  transition: all .4s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-2px);
  }
}
</style>
