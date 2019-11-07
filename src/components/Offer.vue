<template>
  <div class="game">
    <p>
      Round {{ roundNumber }} of 20 | 
      Make an offer between 0 and 99.
    </p>
    <input type="text" v-model="offerVal" @keypress="onlyNumber"/>
    <p class="error" v-if="error">Offer not valid. Must be between 0 and 100.</p>
    <br>
    <button @click="submit" :disabled="loading">OFFER</button>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  data() {
    return {
      offerVal: "0",
      loading: false,
      error: false,
    }
  },

  props: {
    rounds: Array,
  },

  methods: {
    //respond(): Submits offer to computer.
    submit: function() {
      var offer = Number(this.offerVal);
      if (offer >= 0 && offer <= 100) {
        this.error = false;
        this.loading = true;

        this.$parent.decide(offer);

        this.loading = false;
      } else {
        this.error = true;
      }
    },

    //onlyNumber(event): Handles keypress event.
    //Purpose: allows only numbers, and only numbers less than 100.
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57)) {
          $event.preventDefault();
      }
      if (this.offerVal.length == 2) {
        $event.preventDefault();
      }
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
