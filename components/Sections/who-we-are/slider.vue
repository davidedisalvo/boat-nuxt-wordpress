<template>
    <section>
        <h2>Some of our boats</h2>
        <hooper :settings="hooperSettings" :itemsToShow="3" :infiniteScroll="true" :autoPlay="true">
   
         <slide  v-for='(item, index) in $store.state.boat' ><nuxt-link tag="div" :style="{ backgroundImage: 'url(' + item.acf.post_image + ')'}"class="linkTo" :to="'/boats/'+item.id"></nuxt-link></slide>
  </hooper>
  
    </section>

</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';


  export default {
    data () {
      return {
            hooperSettings: {
            itemsToShow: 1,
            centerMode: true,
            mouseDrag: false,
            breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
            500: {
            centerMode: false,
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction'
          }
        }
      }
      }
    },
    props: ['acf'],
    components: {
    Hooper,
    Slide
  },


    mounted() {
        const observe_box = scrollzzz({
      targets: '.hooper',
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
    computed: {
        
    }
  }
</script>

<style lang="scss" scoped>

.hooper-slide {
    padding: 0 10px;
}
.linkTo {
    height: 100%;
    color: transparent;
    background-size: cover;
    cursor: pointer;
}
    .hooper {
        transform: translateY(-50px);
        opacity: 0;
        visibility: hidden;
    }

.changed {
    &.hooper {
        transform: translateY(0);
        transition: all .6s;
        opacity: 1;
        visibility: visible;
    }
}
h2 {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 50px;
    text-align: center;
}
</style>
