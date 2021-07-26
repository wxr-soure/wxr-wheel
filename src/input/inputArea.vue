<template>
  <div class="inputarea">
    <textarea :maxlength="maxlength" class="area" v-model="currentText"> </textarea>
    <span class="subscript">{{currentLength}}/{{ maxlength }}</span>
  </div>
</template>

<script>
export default {
  props: {
    maxlength: {
      type: Number,
      default() {
        return 30;
      },
    },
  },
  data(){
      return {
     currentText:''
      }
  },
  computed:{
      currentLength(){
          return this.currentText.length
      }
  }
};
</script>

<style>
.inputarea {
  position: relative;
  display: inline-block;
}
.area {
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  resize:none;
}
.area:focus {
  border: 1px solid #409eff;
}
.subscript {
  color: #909399;
  font-size: 12px;
  position: absolute;
  display: inline-block;
  right: 0;
  padding: 0 10px;
  line-height: 56px;
}
</style>