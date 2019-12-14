<template>
<div>
    <div v-if="!canLoad">
        <v-progress-circular

      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
    <p class="loading">Map is loading...</p>
    </div>

<div id="map-wrap" style="height: 60vh" v-if="canLoad">
 <no-ssr>
   <l-map :zoom=13 :center="latLng">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="latLng"></l-marker>
   </l-map>
 </no-ssr>
 <v-container fluid  class="address">
     <v-container>
     <v-row>
         <v-col sm="12" class="address-row">
            <h3>Address: <span>{{contact.acf.address}}</span></h3>
         </v-col>

     </v-row>
 </v-container>
 <i aria-hidden="true" class="v-icon notranslate custom-icon mdi mdi-anchor theme--light" data-v-03039c94=""></i>
 </v-container>
 </div>
</div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            latLng: [],
            canLoad: false
        }
    },
    props: ['contact'],

    
    created() {
        axios.get('https://www.mapquestapi.com/geocoding/v1/address?key=fyali5QTtiKShHAU4wRtccnoL1wABsdF&location='+this.contact.acf.postcode_map)
        .then(el=> {
            const result = el.data.results[0].locations[0].latLng
            for (let k in result) {
                this.latLng.push(result[k])
                this.canLoad = true
            }
        })
    },

    computed: {
        getCoords() {
            const arr = []
        }
    }
}
</script>
<style lang="scss" scoped>
#map-wrap {
    margin-bottom: 150px;
}

.address {
    border-bottom: 2px solid $darkblu;

}

.address-row {
    h3 {
        text-align: center;
    }
    span {
        color: $darkblu;
        font-size: 24px;
    }
}
.v-icon {
    position: absolute;
    top: 85%;
    left: 50%;
    background: $darkblu;
    padding: 10px;
    border-radius: 50%;
    transform: translateX(-50%);
    color: white;
    @media only screen and (max-width: $mobile) {
            top: 100%;

    }
} 
.v-progress-circular.v-progress-circular--indeterminate.purple--text {
    margin-left: 50%;
    margin-top: 70px;
    margin-bottom: 30px;
    transform: translateX(-50%);
}
.loading {
    margin-left: 50%;
    text-align: center;
    transform: translateX(-50%);
}
</style>
