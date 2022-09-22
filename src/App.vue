<template>
  <div class="container mx-w-full h-full mx-auto flex items-center justify-center">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import ApiClient from "./api/client";
import useCartStore from "./store/cart";

const cartStore = useCartStore();

const loadProducts = async () => {
  const data = await ApiClient.fetchProducts();

  data.products.forEach((product) => cartStore.updateQuantity(product, 1));
}

loadProducts();
</script>
