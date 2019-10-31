<template>
  <div>
    <p><span>User score: {{ this.getScores.userScore }}</span>, <span>Computer score: {{ this.getScores.computerScore }}</span></p>
    <p v-for="(r, index) in rounds" :key="index">{{ r.type }}, {{ r.offerVal }}, {{ r.response }}</p>
  </div>
</template>

<script>
export default {
    name: 'Score',

    props: {
        rounds: Array,
    },

    methods: {
        
    },

    computed: {
        //getScores: returns an object containing the scores of the players.
        getScores: function() {
            var userScore = 0;
            var computerScore = 0;
            //Get scores

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
