<template>
  <div
    class="flex items-center justify-center flex-col text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    <div class="w-32 h-32 mb-8">
      <SuccessIcon />
    </div>
    <h1 class="text-5xl">Congratulations!</h1>
    <p class="mt-8">Your order of value $ {{ netTotal }} has been placed.</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCartStore from '../store/cart';
import SuccessIcon from '../assets/icons/success.svg';

const cartStore = useCartStore();
const { netTotal } = storeToRefs(cartStore);
</script>

<style scoped></style>
