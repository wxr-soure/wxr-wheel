<template>
  <div id="app">
    <input-select :data="optionData"></input-select>
  </div>
</template>

<script>
// import InputSelect from "./input/inputSelect.vue";
// import  from "./.vue";
export default {
  // components: {  },
  name: "App",
  data() {
    return {
      optionData: {
        value: "",
        option: [
          { key: "dd", label: "水果" },
          { key: "d2", label: "水果1" },
          { key: "d5", label: "水果2" },
        ],
      },
    };
  },
  methods: {},
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
