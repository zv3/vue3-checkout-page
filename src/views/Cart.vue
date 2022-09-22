<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th></th>
          <th scope="col" class="py-3 px-6">Description</th>
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Price</th>
          <th scope="col" class="py-3 px-6">Total</th>
        </tr>
      </thead>
      <tbody>
        <CartProductRow
          v-for="({ product, quantity }) in cartItems"
          :product="product"
          :quantity="quantity"
          @quantity="onQuantityUpdate(product, $event)"
        />
      </tbody>
    </table>

    <div class="flex mt-10 items-center">
      <div class="flex-auto">
        <router-link
          to="/checkout"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Checkout</router-link
        >
      </div>

      <div class="flex-auto text-gray-400 text-right text-2xl">Total: $ {{ total }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCartStore from '../store/cart';
import Product from '../domain/Product';
import CartProductRow from '../components/CartProductRow/CartProductRow.vue';

const cartStore = useCartStore();
const { cartItems, total } = storeToRefs(cartStore);

const onQuantityUpdate = (product: Product, quantity: number) => {
  cartStore.updateQuantity(product, quantity);
};
</script>

<style scoped></style>
