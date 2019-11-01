<template>
  <div id="app">
    <Start v-if="onStart" />
    <Offer v-if="onOffer" />
    <Respond v-if="onRespond" :offer="nextOffer"/>
    <Finish v-if="onFinish" />
    <Score :rounds="rounds"/>
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
      nextOffer: 0,
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
      nextOffer = 50 - Math.round(10 * Math.random());
      onRespond = true;
    },

    //respond: Continues game after user response.
    respond: function(offer, accepted) {
      //Calculate scores
      var user = accepted ? offer : 0; 
      var computer = accepted ? (100 - offer) : 0;

      //Generate new round object and add it
      var round = { 
        type: "response", 
        offer: offer, 
        accepted: accepted, 
        userScore: user, 
        computerScore: computer,
      };
      rounds.push(round);

      //Next round
      this.next();
    },

    //decide: Determines a response, and continues game.
    decide: function(offer) {
      var decision = calculateDecision(rounds, offer); //Ask for algorithm's decision.
      
      //Calculate scores
      var user = decision ? (100 - offer) : 0;
      var computer = decision ? offer : 0;

      //Generate new round object and add it.
      var round = { 
        type: "offer", 
        offer: offer, 
        accepted: decision, 
        userScore: user, 
        computerScore: computer,
      };
      rounds.push(round);

      //Ask the algorithm for the next round's offer, and proceed.
      nextOffer = calculateOffer(rounds);
      this.next();
    },

    //calculateOffer: Calculates offer based on previous rounds.
    calculateOffer: function(rounds) {
      return 50; //Placeholder
    },

    //calculateDecision: calculates decision based on previous rounds and the user's offer.
    calculateDecision: function(rounds, offer) {
      return Math.random() >= 0.5 ? true : false; //Randomly returns true or false.
    },

    //next: goes to the next round, or ends the game if there are 20 rounds.
    next: function() {
      if (rounds.length < 20) {
        //Alternate rounds by switching the values of the booleans:
        onOffer = onReponse;
        onResponse = !onOffer;
      } else {
        endGame();
      }
    },

    //endGame: ends the game.
    endGame: function() {
      onRespond = false; onOffer = false;
      onFinish = true;
    }
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
