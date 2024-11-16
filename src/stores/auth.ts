import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API, LOCALSTORAGE } from '@/contants'
import useLocalstorage from '@/plugins/localStorage'
import { useRouter } from 'vue-router'

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}

export interface Status {
  data: User
  error: null
  loading: boolean
}

export interface Account {
  username: string
  password: string
}

export const useAuth = defineStore('useAuth', () => {
  const state = ref<Status>({
    loading: false,
  })

  const router = useRouter()

  const login = async (values: Account) => {
    try {
      const { data } = await axios.post(API.LOGIN, values)
      state.value.data = data

      useLocalstorage().setItem(LOCALSTORAGE.USER, data.firstName)
      useLocalstorage().setItem(LOCALSTORAGE.TOKEN, data.accessToken)

      await router.push({ name: 'home' })
    } catch (error) {
      console.log(error)
      state.value.error = error
    }
  }

  const logout =async () => {
    useLocalstorage().clearAll()
    await router.push({ name: 'login' })
  }

  return { state, login, logout }
})
