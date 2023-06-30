<template>
  <v-container class="pt-4">
    <h2 class="text-2xl font-bold mb-4">Пользователи</h2>
    <v-row v-if="isLoading" class="fill-height" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
      </v-col>
    </v-row>
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
        <v-card-actions class="justify-end">
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
                no-case-change
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
        <v-card-actions class="justify-end">
          <v-btn color="blue darken-1" variant="text" @click="cancelEdit">
            Закрыть
          </v-btn>
          <v-btn color="blue" @click="saveUserData" dark>
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import {Todo, User} from '@/modules';
import axios, { AxiosResponse } from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      users: [] as User[],
      selectedUser: null as User | null,
      editUser: null as User | null,
      todos: [] as Todo[],
      showTodoModal: false,
      showEditModal: false,
      isLoading: false,
    };
  },
  computed: {
    emailValidationRules(): ((v: string) => string | true)[] {
      return [
        (v: string) => !!v || 'Email обязателен к заполнению',
        (v: string) => /.+@.+\..+/.test(v) || 'Введите корректный email',
      ];
    },
    phoneValidationRules(): ((v: string) => string | true)[] {
      return [
        (v: string) => !!v || 'Номер телефона обязателен к заполнению',
        (v: string) => /^\d{10}$/.test(v) || 'Введите 10 цифр номера телефона',
      ];
    },
  },
  async mounted() {
    this.loadFromLocalStorage();
    if (this.users.length === 0 || this.todos.length === 0) {
      await Promise.all([this.getUsers(), this.getTodos()]);
    }
  },
  methods: {
    async getUsers(): Promise<void> {
      try {
        const response: AxiosResponse<User[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
        this.saveToLocalStorage();
      } catch (error) {
        console.error(error);
      }
    },

    async getTodos(): Promise<void> {
      try {
        const response: AxiosResponse<Todo[]> = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.todos = response.data;
        this.saveToLocalStorage();
      } catch (error) {
        console.error(error);
      }
    },
    async showUserDetails(user: User): Promise<void> {
      this.selectedUser = user;
      this.isLoading = true;
      try {
        if (localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos')!).length > 0) {
          this.todos = JSON.parse(localStorage.getItem('todos')!) as Todo[];
          this.showTodoModal = true;
        } else {
          const response: AxiosResponse<Todo[]> = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
          this.todos = response.data;
          this.showTodoModal = true;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    openEditModal(user: User): void {
      this.selectedUser = user;
      this.editUser = { ...user };
      this.showEditModal = true;
    },
    saveUserData(): void {
      if (this.selectedUser && this.editUser) {
        Object.assign(this.selectedUser, this.editUser);
        this.saveToLocalStorage();
        this.closeEditModal();
      }
    },
    cancelEdit(): void {
      this.editUser = null;
      this.closeEditModal();
    },
    closeEditModal(): void {
      this.showEditModal = false;
    },
    saveTodoList(): void {
      this.saveToLocalStorage();
      this.closeTodoModal();
    },
    closeTodoModal(): void {
      this.showTodoModal = false;
    },
    truncateText(text: string, length: number): string | undefined {
      if (text && text.length) {
        if (text.length <= length) {
          return this.capitalizeFirstLetter(text);
        }
        const truncatedText = text.slice(0, length);
        return this.capitalizeFirstLetter(truncatedText);
      }
    },
    capitalizeFirstLetter(text: string): string {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    saveToLocalStorage(): void {
      localStorage.setItem('users', JSON.stringify(this.users));
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadFromLocalStorage(): void {
      const users = localStorage.getItem('users');
      const todos = localStorage.getItem('todos');
      if (users) {
        this.users = JSON.parse(users) as User[];
      }
      if (todos) {
        this.todos = JSON.parse(todos) as Todo[];
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
