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
          v-for="product in products"
          :product="product"
          :quantity="getProductQuantity(product)"
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
import { onMounted, ref } from 'vue';
import useCartStore from '../store/cart';
import Product from '../domain/Product';
import CartProductRow from '../components/CartProductRow/CartProductRow.vue';
import ApiClient from '../api/client';

const products = ref<Product[]>([]);
const cartStore = useCartStore();
const { cart, total } = storeToRefs(cartStore);

const onQuantityUpdate = (product: Product, quantity: number) => {
  cartStore.updateQuantity(product, quantity);
};

onMounted(async () => {
  const data = await ApiClient.fetchProducts();

  products.value = data.products;

  products.value.forEach((product) => cartStore.updateQuantity(product, 1));
});

const getProductQuantity = (product: Product) => cart.value[product.id]?.quantity;
</script>

<style scoped></style>
