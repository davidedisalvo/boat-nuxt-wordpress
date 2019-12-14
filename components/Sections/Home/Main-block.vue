<template>
    <v-container fluid class="main-block" >
        <h2>What we do</h2>

        <v-row :class="[`row-custom-${index}` , {'visible' : trigger}]" class="row-custom" no-gutters v-for="(item, index) in acf.main_block" :key="index" :style="[{ backgroundImage: 'url(' + item.image + ')'}, changeStyle ]">
            <v-col :class="`col-custom-${index}`" class="col-custom" md="6" lg="6" sm="12" :style={}>
                <div class="half-screen">
                    <h3>{{item.title}}</h3>
                    <p>{{item.copy}}</p>
                    <slot></slot>

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
    data () {
      return {
        trigger: false
      }
    },
    computed: {
     changeStyle() {
      if(this.trigger == true) {
        return {border: '2px solid black'}
      }
    }    
  },

  mounted () {
    const par = [...this.acf.main_block].length
    const arr = []
    for (var i = 0; i < par; i++) {
      arr.push(`.row-custom-${i}`)
    }
    const x = `${arr.toString()}`
    const observe_box = scrollzzz({
      targets: '.row-custom',
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
  transition: all 1s;
  opacity: 0;
  visibility: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 70vh;

  .v-icon {
    opacity: 0;
    visibility: hidden;
  }

  &.changed {
  transition: all 1s;
  opacity: 1;
  visibility: visible;

  .col-custom {
  transition: all 1s;
  transition-delay: .4s;
  opacity: 1;
  visibility: visible;
  }

  .v-icon {
    transition: all 1s;
    transition-delay: .8s;
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

}
.v-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;
  @media only screen and (max-width: $mobile) {
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
  transition: all 1s;
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

