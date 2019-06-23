<template lang="html">
  <div class="">
  <h1>General</h1>
  <JokeList :jokes="generalJokes"></JokeList>
    </div>
</template>

<script>
import JokeList from '../components/JokeList.vue'
export default {
  props: ['generalJokes'],
  components: {
    JokeList
  }

}
</script>

<style lang="css" scoped>

</style>
