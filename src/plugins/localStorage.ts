import { LOCALSTORAGE } from '@/contants'

const useLocalstorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key: string) => {
    localStorage.getItem(key)
  }

  const clearAll = () => {
    localStorage.clear()
  }

  const isAuthenticated = () => {
    const user = localStorage.getItem(LOCALSTORAGE.USER)
    const token = localStorage.getItem(LOCALSTORAGE.TOKEN)
    return user && token
  }

  return {
    setItem,
    getItem,
    clearAll,
    isAuthenticated
  }
}

export default useLocalstorage
