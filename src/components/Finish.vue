<template>
  <div class="finish">
    Game over, {{ result }}
  </div>
</template>

<script>
export default {
  name: 'Finish',

  props: {
    rounds: Array,
  },

  computed: {
    result: function() {
      var userScore = 0;
      var computerScore = 0;
      //Get scores

      for (var i = 0; i < this.rounds.length; i++) {
        userScore += this.rounds[i].userScore;
        computerScore += this.rounds[i].computerScore;
      }

      //Return scores
      if (userScore == computerScore) return "it's a tie!";
      return userScore > computerScore ? "user wins!" : "computer wins!";
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
