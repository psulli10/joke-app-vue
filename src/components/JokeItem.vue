<template lang="html">
    <div class="wrapper">
    <div class="setup">
      <p>{{joke.setup}}</p>
    </div>
    <div class="punchline-buttons">
      <button v-if="!showPunchline"v-on:click="handleClick" type="button" name="show-punchline-button">Make me laugh</button>
      <button v-if="showPunchline" v-on:click="handleClick"type="button" name="hide-punchline-button">Stop... It's too much!</button>
      <button v-if="showPunchline" v-on:click="handleFavouriteClick" type="button" name="favourite-button">Add to my favourites</button>
      </div>
    <div class="punchline">
    <p v-if="showPunchline">{{joke.punchline}}</p>
  </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'
export default {
  name:"joke-item",
  props: ['joke'],

  data(){
    return {
      showPunchline: false
    }
  },


  methods: {
    handleClick(){
      if (this.showPunchline === false){
          this.showPunchline = true;
      }
      else if(this.showPunchline === true){
          this.showPunchline = false;
      }
    },

    handleFavouriteClick() {
      eventBus.$emit('add-to-favourites', this.joke)
    }
  },
}
</script>

<style lang="css" scoped>



.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 28vw 10vw 28vw;
  grid-template-areas:
  "setup punchline-buttons punchline";
  color: #444;
  padding: 5px;
  background-color: #eef4f9;
  margin: 5px;
}

.punchline-buttons {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

button {
  height: 5vh;
  color: white;
  background-color: blue;
}

button {
  height: 5vh;
  /* width: 15vw; */
  background-color: #3870a0;
  color: white;
  font-size: 15px;
}


</style>
