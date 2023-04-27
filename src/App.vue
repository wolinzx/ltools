<script setup>
import { darkTheme } from 'naive-ui'
import AppMain from './views/AppMain.vue'
import SideBar from './views/SideBar/index.vue'
import AppHead from './views/AppHead.vue'
import { useAppStore } from '@/store/modules/app'
import { ref } from 'vue'

const appStore = useAppStore()

const themeJudge = () => {
  const theme = appStore.appThemeTest
  if (theme === 'system') {
  }
  return theme === 'dark' ? darkTheme : ''
}

const isDarkTheme = ref(false)

window.myApi.handleDarkModeChange((event, shouldUseDarkColors) => {
  isDarkTheme.value = shouldUseDarkColors
  appStore.setDocumentTheme(shouldUseDarkColors ? 'dark' : 'light')
})
</script>

<template>
  <n-config-provider :theme="isDarkTheme ? darkTheme : {}">
    <div class="app-container">
      <AppHead></AppHead>
      <SideBar></SideBar>
      <AppMain>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </AppMain>
    </div>
  </n-config-provider>
</template>

<style lang="scss">
.n-config-provider {
  width: 100%;
}
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
