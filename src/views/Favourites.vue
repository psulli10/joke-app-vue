<template lang="html">
  <div class="favourites">
    <div class="favourites-header">
    <h1>Favourites</h1>
    </div>
    <h3 v-if="!favouriteJokes">You've no favourites yet...</h3>
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

.favourites-header {
  display: flex;
  justify-content: space-around;
  width: inherit;
}
</style>
