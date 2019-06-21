<template lang="html">
  <div class="">
  <h1>Knock knock...</h1>
  <JokeList :jokes="knock_knockJokes"></JokeList>
    </div>
</template>

<script>
import JokeList from '../components/JokeList.vue'
export default {
  props: ['knock_knockJokes'],
  components: {
    JokeList
  }

}
</script>

<style lang="css" scoped>
</style>
