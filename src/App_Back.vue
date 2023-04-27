<script setup>
// import Home from "./views/Home.vue";
import AppHead from './views/AppHead.vue'
import Sidebar from './views/Sidebar.vue'
import AppMain from './views/AppMain.vue'
import { onMounted } from 'vue'
// import ContentBox from "./views/ContentBox.vue";

onMounted(async () => {
  const isDarkMode = await window.darkMode.system()
  window.document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
})
</script>

<template>
  <div class="app-container">
    <AppHead></AppHead>
    <Sidebar></Sidebar>
    <AppMain></AppMain>
    <n-space m-50>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
  <!--  <AppMain>-->
  <!--    <ContentBox></ContentBox>-->
  <!--    <Home></Home>-->
  <!--  </AppMain>-->
</template>

<style lang="scss">
.app-container {
  display: flex;
  height: 100%;
}
</style>
