 <template>
  <div class="inputRadio">
    <input
      type="radio"
      :value="label"
      v-model="value"
      name="radio"
      @change="changeCheck"
    />
    <span :class="[currentValue == label ? 'checked' : '']">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return "备选项";
      },
    },
    currentValue: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    changeCheck() {
      this.$emit("radio-value", this.value);
    },
  },
};
</script>

<style lang="less">
.checked {
  color: #409eff;
}
</style>