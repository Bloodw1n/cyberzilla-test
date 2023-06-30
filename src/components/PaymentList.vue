<template>
  <v-container class="pt-4">
    <h2 class="text-2xl font-bold mb-4">Платежи</h2>

    <v-row v-if="isLoading" class="fill-height" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
      </v-col>
    </v-row>

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

<script lang="ts">
import axios, { AxiosResponse } from 'axios';
import { defineComponent } from 'vue';
import {Payment} from "@/modules";

export default defineComponent({
  data() {
    return {
      payments: [] as Payment[],
      selectedPayment: null as Payment | null,
      showModal: false,
      isLoading: false
    };
  },

  mounted() {
    this.loadFromLocalStorage();
    if (this.payments.length === 0) {
      this.getPayments();
    }
  },
  methods: {
    async getPayments(): Promise<void> {
      this.isLoading = true;
      try {
        if (localStorage.getItem('payments')) {
          this.payments = JSON.parse(localStorage.getItem('payments')!) as Payment[];
        } else {
          const response: AxiosResponse<Payment[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.payments = response.data;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
        this.saveToLocalStorage();
      }
    },
    showPaymentDetails(payment: Payment): void {
      this.selectedPayment = payment;
      this.showModal = true;
    },
    saveToLocalStorage(): void {
      localStorage.setItem('payments', JSON.stringify(this.payments));
    },

    loadFromLocalStorage(): void {
      const payments = localStorage.getItem('payments');
      if (payments) {
        this.payments = JSON.parse(payments) as Payment[];
      }
    },

    closeModal(): void {
      this.selectedPayment = null;
      this.showModal = false;
    },
    calculateAmount(id: number | undefined): string {
      return (id ? id * Math.floor(Math.random() * (100000 - 100 + 1)) + 100 : '') as string;
    },
    truncateText(text: string | undefined, length: number): string | undefined {
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
    }
  }
});
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
