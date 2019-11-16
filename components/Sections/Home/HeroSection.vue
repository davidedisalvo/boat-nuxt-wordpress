<template>
  <section v-if="acf">
    <TheCarousel :acf="acf" />
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

};
</script>

<style lang="scss" scoped>
section {
  margin: 0 !important;
  margin-bottom: 60px !important;
}
</style>
