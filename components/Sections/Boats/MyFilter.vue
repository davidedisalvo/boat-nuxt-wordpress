<template>
 <v-container >
                   <h2>Filter</h2>

     <v-row class="center">

        <div data-v-36449e4c="" class="range">
            <input id="range-1" @change='filterBoatsByPrice()' type="range" min="0" max="400000" v-model="price" class="range-slider">
            <div class="price"><strong>Price:</strong> higher than {{commaInNumber}}£</div>
        </div>        
        <v-btn class="custom-button" outlined @click="filterBoatsByMotor">Motor Boats<v-icon>mdi-anchor</v-icon></v-btn>
        <v-btn class="custom-button" outlined @click="filterBoatsBySail">Sail Boats<v-icon>mdi-anchor</v-icon></v-btn>
        <v-btn class="custom-button" outlined @click="clearFilter">Clear filters<v-icon>mdi-anchor</v-icon></v-btn>

     </v-row>

      
    </v-container>
</template>
<script>
export default {
    props: ["boat"],
    data () {
        return {
            price: 0
        }
    },
    methods: {
        filterBoatsByMotor () {
            let motor = this.boat.filter( el => {
                return el.acf.type === 'Motor'
            })
            this.$store.commit('usingFilter', true)
            this.$store.commit('setFilterByMotor', motor)

        },

        filterBoatsBySail () {
            let sail = this.boat.filter( el => {
                return el.acf.type === 'Sail'
            })
            this.$store.commit('usingFilter', true)
            this.$store.commit('setFilterBySail', sail)
        },

        filterBoatsByPrice () {
            this.$store.commit('usingFilterByPrice', true)
            this.$store.commit('setFilterByPrice', this.price)
        },

        clearFilter() {
            this.$store.commit('usingFilter', false)
            this.$store.commit('usingFilterByPrice', false)
            this.$store.commit('resetPrice')
            this.price = 0
        }
    },

    computed: {
        commaInNumber () {
            if(this.$store.state.price > 1000) {
                const el = this.$store.state.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                return el
            } else {
                return this.$store.state.price
            }

        }
    }
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
}
.range{
    @media only screen and (max-width: $mobile) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    }
}
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.v-card {
    margin: 0 auto;
}
.v-card__text {
    p {
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;

    }   
}

.center {
    justify-content: center;
    align-items: center;
}
</style>
