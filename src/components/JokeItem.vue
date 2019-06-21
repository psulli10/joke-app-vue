<template lang="html">
  <div class="">
    <h4>{{joke.setup}}</h4>
    <button v-on:click="handleClick" type="button" name="punchline-button">Make me laugh</button>
    <h4 v-if="showPunchline">{{joke.punchline}}</h4>
  </div>
</template>

<script>
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
    }
  },
}
</script>

<style lang="css" scoped>
</style>
