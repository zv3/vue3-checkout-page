import { defineStore } from 'pinia';
import Product from '../domain/Product';
import { computed, ref } from 'vue';

interface CartItem {
  product: Product;
  quantity: number;
  subTotal: number;
}

interface Cart {
  [keyof: string]: CartItem;
}

const useCartStore = defineStore('cartStore', () => {
  const cart = ref<Cart>({});
  const discountPercent = ref(0);

  const updateQuantity = (product: Product, quantity: number) => {
    cart.value[product.id] = {
      product,
      quantity,
      subTotal: product.price * quantity,
    };
  };

  const total = computed(() => {
    const products = Object.values(cart.value).map((cartProduct) => cartProduct.product);

    return products.reduce((accum, product) => {
      const { subTotal } = cart.value[product.id];

      return accum + subTotal;
    }, 0);
  });

  const cartItems = computed<CartItem[]>(() => Object.values(cart.value));
  const discount = computed(() =>
    discountPercent.value ? Math.round(total.value * (discountPercent.value / 100)) : 0
  );
  const netTotal = computed(() => total.value - discount.value);

  const setDiscountPercent = (percent: number) => {
    discountPercent.value = percent;
  };

  return {
    cart,
    cartItems,
    total,
    discount,
    netTotal,
    updateQuantity,
    setDiscountPercent,
  };
});

export default useCartStore;
