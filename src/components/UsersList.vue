<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Пользователи</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="flex items-center mb-2">
        <span class="mr-2">{{ user.name }}</span>
        <button @click="showUserDetails(user)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Показать детали
        </button>
      </li>
    </ul>

    <div v-if="selectedUser && showModal" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div class="modal-content bg-white p-4">
        <button @click="closeModal" class="close-btn absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Закрыть
        </button>
        <h3 class="text-xl font-bold mb-2">Детали пользователя</h3>
        <p>Email: {{ selectedUser.email }}</p>
        <p>Имя: {{ selectedUser.name }}</p>
        <p>Номер телефона: {{ selectedUser.phone }}</p>

        <h3 class="text-xl font-bold mt-4">TODO-лист</h3>
        <ul>
          <li v-for="todo in todos" :key="todo.id" class="flex items-center">
            <input type="checkbox" v-model="todo.completed" class="mr-2">
            <span>{{ todo.title }}</span>
          </li>
        </ul>

        <button @click="editUserData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Редактировать данные
        </button>
      </div>
    </div>

    <div v-if="editUser && showModal" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div class="modal-content bg-white p-4">
        <button @click="closeModal" class="close-btn absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Закрыть
        </button>
        <h3 class="text-xl font-bold mb-4">Редактирование данных пользователя</h3>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="editEmail">
              Email
            </label>
            <input v-model="editUser.email" type="email" id="editEmail" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="editName">
              Имя
            </label>
            <input v-model="editUser.name" type="text" id="editName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="editPhone">
              Номер телефона
            </label>
            <input v-model="editUser.phone" type="tel" id="editPhone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <button @click="saveUserData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Сохранить
          </button>
          <button @click="cancelEdit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
            Отмена
          </button>
        </form>
      </div>
    </div>

    <div v-if="isLoading" class="loader"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      editUser: null,
      todos: [],
      showModal: false,
      isLoading: false
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.isLoading = true;
      setTimeout(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
              this.users = response.data;
              this.isLoading = false;
            })
            .catch(error => {
              console.error(error);
              this.isLoading = false;
            });
      }, 2000);
    },
    getUserTodos(userId) {
      this.isLoading = true;
      axios
          .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
          .then(response => {
            this.todos = response.data;
            this.isLoading = false;
          })
          .catch(error => {
            console.error(error);
            this.isLoading = false;
          });
    },
    showUserDetails(user) {
      this.selectedUser = user;
      this.isLoading = true;

      setTimeout(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
            .then((response) => {
              this.todos = response.data;
              this.isLoading = false;
              this.showModal = true;
            })
            .catch((error) => {
              console.error(error);
              this.isLoading = false;
            });
      }, 2000);
    },
    editUserData() {
      this.editUser = { ...this.selectedUser };
    },
    saveUserData() {
      // Отправка изменений на сервер
      // ...

      // Обновление данных пользователя
      this.selectedUser.email = this.editUser.email;
      this.selectedUser.name = this.editUser.name;
      this.selectedUser.phone = this.editUser.phone;

      this.closeModal();
    },
    cancelEdit() {
      this.editUser = null;
      this.closeModal();
    },
    closeModal() {
      this.selectedUser = null;
      this.editUser = null;
      this.todos = [];
      this.showModal = false;
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
