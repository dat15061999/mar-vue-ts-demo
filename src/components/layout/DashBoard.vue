<script setup lang="ts">
import { useAuth } from '@/stores/auth'

const auth = useAuth();
</script>

<template>
  <div class="bg-blue-400">
    <p>Header</p>
    <button @click="auth.logout()">Logout</button>

    <div>
      <RouterView />
    </div>
  </div>
</template>
