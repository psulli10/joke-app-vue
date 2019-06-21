<template lang="html">
  <div class="">
  <h1>Programming</h1>
  <JokeList :jokes="programmingJokes"></JokeList>
    </div>
</template>

<script>
import JokeList from '../components/JokeList.vue'
export default {
  props: ['programmingJokes'],
  components: {
    JokeList
  }

}
</script>

<style lang="css" scoped>
</style>
