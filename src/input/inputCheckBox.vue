<template>
  <div class="inputCheckBox" :class="[disabled? 'disabled' : '']">
    <input type="checkbox" v-model="value" :disabled="disabled" />
    <span :class="[value ? 'checked' : '']">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: {
      type: String,
      default() {
        return "";
      },
    },
    disabled:{
        type:Boolean,
        default(){
            return false
        }
    }
  },
  data() {
    return { 
        value: "" 
        };
  },
  methods: {
  },
};
</script>

<style>
.disabled{
    cursor: not-allowed;
    color:#dcdfe6
}
.checked {
  color: #409eff;
}
</style>