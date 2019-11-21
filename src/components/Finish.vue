<template>
  <div class="finish">
    <p>Game over. {{ result }}.</p>
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
    //result: writes result message informing final user score.
    result: function() {
      var userScore = 0;
      var computerScore = 0;
      //Get scores

      for (var i = 0; i < this.rounds.length; i++) {
        userScore += this.rounds[i].userScore;
        computerScore += this.rounds[i].computerScore;
      }

      console.log(computerScore);
      return "You scored " + userScore;
    },
  }
}
</script>

<style scoped>

</style>
