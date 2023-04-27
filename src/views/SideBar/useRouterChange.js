import { useRouter } from 'vue-router'
import { ref } from 'vue'

const currentNav = ref('home')

const navList = ref([
  { label: '首页', value: 'home', routePath: '/' },
  { label: '测试', value: 'test', routePath: '404' },
])
const useRouterChange = () => {
  const router = useRouter()

  const handleNavClick = (nav) => {
    router.push(nav.routePath)
    currentNav.value = nav.value
  }

  return {
    currentNav,
    navList,
    handleNavClick,
  }
}

export default useRouterChange
