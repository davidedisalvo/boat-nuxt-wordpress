<template>
  <section v-if="acf" class="stats">
      <v-container>
        <h2>What we achieved</h2>

        <v-row>
            <v-col md="3" v-for="item in acf.stats">
                <div class="stat-container" >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="180" viewBox="0 0 180 180">
                        <g>
                            <path id="" data-name="" d="M541.8,437.187a86.939,86.939,0,1,0,0-173.877,85.52,85.52,0,0,0-43.439,11.657l4.786,8.345A76.466,76.466,0,0,1,541.8,273,77.305,77.305,0,1,1,464.49,350.31H454.8a86.985,86.985,0,0,0,87,86.877" transform="matrix(-0.86602,0.5,-0.5,-0.86602,740.1460743817282,122.21651901279353)" fill="none" stroke-width="1.5" data-svg-origin="541.9165344238281 350.24842834472656" style="visibility: inherit; opacity: 1; transform-origin: 0px 0px 0px;"></path>
                            <circle cx="68.1" cy="68.1" r="68.1" transform="translate(189.052 114.628) rotate(150)" style="visibility: inherit; opacity: 1;"></circle>
                        </g>
                    </svg>
                    <h3>
                        {{item.number}}
                    </h3>

                </div>
                <p class="copy">{{item.copy}}</p>
            </v-col>
        </v-row>
    </v-container>
  </section>
</template>

<script>




export default {
  name: "GalleryGrid",
  props: ["acf"],
  components: {
    IconArrow: () => import("@/components/Icons/IconArrow"),

  },
  data () {
    return {
      offsetTop: 0,
    }
  },

  mounted () {

    const observe_box = scrollzzz({
      targets: '.stats',
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

   
  }

};
</script>

<style lang="scss" scoped>
.stat-container {
    position: relative;
    display: flex;
    justify-content: center;
    svg {
        position: relative;
       
    }

    path {
        fill: $blu ;
    }

    circle {
        fill: $darkblu;
    }

    h3 {
        position: absolute;
        top: 50%;
        left: 53%;
        transform: translate(-50%, -50%);
        color: white;
    }
}

    .col-md-3 {
        opacity: 0;
        visibility: hidden;
    }

.copy {
    margin-top: 20px;
    text-align: center;
}

h2 {
    @media only screen and (max-width: $mobile) {
        margin-bottom: 20px;
      }
}

.changed {
    .col-md-3:nth-child(1) {
        visibility: visible;
        opacity: 1;
        transition: all 1s;
    }
    .col-md-3:nth-child(2) {
        visibility: visible;
        opacity: 1;
        transition: all 1s;
        transition-delay: .5s;
    }
    .col-md-3:nth-child(3) {
        visibility: visible;
        opacity: 1;
        transition: all 1s;
        transition-delay: 1s;
    }
    .col-md-3:nth-child(4) {
        visibility: visible;
        opacity: 1;
        transition: all 1s;
        transition-delay: 1.5s;
    }
}


</style>
