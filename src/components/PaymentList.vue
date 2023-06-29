<template>
  <v-container class="pt-4">
    <h2 class="text-2xl font-bold mb-4">Платежи</h2>
    <v-card v-for="payment in payments" :key="payment?.id" class="mb-4">
      <v-card-title>
        {{ truncateText(payment?.title, 42) }}
      </v-card-title>
      <v-card-actions>
        <v-btn @click="showPaymentDetails(payment)" color="primary" dark>
          Детали платежа
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showModal" max-width="500px">
      <v-card>
        <v-card-title>
          Детали платежа
        </v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <p><b>Название</b>: {{ truncateText(selectedPayment?.title, 21) }}</p>
          <p><b>Описание</b>: {{ truncateText(selectedPayment?.body, 42) }}</p>
          <p><b>Сумма</b>: {{ calculateAmount(selectedPayment?.id) }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" variant="text" @click="closeModal">
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
    async getPayments() {
      this.isLoading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.payments = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    showPaymentDetails(payment) {
      this.selectedPayment = payment;
      this.showModal = true;
    },
    closeModal() {
      this.selectedPayment = null;
      this.showModal = false;
    },
    calculateAmount(id) {
      return id * Math.floor(Math.random() * (100000 - 100 + 1)) + 100 || '';
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
    }
  }
});
</script>
<style scoped>
</style>
