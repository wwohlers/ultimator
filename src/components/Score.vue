<template>
  <div>
    <p><span>User score: {{ this.getScores.userScore }}</span>, <span>Computer score: {{ this.getScores.computerScore }}</span></p>
    <p v-for="(r, index) in rounds" :key="index">
        <span v-if="r.type == 'offer'">Round {{ r.index + 1 }}: User offered {{ r.offer }}, computer {{ this.action(r.accepted) }}</span>
        <span v-if="r.type == 'response'">Round {{ r.index + 1 }}: Computer offered {{ r.offer }}, user {{ this.action(r.accepted) }}</span>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Score',

    props: {
        rounds: Array,
    },

    methods: {
        //action: returns "accepted" or "rejected" for "true" or "false", respectively
        action: function(response) {
            return response ? "accepted" : "rejected";
        }
    },

    computed: {
        //getScores: returns an object containing the scores of the players.
        getScores: function() {
            var userScore = 0;
            var computerScore = 0;
            //Get scores

            for (var i = 0; i < rounds.length; i++) {
                userScore += rounds[i].userScore;
                computerScore += roudns[i].computerScore;
            }

            //Return scores
            return {userScore: userScore, computerScore: computerScore, }
        },

        //getGameCount: returns the length of the rounds object,
        getGameCount: function() {
            return this.rounds.length;
        }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
