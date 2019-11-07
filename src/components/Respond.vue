<template>
  <div>
    <p>
      Round {{ roundNumber }} of 20 | 
      The computer offers
    </p>
    <p class="offer">{{ this.offer }}</p>
    <button @click="respond(true)" class="green" :disabled="loading">ACCEPT</button>
    <button @click="respond(false)" class="red" :disabled="loading">REJECT</button>
  </div>
</template>

<script>
export default {
  name: 'Respond',

  props: {
    offer: Number,
    rounds: Array,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    //respond: Submits a response to parent
    respond: function(accepted) {
      this.loading = true;

      this.$parent.respond(this.offer, accepted);

      this.loading = false;
    }
  },

  computed: {
    //roundNumber: computes the current round number
    roundNumber: function() {
      return this.rounds.length + 1;
    }
  },
}
</script>

<style scoped>

</style>
