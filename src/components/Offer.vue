<template>
  <div class="game">
    <input type="text" v-model="offerVal" @keypress="onlyNumber"/>
    <button value="offer" @click="respond" :disabled="loading"/>
    <p class="error" v-if="error">Offer not valid. Must be between 0 and 100.</p>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  props: {
    userScore: Number,
    computerScore: Number,
    loading: Boolean,
  },
  data() {
    return {
      offerVal: "0",
      error: false,
    }
  },
  methods: {
    //respond(): Handles when the main button is pressed.
    //Purpose: Converts the 
    respond: function() {
      var n = Number(offerVal);
      if (n >= 0 && n <= 100) {
        error = false;
        loading = true;
        this.$parent.decide(n);
      } else {
        error = true;
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
  watch: {
    //loading(oldVal, newVal): Handles when the loading prop changes.
    //Purpose: If loading is changed to false by parent, we clear out the component. Any other newVal does nothing.
    loading: function(oldVal, newVal) {
      if (newVal == false) {
        offerVal = "";
        error = false;
        loading = false;
      }
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
