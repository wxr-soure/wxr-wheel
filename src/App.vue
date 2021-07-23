<template>
  <div id="app">
    <input-radio
      label="吐司"
      @radio-value="radio"
      :currentValue="this.value"
      >吐司</input-radio
    >
    <input-radio label="果汁" @radio-value="radio" :currentValue="this.value "
      >果汁</input-radio
    >
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    radio(item) {
      this.value = item;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
