<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Платежи</h2>
    <ul>
      <li v-for="payment in payments" :key="payment.id" class="flex items-center mb-2">
        <span class="mr-2">{{ payment.title }}</span>
        <button @click="showPaymentDetails(payment)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Показать детали
        </button>
      </li>
    </ul>

    <div v-if="selectedPayment && showModal" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div class="modal-content bg-white p-4">
        <button @click="closeModal" class="close-btn absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Закрыть
        </button>
        <h3 class="text-xl font-bold mb-2">Детали платежа</h3>
        <p>Название: {{ selectedPayment.title }}</p>
        <p>Описание: {{ selectedPayment.body }}</p>
        <p>Сумма: {{ selectedPayment.id * Math.floor(Math.random() * (100000 - 100 + 1)) + 100 }}</p>
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
      payments: [],
      selectedPayment: null,
      showModal: false,
      isLoading: false
    };
  },
  mounted() {
    this.getPayments();
  },
  methods: {
    getPayments() {
      this.isLoading = true;
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.payments = response.data;
            this.isLoading = false;
          })
          .catch(error => {
            console.error(error);
            this.isLoading = false;
          });
    },
    showPaymentDetails(payment) {
      this.selectedPayment = payment;
      this.showModal = true;
    },
    closeModal() {
      this.selectedPayment = null;
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
