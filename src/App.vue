<template>
  <div id="app">
    <image-upload-list></image-upload-list>
  </div>
</template>

<script>
import imageUploadList from "./uploadFiles/imageUploadList.vue";
export default {
  components: { imageUploadList },
  name: "App",
  data() {
    return {};
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
