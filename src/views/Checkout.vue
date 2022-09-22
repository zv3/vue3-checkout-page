<template>
  <div class="flex w-full">
    <div class="flex-1 mr-10 border border-gray-600 p-7">
      <form @submit.prevent="onSubmit">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Name</label
          >
          <input
            type="text"
            v-model="customer.name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="John Doe"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Address</label
          >
          <input
            type="text"
            v-model="customer.address"
            id="address"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div class="flex mb-6">
          <div class="flex-1 mr-2">
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >City</label
            >
            <input
              type="text"
              v-model="customer.city"
              id="city"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div class="flex-1">
            <label
              for="state"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Sate</label
            >
            <input
              type="text"
              v-model="customer.state"
              id="state"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
        </div>

        <div class="flex mb-16">
          <div class="flex-1 mr-2">
            <label
              for="postCode"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Post Code</label
            >
            <input
              type="text"
              v-model="customer.postCode"
              id="postCode"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div class="flex-1">
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >City</label
            >
            <input
              type="text"
              v-model="customer.country"
              id="country"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
        </div>

        <div class="mb-6">
          <label
            for="creditCard.number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Credit Card</label
          >
          <input
            type="text"
            v-model="customer.creditCard.number"
            id="postCode"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div class="flex mb-16">
          <div class="flex-1 mr-2">
            <label
              for="expDate"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Expiration Date</label
            >
            <input
              type="text"
              v-model="customer.creditCard.expDate"
              id="expDate"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div class="flex-1">
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >CVV</label
            >
            <input
              type="text"
              v-model="customer.creditCard.cvv"
              id="cvv"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
        </div>

        <div class="mb-16">
          <label
            for="country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Coupon</label
          >
          <input
            type="text"
            :value="couponCode"
            id="country"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            @input="onChangeCouponCode"
          />
        </div>

        <div class="text-right">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>

    <div
      class="flex-1 text-sm font-medium text-gray-900 dark:text-gray-300 border border-gray-600 p-7"
    >
      <dl class="mb-16">
        <div class="flex mb-3">
          <dt>Total</dt>
          <dd class="ml-auto">$ {{ total }}</dd>
        </div>

        <div class="flex mb-3">
          <dt>Discount</dt>
          <dd class="ml-auto">$ {{ discount }}</dd>
        </div>

        <div class="flex mb-3">
          <dt>Net Amount</dt>
          <dd class="ml-auto">$ {{ netTotal }}</dd>
        </div>
      </dl>

      <h2 class="text-xl mb-2">Products</h2>
      <ul class="ml-5 mb-16">
        <li v-for="{ product, quantity, subTotal } in cartItems" class="flex mb-1">
          <dt>{{ product.title }} (x{{ quantity }})</dt>
          <dd class="ml-auto">$ {{ subTotal }}</dd>
        </li>
      </ul>

      <h2 class="text-xl">Address</h2>
      <p class="ml-5 mt-2">
        {{ customer.address }} <br />
        {{ customer.city }}, {{ customer.state }} <br />
        {{ customer.postCode }}, {{ customer.country }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { CreditCard, Customer } from '../domain/Customer';
import useCartStore from '../store/cart';

const router = useRouter();

const customer = ref<Customer>({
  name: 'John Doe',
  address: '983 Old Eagle School Rd #616',
  city: 'Wayne',
  state: 'PA',
  postCode: '19087',
  country: 'United States',
  creditCard: {
    number: 0,
    expDate: '22/11',
    cvv: 123,
  },
});

const couponCode = ref('');

const cartStore = useCartStore();

const { cartItems, netTotal, total, discount } = storeToRefs(cartStore);

const onChangeCouponCode = (event: Event) => {
  const target = event.target as HTMLInputElement;

  couponCode.value = target.value;

  if (couponCode.value === import.meta.env.VITE_DISCOUNT_CODE) {
    cartStore.setDiscountPercent(20);
  } else {
    cartStore.setDiscountPercent(0);
  }
};

const onSubmit = () => {
  router.push({ name: 'success' });
};
</script>

<style scoped></style>
