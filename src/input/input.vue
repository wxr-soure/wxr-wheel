<template>
  <div id="input">
    <input
      type="text"
      v-model="value"
      :placeholder="placeholder"
      class="input"
      :class="[readonly?'readonly':'']"
      :readonly="readonly"
      @change="inputChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default() {
        return "请输入";
      },
    },
    readonly: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods:{
    inputChange(){
      // console.log(this.value)
    }
  }
};
</script>

<style>
.input {
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
}
.input:focus {
  border: 1px solid #409eff;
}
.readonly{
  cursor: not-allowed;
}
</style>