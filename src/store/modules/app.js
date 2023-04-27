import { defineStore } from 'pinia'
import { lStorage } from '@/utils/cache'

export const useAppStore = defineStore('app', {
  state() {
    return {
      appTheme: 'light',
      vibrancyMode: 'vibrancy_mode',
    }
  },
  getters: {
    appThemeTest() {
      return this.appTheme
    },
  },
  actions: {
    async switchTheme(currentMode) {
      if (currentMode === 'system') {
        await window.darkMode.system()
      } else {
        await window.darkMode.toggle(currentMode)
      }
      lStorage.set(this.vibrancyMode, currentMode)
      this.setDocumentTheme(currentMode)
    },
    async initTheme() {
      let isDarkMode
      const storageVibrancyMode = lStorage.get(this.vibrancyMode) || 'system'
      if (storageVibrancyMode === 'system') {
        isDarkMode = await window.darkMode.system()
      } else {
        isDarkMode = await window.darkMode.toggle(storageVibrancyMode)
      }
      this.setDocumentTheme(isDarkMode ? 'dark' : 'light')
      return storageVibrancyMode
    },
    setDocumentTheme(theme) {
      window.document.documentElement.setAttribute('data-theme', theme)
    },
    // setNaiveUITheme() {
    //
    // }
  },
})
