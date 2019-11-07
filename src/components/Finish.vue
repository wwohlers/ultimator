<template>
  <div class="finish">
    <p>Game over. {{ result }}</p>
    <button @click="restart">PLAY AGAIN</button>
  </div>
</template>

<script>
export default {
  name: 'Finish',

  props: {
    rounds: Array,
  },

  methods: {
    restart: function() {
      this.$parent.restart();
    }
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

      //Get difference
      var diff = Math.abs(computerScore - userScore);
      var winner = (userScore == computerScore) ? "It's a tie!" :
                    (userScore > computerScore) ? "You won " : "The computer won ";

      //Return scores
      if (userScore == computerScore) return "it's a tie!";
      return winner + " by " + diff + ((diff == 1) ? "point." : " points.");
    },
  }
}
</script>

<style scoped>

</style>
