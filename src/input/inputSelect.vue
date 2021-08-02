<template>
  <div class="inputSelect">
     <select name="" id="" v-model="data.value">
         <option :value="item.key" v-for="(item,index) in data.option" :key="index">{{item.label}}</option>
     </select>
  </div>
</template>

<script>
export default {
    name:'input-select',
props:{
    data:{
        type:Object,
        default(){
            return {
            value:'',
            option:[]
            }
        }
    }
}
}
</script>

<style>

</style>