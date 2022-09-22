<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row">
      <img :src="product.thumbnail" class="w-14 h-14 px-2 py-2" />
    </th>
    <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ product.title }}
    </td>
    <td class="py-4 px-6">
      <button
        type="submit"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="onClickPlusButton"
      >
        +
      </button>
      <span class="px-2">{{ quantity }}</span>
      <button
        type="submit"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="onClickMinusButton"
      >
        -
      </button>
    </td>
    <td class="py-4 px-6">
      {{ product.price }}
    </td>
    <td class="py-4 px-6">
      {{ total }}
    </td>
  </tr>
</template>

<script setup lang="ts">
import Product from '../../domain/Product';
import { computed } from 'vue';

interface Props {
  product: Product;
  quantity?: number;
}

interface Emits {
  (e: 'quantity', val: number): void;
}

const emits = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  quantity: 1,
});

const total = computed(() => props.quantity * props.product.price);

const onClickPlusButton = () => {
  emits('quantity', props.quantity + 1);
};

const onClickMinusButton = () => {
  emits('quantity', Math.max(0, props.quantity - 1));
};
</script>
