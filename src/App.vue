<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h1>Мое приложение</h1>
          <router-link to="/users">Пользователи</router-link> |
          <router-link to="/payments">Платежи</router-link>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
