<template lang="html">
  <div class="">
    <h4>{{joke.setup}}</h4>
    <button v-on:click="handleClick" type="button" name="punchline-button">Make me laugh</button>
    <h4 v-if="showPunchline">{{joke.punchline}}</h4>
    <button v-if="showPunchline" v-on:click="handleFavouriteClick" type="button" name="favourite-button">Add to my favourites</button>
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
</style>
