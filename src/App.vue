<template>
  <div id="app">
    <Start v-if="onStart" />
    <Offer v-if="onOffer" />
    <Respond v-if="onRespond" />
    <Finish v-if="onFinish" />
    <Score />
  </div>
</template>

<script>
import Start from './components/Start.vue'
import Offer from './components/Offer.vue'
import Respond from './components/Respond.vue'
import Finish from './components/Finish.vue'
import Score from './components/Score.vue'

export default {
  name: 'app',
  components: {
    Start,
    Offer,
    Respond,
    Finish,
    Score
  },
  data() {
    return {
      onStart: true,
      onOffer: false,
      onRespond: false,
      onFinish: false,
      rounds: null,
    }
  },
  computed: {
    onStart: function() { return this.onStart; },
    onOffer: function() { return this.onOffer; },
    onRespond: function() { return this.onRespond; },
    onFinish: function() { return this.onFinish; },
  },
  methods: {
    start: function() {
      onStart = false;
      onRespond = true;
    },

    //respond: Continues game after user response.
    respond: function(offer, accepted) {
      
    },

    //decide: Determines a response, and continues game.
    decide: function(offer) {
        
    },

    //calculateOffer: Calculates offer based on previous rounds.
    calculateOffer: function(rounds) {

    },

    //calculateDecision: calculates decision based on previous rounds and the user's offer.
    calculateDecision: function(rounds, )
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
</style>
