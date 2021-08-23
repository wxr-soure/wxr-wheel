<template>
  <div id="app">
    <input-date-range :data="datePicker"> </input-date-range>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datePicker: {
        required: false,
        labelOne: "开始日期",
        labelTow: "结束日期",
        value1: "",
        value2: "",
        value: "",
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
