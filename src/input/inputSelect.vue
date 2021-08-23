<template>
  <div class="inputSelect">
    <!-- 第一种 -->
    <select name="" id="" v-model="data.value">
      <option
        :value="item.key"
        v-for="(item, index) in data.option"
        :key="index"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "input-select",
  props: {
    data: {
      type: Object,
      default() {
        return {
          value: "",
          option: [
            {
              key: "default",
              label: "暂无数据",
            },
          ],
        };
      },
    },
  },
  data() {
    return {

    };
  },
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.inputSelect {
  select {
    width: 160px;
    height: 30px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid #409eff;
    }
  }
  .selectBox {
    display: inline-block;
    .inputBox {
      display: inline-block;
      position: relative;
      height: 30px;
      margin-bottom: 10px;
      input {
        height: 30px;
        cursor: default;
        outline: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        padding: 0;
      }
      img {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 5px;
        bottom: 25%;
        // .animation(animation1_1,2s,ease-in-out,0s,1,normal);
      }
    }
    .optionList {
      //   border: 1px solid #dcdfe6;
      border-radius: 4px;
      position: relative;
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px;
        border-color: transparent transparent white transparent;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
      }
      ul {
        list-style: none;
        padding: 0;
        li {
        }
      }
    }
  }
//动画
  // .keyframes(@r1,@r2,@name) {
  //   @keyframes @name {
  //     from {
  //       transform: rotate(@r1);
  //     }
  //     to {
  //       transform: rotate(@r2);
  //     }
  //   }
  //   // @-moz-keyframes @name /* Firefox */ {
  //   //   from {
  //   //     -moz-transform: rotate(@r1);
  //   //   }
  //   //   to {
  //   //     -moz-transform: rotate(@r2);
  //   //   }
  //   // }

  //   @-webkit-keyframes @name /* Safari 和 Chrome */ {
  //     from {
  //       -webkit-transform: rotate(@r1);
  //     }
  //     to {
  //       -webkit-transform: rotate(@r2);
  //     }
  //   }

  //   // @-o-keyframes @name /* Opera */ {
  //   //   from {
  //   //     -o-transform: rotate(@r1);
  //   //   }
  //   //   to {
  //   //     -o-transform: rotate(@r2);
  //   //   }
  //   // }
  // }
  // //固定模式
  // .animation(@animation-name, @animation-duration, @animation-timing-function, @animation-delay,
  // @animation-iteration-count,
  // @animation-direction) {
  //   animation: @arguments;
  //   /* Firefox: */
  //   -moz-animation: @arguments;
  //   /* Safari 和 Chrome: */
  //   -webkit-animation: @arguments;
  //   /* Opera: */
  //   -o-animation: @arguments;
  // }
  // .keyframes(0,180deg,animation1_1); //初始化
  // .keyframes(180deg,0,animation1_2); //初始化
}
</style>