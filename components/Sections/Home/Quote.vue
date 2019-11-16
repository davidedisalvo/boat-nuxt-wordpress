<template>
    <v-container fluid class="quote">
      <v-row class="center" justify="center">
        <h2>They said about us</h2>      

        <v-col cols="10">
          <v-icon>fa-quote-left</v-icon>
          <v-icon right>fa-quote-right</v-icon>
          <p>{{acf.quote}}</p>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
      name: "Quote",
      props: ["acf"]

}
</script>
<style lang="scss" scoped>
.quote {
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
}

.justify-center {
    justify-content: center;

    & > div {
        position: relative;
        padding: 40px;

    }
}

.container {
  margin-bottom: 60px;
    .row-custom:nth-child(even) {
      justify-content: flex-end;

  }
    .row-custom:nth-child(odd) {
      justify-content: flex-start;
  }
}
.v-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;

  &:before {
    padding: 10px;
    color: black;
  }
}
.v-icon.fa-quote-left {
  top: 0;
  left: 0;
}

.v-icon.fa-quote-right {
  top: 100%;
  right: 0%;
  left: unset;
}
</style>

