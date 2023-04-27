import { onMounted } from 'vue'
import { ref } from 'vue'
import { lStorage } from '@/utils/cache'
import { useAppStore } from '@/store/modules/app'

const useTheme = () => {
  const currentMode = ref('light')

  const options = ref([
    { label: '浅色', value: 'light' },
    { label: '深色', value: 'dark' },
    { label: '跟随系统', value: 'system' },
  ])

  const vibrancyMode = 'vibrancy_mode'

  const appStore = useAppStore()
  const handleThemeChange = async () => {
    await appStore.switchTheme(currentMode.value)
  }

  // const switchTheme = async (currentMode) => {
  //   if (currentMode === 'system') {
  //     await window.darkMode.system()
  //   } else {
  //     await window.darkMode.toggle(currentMode)
  //   }
  //   lStorage.set(vibrancyMode, currentMode)
  //   window.document.documentElement.setAttribute('data-theme', currentMode)
  // }

  onMounted(async () => {
    currentMode.value = await appStore.initTheme()
  })

  return {
    currentMode,
    options,
    handleThemeChange,
  }
}

export default useTheme
