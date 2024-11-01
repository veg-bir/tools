<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router = "true"
        >
          <el-sub-menu index="1">
            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <span>工具</span>
            </template>
            <el-menu-item index="/ip">ip查询</el-menu-item>
            <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
                <!-- <el-icon><icon-menu /></el-icon> -->
                <span>待定</span>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }
</script>