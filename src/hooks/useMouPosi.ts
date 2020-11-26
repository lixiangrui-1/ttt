import { ref, onMounted, onUnmounted } from 'vue'

function useMP() {
  const x = ref(0)
  const y = ref(0)
  const updata = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updata)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updata)
  })
  return { x, y }
}
export default useMP
