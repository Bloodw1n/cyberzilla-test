<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-row class="mb-2">
            <v-col cols="12">
              <v-row align="center">
                <v-col cols="4" class="d-flex justify-start">
                  <h1>CyberZilla</h1>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                  <v-tabs v-model="activeTab" align-with-title>
                    <v-tab to="/users">Пользователи</v-tab>
                    <v-tab to="/payments">Платежи</v-tab>
                  </v-tabs>
                </v-col>
                <v-col cols="4" class="d-flex justify-end">
                  <v-btn @click="clearLocalStorage">Очистить localStorage</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
  methods: {
    clearLocalStorage() {
      localStorage.clear();
      location.reload();
    },
  },
});
</script>
