<template>
  <div>
    <p>{{ this.offer }}</p>
    <button value="ACCEPT" @click="respond(true)" :disabled="loading"> <button value="REJECT" @click="respond(false)" :disabled="loading">
  </div>
</template>

<script>
export default {
  name: 'Respond',
  props: {
    offer: Number,
    loading: Boolean,
  },
  methods: {
    respond: function(accepted) {
      loading = true;
      this.$parent.getResponse(offer, accepted);
    }
  },
  watch: {
    //loading(oldVal, newVal): Handles when the loading prop changes.
    //Purpose: If loading is changed to false by parent, we clear out the component. Any other newVal does nothing.
    loading: function(oldVal, newVal) {
      if (newVal == false) {
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
