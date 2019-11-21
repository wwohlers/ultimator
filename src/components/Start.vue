<template>
  <div>
    <p class="instructions">
      <a href="https://en.wikipedia.org/wiki/Ultimatum_game">The Ultimatum Game</a> is a classical economics game in which 
      one player proposes a way to divide a sum of money with another player. If the second
      player rejects the division, neither player receives any money.
      <br><br>
      The Ultimator Project is a variant of this game. You'll play 
      20 rounds against a computer, accepting or rejecting its offers, and accumulating points 
      instead of collecting money. Your goal is to accumulate as many points as possible.
      <br><br>
      <b>How to play: </b> It's simple. Of the 100 points to share, the computer will offer
      you some amount of points. If you accept, you receive the amount offered and the computer gets the rest of the 100. 
      If you reject, you both get nothing.
      <br><br>
      Keep in mind that you're playing against a learning algorithm. If you accept low offers,
      the computer will test your limits.
      <br><br>
      Designed and developed by Bill Wohlers.
    </p>
    <br>
    <button @click="start">START</button>
  </div>
</template>

<script>
export default {
  name: 'Start',
  
  methods: {
    start: function() {
      this.$parent.start();
    }
  },
}
</script>

<style scoped>

</style>
