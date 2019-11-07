<template>
  <div>
    <p>
      <span>User score <b>{{ this.getScores.userScore }}</b></span>
      <br>
      <span>Computer score <b>{{ this.getScores.computerScore }}</b></span>
    </p>
    <br>
    <span v-for="(r, index) in rounds" class="small" :key="index">
        <b>Round {{ index + 1 }}</b> |
        <span v-if="r.type == 'offer'">User offers <b>{{ r.offer }}</b>, computer </span> &nbsp;
        <span v-if="r.type == 'response'">Computer offers <b>{{ r.offer }}</b>, user</span> &nbsp;
        <b>{{ action(r.accepted) }}</b>
        <br>
    </span>
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
      return response ? "accepts" : "rejects";
    }
  },

  computed: {
    //getScores: returns an object containing the scores of the players.
    getScores: function() {
      var userScore = 0;
      var computerScore = 0;
      //Get scores

      for (var i = 0; i < this.rounds.length; i++) {
        userScore += this.rounds[i].userScore;
        computerScore += this.rounds[i].computerScore;
      }

      //Return scores
      return {userScore: userScore, computerScore: computerScore, }
    },

    //getGameCount: returns the length of the rounds object,
    getGameCount: function() {
      return this.rounds.length;
    },
  }
}
</script>

<style scoped>

</style>
