<template>
  <div id="app">
    <h1>The Ultimator Project</h1>
    <Start v-if="onStart" />
    <Offer v-if="onOffer" :rounds="rounds"/>
    <Respond v-if="onRespond" :offer="nextOffer" :rounds="rounds"/>
    <Finish v-if="onFinish" :rounds="rounds"/>
    <Score v-if="showScore" :rounds="rounds"/>
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
      showScore: false,
      rounds: [],
      nextOffer: 0,
    }
  },
  methods: {
    //start: starts the game from the initial state.
    start: function() {
      this.onStart = false;
      this.nextOffer = 50 - Math.round(10 * Math.random());
      this.onRespond = true;
      this.showScore = true;
    },

    //restart: restarts the game after ending.
    restart: function() {
      this.onFinish = false;
      this.rounds = [];
      this.onStart = true;
      this.nextOffer = 0;
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

#app h1 {
  font-weight: 200;
  font-size: 50px;
}

#app h2 {
  font-weight: 300;
  font-size: 30px;
}

#app p {
  font-size: 18px;
  margin: 20px;
}

#app p.error {
  color: #8a0606;
  font-size: 15px;
}

#app p.offer {
  font-size: 42px;
  font-family: 'Courier New';
  font-weight: 700;
}

#app p.instructions {
  margin: auto;
  text-align: left;
  width: 70%;
  font-size: 17px;
}

#app a {
  color: inherit;
}

#app span.small {
  font-size: 14px;
}

#app button {
  background-color: white;
  border-radius: 4px;
  border-color: #bdbdbd;
  border-width: 1px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin: 10px;
}

#app input {
  font-size: 28px;
  width: 100px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  border-color: #2c3e50;
  border-radius: 2px;
  border-width: 1px;
}

#app button.green { border-color: #0f3d13; color: #0f3d13; }
#app button.red { border-color: #540000; color: #540000; }

#app button:hover {
  background-color: #e8e8e8;
  transition: .5s;
}

@media only screen and (max-width: 600px) {
  #app {
    margin: 40px;
  }

  #app p.instructions {
    width: 100%;
  }
}
</style>
