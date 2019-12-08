<template>
  <section v-if="acf" class="hero">
    <v-container fluid>

      <v-row justify="center">
        <v-col sm="12" md="12" class="video-box">
            <video width="100%" autoplay loop>
                <source :src="acf.hero_video" type="video/mp4">
            </video>
            <div class="copy">
              <div class="copy-sub">
                <h2>WHO WE ARE</h2>
                <h3>{{acf.hero_copy}}</h3>
              </div>
                  <div class="button-container"><v-btn class="ma-2 custom-button" outlined color="indigo"><nuxt-link to="/boats" tag="span">View boats</nuxt-link><v-icon>mdi-anchor</v-icon></v-btn></div>


            </div>
        

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

.hero {
    margin: 0;
}

.custom-button {
  margin-top: 60px;
  color: white;
  border-color: white;
}

.container {
  padding: 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: $mobile) {
    height: 70vh;
  }
  .row {
    max-width: 100%;
  }

  & > * {
    padding: 0;
  } 

  .video-box {
    padding: 0;
    height: 100%;
    position: relative;

    video {
      height: 100%;
    }

  }
}

.copy {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 60px;
    background: #000000ba;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
      @media only screen and (max-width: $mobile) {
        padding: 0;
      }

    .copy-sub {
      width: 60%;
            @media only screen and (max-width: $mobile) {
        width: 100%;
        padding: 10px;
      }
    }

    h2 {
      display: inline;
    }


    h3 {
      @media only screen and (max-width: $mobile) {
        margin-top: 20px;
      }
      margin-top: 100px;
      color: white;
    }
}

</style>
