<script lang="ts" setup>
import { useAuth } from '@/stores/auth'

const store = useAuth()

const handleLogin = (event: Event): void => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  }
  store.login(data)
}
</script>

<template>
  <div class="about">
    <h1>This is an login page</h1>
    <div>
      <form method="post" @submit="handleLogin">
        <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />

          <br />

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <br />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
