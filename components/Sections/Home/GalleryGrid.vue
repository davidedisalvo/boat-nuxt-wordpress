<template>
  <section v-if="acf">
    <v-container class="copy-container">
      <h2>Some of our boat</h2>
      <v-row justify="center">
        <v-col sm="12" md="7">
          <p>{{acf.last_copy}}</p>
          <v-icon center dark>mdi-anchor</v-icon>

        </v-col>
      </v-row>

    </v-container>
    <div class="grid-container">
      <figure class="grid-item" v-for="item in acf.gallery_grid">
        <img  :src="item" alt="" />
      </figure>
    </div>
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
      targets: '.copy-container',
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

    const observe_box2 = scrollzzz({
      targets: '.grid-container',
      debug: false,
      progressione: true,
      trigger: 0.4
    });

    observe_box2
      .init()
      .observe(({ direction, position, entry }) => { 
      console.log(entry)
      if (position == 'intersect') {
        entry.target.classList.add('changed-grid');

      }
    });
  }

};
</script>

<style lang="scss" scoped>
.justify-center {
  justify-content: center;
  text-align: center;

  p {
    line-height: 2;
    padding: 20px;
    border-bottom: 2px solid $darkblu;

  }
}
.container, .grid-wrapper, .container-fluid {
  grid-row-gap: 15px;
}
.container {
  margin-bottom: 30px;
}

.copy-container {
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
}

.changed {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: all .4s;
}


@media only screen and (min-width: $tablet) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 450px;
    opacity: 0;
    visibility: hidden;

    .grid-item:nth-child(1) {
      grid-column: span 3;
      transition: all 1s;

    }

    .grid-item:nth-child(2) {
      grid-column: span 3;
      transition: all 1s;
    }

    .grid-item:nth-child(3) {
      grid-column: span 2;
      transition: all 1s;
    }

    .grid-item:nth-child(4) {
      grid-column: span 2;
      transition: all 1s;


    }

    .grid-item:nth-child(5) {
      grid-column: span 2;
      transition: all 1s;
    }

    .grid-item:nth-child(6) {
      grid-column: span 5;
    }
  }

  .changed-grid {
   
  &.grid-container {
    opacity: 1;
    visibility: visible;
    transition: all .6s;
  }
  }
}

.v-icon {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: $darkblu;
    border-radius: 50%;
    padding: 10px;
    color: white;
    font-size: 30px;
}


section {
  margin: 0 !important;
  margin-bottom: 0px !important;
}
</style>
