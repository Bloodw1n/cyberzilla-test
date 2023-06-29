<template>
  <v-container class="pt-4">
    <h2 class="text-2xl font-bold mb-4">Пользователи</h2>
    <v-row>
      <v-col v-for="user in users" :key="user.id" cols="4">
        <v-card class="mb-4" outlined>
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-text>
            <p>Email: {{ user.email }}</p>
            <p>Номер телефона: {{ user.phone }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="showUserDetails(user)" color="primary" dark>
              TODO-лист
            </v-btn>
            <v-btn @click="openEditModal(user)" color="primary" dark>
              Редактировать данные
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showTodoModal" max-width="600" scrollable width="auto">
      <v-card>
        <v-card-title>
          TODO-лист
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-list>
            <v-list-item v-for="todo in todos" :key="todo.id" class="d-flex align-center flex-row">
              <v-checkbox v-model="todo.completed" :class="{ 'line-through': todo.completed }" :label="truncateText(todo.title, 42)"></v-checkbox>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" variant="text" @click="closeTodoModal">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" variant="text" @click="saveTodoList">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-if="editUser" v-model="showEditModal" max-width="600">
      <v-card>
        <v-card-title>
          Окно редактирования
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form ref="editForm" @submit="saveUserData">
            <v-text-field
                v-model="editUser.email"
                :rules="emailValidationRules"
                label="Email"
                required
            ></v-text-field>
            <v-text-field
                v-model="editUser.name"
                label="Имя"
                required
            ></v-text-field>
            <v-text-field
                v-model="editUser.phone"
                :rules="phoneValidationRules"
                label="Номер телефона"
                required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="blue" dark>
            Сохранить
          </v-btn>
          <v-btn color="blue darken-1" variant="text" @click="cancelEdit">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      users: [],
      selectedUser: null,
      editUser: null,
      todos: [],
      showTodoModal: false,
      showEditModal: false,
      isLoading: false,
    };
  },
  computed: {
    emailValidationRules() {
      return [
        (v) => !!v || 'Email обязателен к заполнению',
        (v) => /.+@.+\..+/.test(v) || 'Введите корректный email',
      ];
    },
    phoneValidationRules() {
      return [
        (v) => !!v || 'Номер телефона обязателен к заполнению',
        (v) => /^\d{10}$/.test(v) || 'Введите 10 цифр номера телефона',
      ];
    },
  },
  mounted() {
    this.loadFromLocalStorage();
    if (this.users.length === 0) {
      this.getUsers();
    }
  },
  methods: {
    async getUsers() {
      this.isLoading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
        this.saveToLocalStorage();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async showUserDetails(user) {
      this.selectedUser = user;
      this.isLoading = true;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
        this.todos = response.data;
        this.showTodoModal = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    openEditModal(user) {
      this.selectedUser = user;
      this.editUser = { ...user };
      this.showEditModal = true;
    },
    saveUserData() {
      Object.assign(this.selectedUser, this.editUser);
      this.saveToLocalStorage();
      this.closeEditModal();
    },
    cancelEdit() {
      this.editUser = null;
      this.closeEditModal();
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    saveTodoList() {
      this.saveToLocalStorage();
      this.closeTodoModal();
    },
    closeTodoModal() {
      this.showTodoModal = false;
    },
    truncateText(text, length) {
      if (text && text.length) {
        if (text.length <= length) {
          return this.capitalizeFirstLetter(text);
        }
        const truncatedText = text.slice(0, length);
        return this.capitalizeFirstLetter(truncatedText);
      }
    },
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    saveToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    loadFromLocalStorage() {
      const users = localStorage.getItem('users');
      if (users) {
        this.users = JSON.parse(users);
      }
    },
  }
});
</script>
<style scoped>
.line-through label {
  text-decoration: line-through;
}
</style>