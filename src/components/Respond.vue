<template>
  <div>
    <p>{{ this.offer }}</p>
    <button @click="respond(true)" :disabled="loading">ACCEPT</button> <button @click="respond(false)" :disabled="loading">REJECT</button>
  </div>
</template>

<script>
export default {
  name: 'Respond',
  props: {
    offer: Number,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    respond: function(accepted) {
      this.loading = true;

      this.$parent.respond(this.offer, accepted);

      this.loading = false;
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
