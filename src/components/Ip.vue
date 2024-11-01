<template>
  <div>
    <p>
      <el-text>{{ state.my_ip }}</el-text>
    </p>
    <el-input
      v-model="input"
      style="width: 240px"
      placeholder="请输入ip地址"
      clearable
      @keyup.enter="getIpProperty"
    />
    <el-button type="primary" @click="getIpProperty">查询</el-button>
    <el-text>{{ state.res }}</el-text>
  </div>
</template>

<script setup>
import { ipRequest, my_ip } from "../request/iprequest";
import { ref, reactive, onMounted } from 'vue'
const input = ref('')
const state = reactive({
  my_ip: '',
  address: '',
  Isp: '',
  res: ''
})

const getIpProperty = async () => {
  const results = await ipRequest(input.value)
  // console.log(results)
  if(results.resultcode != 200) {
    state.res = '查询失败'
  }else {
    var result = results.result
    state.address = result.Country + result.Province + result.City
    state.Isp = result.Isp
    state.res = state.address + ' ' + state.Isp
  }
};
onMounted(async () => {
  var result = await my_ip()
  if(result.status == 200){
    state.my_ip = result.data.ip
  }else state.my_ip = '127.0.0.1'
  
})
</script>
