<template>
<div>
  <div class="c-menu" @click="open = !open" style="opacity: 1;">
  <div class="c-menu__line">
    <div class="c-menu__line__wrap">
      <span></span>
      <span></span>
    </div>
  </div>
  <svg class="c-menu__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
	<path id="lineId" d="M6.6,11.2l2,2L7.9,14l-3.7-3.7l0.8-0.8l0.7,0.7c-0.1-0.3-0.1-0.7,0-1c0.1-0.4,0.3-0.7,0.5-0.9
		C6.7,7.6,7.3,7.5,8,7.7C7.9,6.9,8.1,6.2,8.7,5.7C9.1,5.2,9.5,5,10.1,5c0.5,0,1,0.2,1.5,0.7L13.8,8L13,8.8l-2-2
		C10.3,6.1,9.7,6,9.1,6.6C8.9,6.8,8.7,7.2,8.7,7.5c0,0.4,0.1,0.7,0.4,1l2.1,2.1l-0.8,0.8l-2-2C8,9,7.7,8.8,7.4,8.8
		c-0.3,0-0.6,0.1-0.8,0.3c-0.3,0.3-0.4,0.6-0.4,1C6.1,10.5,6.3,10.8,6.6,11.2z"></path>
	<path d="M18.5,3.9l-3.8,1.6c0.2,0.3,0.5,0.6,0.8,0.6c0.4,0.1,0.8,0,1.1-0.1c0.6-0.3,1-0.6,1.1-1.2l0.8,0.4
		C18.4,6,17.8,6.5,17,6.9c-0.7,0.3-1.3,0.3-2,0.1c-0.7-0.2-1.2-0.7-1.5-1.5c-0.3-0.8-0.3-1.5-0.1-2.1c0.3-0.7,0.8-1.1,1.4-1.4
		c0.7-0.3,1.3-0.3,1.9-0.1c0.6,0.2,1.1,0.6,1.4,1.3L18.5,3.9z M14.4,4.7l2.8-1.2c-0.2-0.4-0.4-0.7-0.8-0.8s-0.7-0.1-1.1,0.1
		s-0.7,0.4-0.9,0.8C14.2,3.9,14.2,4.3,14.4,4.7z"></path>
	<path d="M20.9,2.7l0.3,2.8l-1.1,0.1l-0.6-5.2l1.1-0.1l0.1,0.9c0.1-0.3,0.4-0.6,0.6-0.8c0.3-0.2,0.6-0.3,1-0.4
		c0.6-0.1,1.1,0.1,1.5,0.4c0.4,0.3,0.6,0.8,0.7,1.5l0.4,3.2l-1.1,0.1l-0.3-2.9c-0.1-1-0.6-1.4-1.4-1.3c-0.4,0-0.7,0.2-0.9,0.5
		C20.9,1.9,20.8,2.2,20.9,2.7z"></path>
	<path d="M30,3.5l0.5-2.8l1.1,0.2l-1,5.1l-1.1-0.2l0.2-0.9c-0.2,0.3-0.5,0.5-0.9,0.6c-0.3,0.1-0.7,0.2-1,0.1
		c-0.6-0.1-1-0.4-1.3-0.8c-0.3-0.4-0.4-1-0.3-1.6L26.9,0l1.1,0.2L27.4,3c-0.2,0.9,0.1,1.5,0.9,1.6c0.4,0.1,0.7,0,1-0.2
		C29.7,4.3,29.9,3.9,30,3.5z"></path>
	<path d="M37.8,7.3c0-0.4,0.1-0.7,0.3-0.9C38.3,6.2,38.5,6,38.9,6c0.4,0,0.7,0.1,0.9,0.3c0.3,0.2,0.4,0.5,0.5,0.9
		c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.3-0.5,0.4-0.9,0.5c-0.4,0-0.7-0.1-0.9-0.3C38,8,37.8,7.7,37.8,7.3z"></path>
	<path d="M45.3,15.3l-2.7,0.8l-0.3-1.1l5-1.5l0.3,1.1l-0.9,0.3c0.4,0.1,0.7,0.2,0.9,0.5c0.3,0.2,0.5,0.5,0.6,0.9
		c0.2,0.8,0.1,1.4-0.5,1.9c0.8,0.3,1.3,0.8,1.5,1.5c0.2,0.6,0.1,1.1-0.1,1.5c-0.2,0.5-0.7,0.8-1.3,1l-3.1,0.9l-0.3-1.1l2.7-0.8
		c0.9-0.3,1.3-0.8,1-1.6c-0.1-0.4-0.3-0.6-0.6-0.8c-0.3-0.2-0.7-0.2-1.1-0.1l-2.8,0.9l-0.3-1.1l2.7-0.8c0.5-0.1,0.8-0.3,1-0.6
		c0.2-0.2,0.2-0.5,0.1-0.9c-0.1-0.4-0.3-0.6-0.7-0.8C46.1,15.2,45.7,15.2,45.3,15.3z"></path>
	<path d="M46.2,29.2l0.3-4.1c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.1c0,0.7,0.1,1.2,0.5,1.5l-0.7,0.6
		c-0.5-0.6-0.8-1.4-0.7-2.3c0.1-0.7,0.3-1.3,0.9-1.8c0.5-0.5,1.2-0.7,2-0.6c0.8,0.1,1.5,0.4,1.9,0.9c0.4,0.6,0.6,1.2,0.6,1.9
		c-0.1,0.7-0.3,1.3-0.8,1.8c-0.5,0.5-1.1,0.7-1.8,0.6L46.2,29.2z M47.4,25.2l-0.2,3c0.4,0,0.8-0.1,1-0.3c0.3-0.3,0.4-0.6,0.4-1
		s-0.1-0.8-0.3-1.1S47.8,25.2,47.4,25.2z"></path>
	<path d="M46.1,31.8l-2.6-1l0.4-1l4.9,1.9l-0.4,1l-0.9-0.3c0.2,0.3,0.4,0.6,0.4,1c0.1,0.4,0,0.7-0.1,1
		c-0.2,0.5-0.6,0.9-1,1.1c-0.5,0.2-1,0.2-1.7-0.1l-3-1.2l0.4-1l2.7,1c0.9,0.3,1.5,0.1,1.8-0.6c0.1-0.4,0.1-0.7,0-1.1
		C46.9,32.3,46.6,32,46.1,31.8z"></path>
	<path d="M41.2,39.6l2.2,1.8l-0.7,0.9l-4.1-3.2l0.7-0.9l0.7,0.6c-0.1-0.3-0.2-0.7-0.1-1c0-0.4,0.2-0.7,0.4-1
		c0.4-0.5,0.8-0.7,1.3-0.8c0.5-0.1,1,0.1,1.6,0.5l2.5,2l-0.7,0.9l-2.3-1.8c-0.8-0.6-1.4-0.6-1.9,0c-0.2,0.3-0.3,0.6-0.3,1
		C40.6,38.9,40.8,39.3,41.2,39.6z"></path>
	<path d="M33.1,45.1c0.3,0.1,0.5,0.4,0.7,0.7c0.1,0.3,0.1,0.6,0,1c-0.1,0.3-0.4,0.5-0.7,0.7c-0.3,0.1-0.6,0.1-1,0
		c-0.3-0.1-0.5-0.4-0.7-0.7c-0.1-0.3-0.1-0.6,0-1c0.1-0.3,0.4-0.5,0.7-0.7C32.5,44.9,32.8,45,33.1,45.1z"></path>
	<path d="M21.7,47.4l0.8-2.7l1.1,0.3l-1.4,5L21,49.7l0.3-0.9c-0.2,0.3-0.5,0.4-0.9,0.5c-0.4,0.1-0.7,0.1-1.1,0
		c-0.8-0.2-1.2-0.7-1.3-1.4c-0.7,0.5-1.4,0.7-2.1,0.5c-0.6-0.2-1-0.5-1.2-0.9c-0.3-0.4-0.3-1-0.1-1.7l0.9-3.1l1.1,0.3l-0.8,2.8
		c-0.3,0.9,0,1.5,0.8,1.7c0.4,0.1,0.7,0.1,1-0.1c0.3-0.2,0.6-0.5,0.7-0.9l0.8-2.8L20,44l-0.8,2.8c-0.1,0.5-0.1,0.9,0,1.1
		c0.1,0.3,0.3,0.5,0.7,0.6c0.4,0.1,0.7,0.1,1.1-0.1C21.3,48.2,21.5,47.9,21.7,47.4z"></path>
	<path d="M9.5,40.7l3.3,2.5c0.2-0.3,0.3-0.7,0.1-1c-0.1-0.4-0.3-0.7-0.7-0.9c-0.5-0.4-1-0.5-1.6-0.4l-0.1-0.9
		c0.8-0.1,1.6,0.1,2.3,0.6c0.6,0.4,0.9,1,1,1.7c0.1,0.7-0.1,1.4-0.6,2c-0.5,0.7-1.1,1-1.8,1.1c-0.7,0.1-1.3-0.1-1.9-0.5
		c-0.6-0.4-0.9-1-1.1-1.6c-0.1-0.6,0-1.3,0.5-1.9L9.5,40.7z M12.2,43.8L9.8,42c-0.3,0.4-0.4,0.7-0.3,1.1c0.1,0.4,0.3,0.7,0.6,0.9
		c0.3,0.2,0.7,0.4,1.1,0.4C11.6,44.3,11.9,44.2,12.2,43.8z"></path>
	<path d="M7.3,39.2l2.3-1.7l0.6,0.9L6,41.5l-0.6-0.9L6.1,40c-0.4,0-0.7,0-1-0.1c-0.3-0.1-0.6-0.4-0.8-0.7
		c-0.3-0.5-0.5-1-0.4-1.5c0.1-0.5,0.4-1,0.9-1.4l2.6-1.9L8,35.4l-2.3,1.7c-0.8,0.6-0.9,1.2-0.5,1.8c0.2,0.3,0.5,0.5,0.9,0.6
		C6.5,39.6,6.9,39.5,7.3,39.2z"></path>
	<path d="M3.4,30.9l-2.7,0.9l-0.4-1L5.3,29l0.4,1l-0.9,0.3c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.5,0.5,0.6,0.9
		c0.2,0.6,0.2,1.1,0,1.5c-0.2,0.5-0.7,0.8-1.3,1l-3,1l-0.4-1l2.7-0.9c0.9-0.3,1.2-0.8,1-1.6c-0.1-0.4-0.3-0.6-0.7-0.8
		C4.3,30.7,3.9,30.7,3.4,30.9z"></path>
	<path d="M3,22c-0.3,0.2-0.6,0.3-0.9,0.2c-0.3-0.1-0.6-0.2-0.8-0.5C1.1,21.4,1,21.1,1,20.7c0.1-0.3,0.2-0.6,0.5-0.8
		s0.6-0.3,0.9-0.2s0.6,0.2,0.8,0.5c0.2,0.3,0.3,0.6,0.2,0.9C3.5,21.5,3.3,21.8,3,22z"></path>
</svg>
</div>
<div class="overlay overlay-slidedown" :class='{open : open}'>
			<nav>
				<ul>
          <nuxt-link to="/" exact class="menu-item" tag="li" @click.native="open = false" ><a href="#">HOME</a></nuxt-link>
          <nuxt-link to="/who-we-are" class="menu-item" tag="li" @click.native="open = false"><a href="#">WHO WE ARE</a></nuxt-link>

          <nuxt-link to="/boats" class="menu-item" tag="li" @click.native="open = false"><a href="#">BOATS</a></nuxt-link>
          <nuxt-link to="/privacy" class="menu-item" tag="li" @click.native="open = false"><a href="#">PRIVACY</a></nuxt-link>
          <v-icon center dark>mdi-anchor</v-icon>
				</ul>
			</nav>
		</div>
    <v-toolbar>
      <v-toolbar-title><a
          href="/"
          >BOAT FOR SALE</a></v-toolbar-title>
      

      <v-spacer></v-spacer>

      <v-toolbar-items>
         <nuxt-link
          to="/who-we-are"
          tag="div"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>WHO WE ARE</v-btn>
          
        </nuxt-link>
        <nuxt-link
          to="/boats"
          tag="div"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>OUR BOATS</v-btn>
          
        </nuxt-link>
                <nuxt-link
                          tag="div"

          to="/contact-us"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>CONTACT US</v-btn>
          
        </nuxt-link>
                <nuxt-link
                          tag="div"

          to="/privacy"
          class="v-btn v-btn--flat v-btn--text theme--light v-size--default"
          ><v-btn text>PRIVACY POLICY</v-btn>
          
        </nuxt-link>
      </v-toolbar-items>
    </v-toolbar>
      
  </div>


</template>

<script>


  export default {
    name: 'TheNav',
    async fetch ({ app, store }) {
      if (!store.state.menu.length) {
        const menu = await app.$http.$get(Config.wpDomain + Config.api.menu);
        store.commit("setMenu", menu);
      }
    },
    data () {
      return {
        menuItems: [''],
        animating: false,
        open: false
      }
    },

    computed: {
       menu () {
        if (this.$store.state.menu == null) return false;
        return this.$store.state.menu;
      },
    }
  }
</script>

<style lang="scss" scoped>
  section {
    margin: 0 !important;
  }
  .c-menu {
    position: fixed;
    display: none;
    cursor: pointer;
    pointer-events: auto;
    margin: 30px;
    z-index: 99999;
    cursor: pointer;
  @media only screen and (max-width: 480px) {
    display: inline-block;
  }
}

.v-toolbar {
    @media only screen and (max-width: 480px) {
    display: none;
  }
}

.v-toolbar__items {
  @media only screen and (max-width: 480px) {
    display: none;
  }
}

.v-toolbar__title {
  @media only screen and (max-width: 480px) {
    display: none;
  }
}

.theme--light.v-sheet {
  @media only screen and (max-width: 480px) {
    background-color: transparent;
  }
}

.c-menu__line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -56%, 0);
    z-index: 3;
      width: 30px;
    height: 30px;
   background: $darkblu;
  border-radius: 50%;
}

.c-menu__line__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 3;
    width: 100%;
    height: 100%;
}

.c-menu__line__wrap span {
    display: inline-block;
    position: absolute;
  width: 50%;
    left: 50%;
  top: 40%;
  transform: translateX(-50%);
    height: 1px;
    background: white;
}

.c-menu__line__wrap span:last-child {
    top: 55%;
    margin-top: -1px;
}

.c-menu__svg {
    fill: $darkblu;
    animation: rotating 10s linear infinite;
    transition: fill 0.2s;
}
@keyframes rotating{from{transform:rotate(0deg)}to{transform:rotate(360deg)}
}

.open-icon {
 span:nth-child(1) {
    transform: rotate(45deg) translate(-3px, 6px);
   transition: all .3s ease-in;
  }

  span:nth-child(2) {
    transform: rotate(-45deg) translate(-3px, -6px);
       transition: all .3s ease-in;
  }
}

//overlay slide down animation
.overlay-slidedown {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    transition: transform 0.4s ease-in-out, visibility      0s 0.4s;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background: $blu;
}
.overlay nav {
    text-align: center;
    position: relative;
    top: 50%;
    height: 60%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.overlay ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    position: relative;
    width: 80%;
}
.overlay ul li {
   width: 100%;
   margin-bottom: 20px;
}
.overlay ul li a {
color: white;
font-size: 34px;
}

.overlay-slidedown.open {
    visibility: visible;
    z-index: 9999;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    -webkit-transition: -webkit-transform 0.4s ease-in-out;
    transition: transform 0.4s ease-in-out;
}

a {
  text-decoration: none;
}

.brush {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: .3s;
  
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0,-50%);
    // width: 130px; //js to calculate width of each <a>
  }
}
 .v-btn--flat {
   &.nuxt-link-active {
 
      border-bottom: 5px solid $darkblu;
    .v-btn {
      margin-bottom: -5px;
    }
  
}
 }


.layer{
    height: 30px;
    position: absolute;
    width: 400px;
    background: black;
    z-index: 107;
    top: -20px;
}
.actv {
    z-index: 99999;
    transform: translateX(500px);
    transition: all .3s;
}
.actv-2 {
  width: 100%;
      transition: all .3s;

}

.v-btn {
  color: $darkblu;
}

ul {
  border-bottom: 2px solid $darkblu;
  position: relative;
  li {
  }
  .v-icon {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: $darkblu;
    padding: 10px;
    border-radius: 50%;
    margin-top: -20px;
  }
}




</style>
