<template>
  <div id="app">
    <Start v-if="onStart" />
    <Offer v-if="onOffer" />
    <Respond v-if="onRespond" />
    <Finish v-if="onFinish" />
    <Score />
  </div>
</template>

<script>
import Start from './components/Start.vue'
import Offer from './components/Offer.vue'
import Respond from './components/Respond.vue'
import Finish from './components/Finish.vue'
import Score from './components/Score.vue'

export default {
  name: 'app',
  components: {
    Start,
    Offer,
    Respond,
    Finish
  },
  data() {
    return {
      onStart: true,
      onOffer: false,
      onRespond: false,
      onFinish: false,
    }
  },
  computed: {
    onStart: function() { return this.onStart; },
    onOffer: function() { return this.onOffer; },
    onRespond: function() { return this.onRespond; },
    onFinish: function() { return this.onFinish; },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
