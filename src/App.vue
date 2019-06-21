<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'general' }">General</router-link>
      <router-link :to="{ name: 'knock_knock' }">Knock knock...</router-link>
      <router-link :to="{ name: 'programming' }">Programming</router-link>
      <router-link :to="{ name: 'favourites' }">Favourites</router-link>
    </nav>
    <router-view id="view" :programmingJokes="programmingJokes"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      programmingJokes: [],
      generalJokes: [],
      knock_knockJokes: []
    }
  },


mounted() {
  fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
  .then(result => result.json())
  .then(jokes => this.programmingJokes = jokes)

  fetch('https://official-joke-api.appspot.com/jokes/general/ten')
  .then(result => result.json())
  .then(jokes => this.generalJokes = jokes)

  fetch('https://official-joke-api.appspot.com/jokes/knock-knock/ten')
  .then(result => result.json())
  .then(jokes => this.knock_knockJokes = jokes)

}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin: 0 auto;
}

</style>
