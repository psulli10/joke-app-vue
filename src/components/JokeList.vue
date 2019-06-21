<template lang="html">
  <div class="">
    <ul>
      <JokeItem v-for="(joke, index) in programmingJokes" :joke="joke" :key="index"></JokeItem>
    </ul>
  </div>
</template>

<script>
import JokeItem from '@/components/JokeItem'

export default {
  name: 'joke-list',
  props: ['programmingJokes'],
  components: {
    JokeItem
  }
}
</script>

<style lang="css" scoped>
</style>
