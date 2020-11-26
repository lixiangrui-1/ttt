import { reactive, toRefs } from 'vue'
import axios from 'axios'
interface Ifata<T> {
  result: T | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}
function useURL<T>(url: string) {
  const data = reactive<Ifata<T>>({
    result: null,
    loading: true,
    loaded: false,
    error: null
  })

  axios
    .get(url)
    .then((res) => {
      data.loading = false
      data.loaded = true
      data.result = res.data
    })
    .catch((err) => {
      data.error = err
    })
  return {
    ...toRefs(data)
  }
}

export default useURL
