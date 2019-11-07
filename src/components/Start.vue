<template>
  <div>
    <p class="instructions">
      <a href="https://en.wikipedia.org/wiki/Ultimatum_game">The Ultimatum Game</a> is a classical economics game in which 
      one player proposes a way to divide a sum of money with another player. If the second
      player rejects the division, neither player receives any money.
      <br><br>
      The Ultimator Project is a variant of this game. You'll play 
      20 rounds against a computer, taking turns offering and responding, accumulating points 
      instead of collecting money. The player with more points wins.
      <br><br>
      <b>How to play: </b> It's simple. Of the 100 points to share, one player will offer
      some amount of points to the responding player. If he accepts, he 
      receives the amount offered and the offerer gets the rest. If he rejects, he receives nothing, but
      the offerer receives half of the offer.
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
