<template lang="html">
  <div class="">
    <ul>
      <JokeItem v-for="(joke, index) in jokes" :joke="joke" :key="index"></JokeItem>
    </ul>
  </div>
</template>

<script>
import JokeItem from '@/components/JokeItem'

export default {
  name: 'joke-list',
  props: ['jokes'],
  components: {
    JokeItem
  }
}
</script>

<style lang="css" scoped>
</style>
