<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h1>CyberZilla</h1>
          <v-tabs v-model="activeTab">
            <v-tab to="/users">Пользователи</v-tab>
            <v-tab to="/payments">Платежи</v-tab>
          </v-tabs>
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
  data() {
    return {
      activeTab: null,
    };
  },
});
</script>
