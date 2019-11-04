<template>
  <div id="app">
    <Start v-if="onStart" />
    <Offer v-if="onOffer" />
    <Respond v-if="onRespond" :offer="nextOffer"/>
    <Finish v-if="onFinish" :rounds="rounds"/>
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
      rounds: [],
      nextOffer: 0,
    }
  },
  methods: {
    start: function() {
      this.onStart = false;
      this.nextOffer = 50 - Math.round(10 * Math.random());
      this.onRespond = true;
    },

    //respond: Continues game after user response.
    respond: function(offer, accepted) {
      //Calculate scores
      var user = accepted ? offer : 0; 
      var computer = accepted ? (100 - offer) : Math.ceil(0.5 * offer);

      //Generate new round object and add it
      var round = { 
        type: "response", 
        offer: offer, 
        accepted: accepted, 
        userScore: user, 
        computerScore: computer,
      };
      this.rounds.push(round);

      //Next round
      this.next();
    },

    //decide: Determines a response, and continues game.
    decide: function(offer) {
      var decision = this.calculateDecision(this.rounds, offer); //Ask for algorithm's decision.
      
      //Calculate scores
      var user = decision ? (100 - offer) : Math.ceil(0.5 * offer);
      var computer = decision ? offer : 0;

      //Generate new round object and add it.
      var round = { 
        type: "offer", 
        offer: offer, 
        accepted: decision, 
        userScore: user, 
        computerScore: computer,
      };
      this.rounds.push(round);

      //Ask the algorithm for the next round's offer, and proceed.
      this.nextOffer = this.calculateOffer(this.rounds);
      this.next();
    },

    //calculateOffer: Calculates offer based on previous rounds.
    calculateOffer: function(rounds) {
      return rounds.length; //Placeholder
    },

    //calculateDecision: calculates decision based on previous rounds and the user's offer.
    calculateDecision: function(rounds, offer) {
      if (rounds) {
        return offer > 40 ? true : false; //Randomly returns true or false.
      } else {
        return offer > 30 ? true : false;
      }
    },

    //next: goes to the next round, or ends the game if there are 20 rounds.
    next: function() {
      if (this.rounds.length < 20) {
        //Alternate rounds by switching the values of the booleans:
        this.onOffer = this.onRespond;
        this.onRespond = !this.onOffer;
      } else {
        this.endGame();
      }
    },

    //endGame: ends the game.
    endGame: function() {
      this.onRespond = false; this.onOffer = false;
      this.onFinish = true;
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
