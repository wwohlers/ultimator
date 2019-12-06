<template>
  <div id="app">
    <h1>The Ultimator Project</h1>
    <Start v-if="onStart" />
    <Finish v-if="onFinish" :rounds="rounds"/>
    <Respond v-if="onRespond" :offer="nextOffer" :rounds="rounds"/>
    <Score v-if="showScore" :rounds="rounds"/>
  </div>
</template>

<script>
import Start from './components/Start.vue'
import Respond from './components/Respond.vue'
import Score from './components/Score.vue'
import Finish from './components/Finish.vue'
import {algo1, algo2} from './Algo.js'
var $ = require("jquery");

export default {
  name: 'app',

  components: {
    Start,
    Respond,
    Score,
    Finish
  },

  data() {
    return {
      onStart: true,
      onRespond: false,
      onFinish: false,
      showScore: false,
      rounds: [],
      nextOffer: 0,
      algo: 1,
    }
  },
  
  methods: {
    //start: starts the game from the initial state.
    start: function() {
      this.onStart = false;
      this.nextOffer = 40 - Math.round(10 * Math.random());
      this.onRespond = true;
      this.showScore = true;
    },

    //restart: restarts the game after ending.
    restart: function() {
      this.onFinish = false;
      this.rounds = [];
      this.onStart = true;
      this.onRespond = false;
      this.nextOffer = 0;
      this.showScore = false;
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
      this.rounds.push(round);

      //Ask the algorithm for the next round's offer, and proceed.
      this.nextOffer = this.offer(this.rounds, this.algo);

      //Next round
      this.next();
    },

    //next: goes to the next round, or ends the game if there are 20 rounds.
    next: function() {
      if (this.rounds.length == 20) {
        this.endGame();
      }
    },

    //endGame: ends the game.
    endGame: function() {
      this.onRespond = false;
      this.onFinish = true;

      var userScore = 0;
      var computerScore = 0;
      //Get scores

      for (var i = 0; i < this.rounds.length; i++) {
        userScore += this.rounds[i].userScore;
        computerScore += this.rounds[i].computerScore;
      }

      var resultObj = { algo: this.algo, user: userScore, cpu: computerScore };
      send(resultObj);
    },

    //decision: calulates a decision, accept or reject (true or false), based on past rounds and the user's offer
    decision: function(rounds, offer) {
      return Math.random() < .5
    },

    //determines next offer, algo as int 1 or 2
    offer: function(rounds, algo) {
      return (algo == 1) ? algo1.algo(rounds) : algo2.algo(rounds);
    },

    changeAlgo: function(newAlgo) {
      this.algo = newAlgo;
    },
  }
}

function send(data) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ultimator-c9e0.restdb.io/rest/data",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "5de9a90f4658275ac9dc2382",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(data)
  }

  $.ajax(settings).done(function (response) {
    
  });
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
  background-color: #dddddd;
  border: 1px solid #cacaca;
  border-radius: 4px;
  padding: 10px 12px 10px 12px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin: 10px;
}

#app input {
  font-size: 24px;
  border-style: solid;
  color: #444444;
  width: 100px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  border-color: #cccccc;
  border-radius: 2px;
  border-width: 1px;
  margin: 6px 0 8px 0;
}

#app button.green { color: #0f3d13; }
#app button.red { color: #540000; }

#app button:hover {
  background-color: #cacaca;
  transition: .5s;
}

#app select {
  padding: 10px;
  font-family: 'Montserrat';
  font-size: 16px;
  display: block;
  margin: auto;
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
