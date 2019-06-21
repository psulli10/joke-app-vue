<template lang="html">
  <div class="">
  <h1>Favourites</h1>
  <JokeList :jokes="favouriteJokes"></JokeList>
    </div>
</template>

<script>
import JokeList from '../components/JokeList.vue'
export default {
  props: ['favouriteJokes'],
  components: {
    JokeList
  }

}
</script>

<style lang="css" scoped>
</style>
