<template>
  <div class="game">
    <input type="text" v-model="offerVal" @keypress="onlyNumber"/>
    <button value="offer" @click="submit" :disabled="loading"/>
    <p class="error" v-if="error">Offer not valid. Must be between 0 and 100.</p>
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
    //Purpose: allows only numbers.
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57)) {
          $event.preventDefault();
      }
    }
  },
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
