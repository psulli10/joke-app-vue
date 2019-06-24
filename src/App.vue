<template>
  <div id="app">
  <div class="wrapper">
  <div class="box header">Apportunity to laugh...</div>
  <div class="box sidebar">
    <div class="sidebar-links">
    <router-link :to="{ name: 'home' }"><button type="button">Home</button></router-link>
    <router-link :to="{ name: 'general' }"><button type="button">General</button></router-link>
    <router-link :to="{ name: 'knock_knock' }"><button type="button">Knock knock...</button></router-link>
    <router-link :to="{ name: 'programming' }"><button type="button">Programming</button></router-link>
    <router-link :to="{ name: 'favourites' }"><button type="button">Favourites</button></router-link>
    </div>
  </div>
  <div class="box content">
    <router-view id="view" :programmingJokes="programmingJokes" :generalJokes="generalJokes" :knock_knockJokes="knock_knockJokes" :favouriteJokes="favouriteJokes"></router-view>
 </div>
</div>
  </div>
</template>

<script>

import {eventBus} from './main.js'

export default {
  name: 'app',
  data() {
    return {
      programmingJokes: [],
      generalJokes: [],
      knock_knockJokes: [],
      favouriteJokes: []
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

  eventBus.$on('add-to-favourites', (favourite) =>{
    this.favouriteJokes.push(favourite)
  })

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

/* nav {
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin: 0 auto;
} */

router-link {
  text-decoration: none;
  color: white;
}

body {
  margin: 40px;
}

.sidebar {
		grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
	}

	.content {
		grid-area: content;
    height: 160vh;
    display: flex;
    align-content: space-around;
	}

	.header {
		grid-area: header;
	}


	.wrapper {
		display: grid;
    grid-gap: 10px;
		grid-template-columns: 20vw 37vw 37vw;
		grid-template-areas:
    "sidebar header header"
		"sidebar content content"
		"sidebar  content  content";
		background-color: #fff;
		color: #444;
	}


.box {
  background-color: #439fef;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
}

.header {
  background-color: #3870a0;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  margin-top: 5vh;
}

.sidebar-links button {
  height: 12vh;
  width: 15vw;
  background-color: #3870a0;
  color: white;
  font-size: 20px;
}



</style>
