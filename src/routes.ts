import Cart from './views/Cart.vue';
import Checkout from './views/Checkout.vue';
import Success from './views/Success.vue';

export default [
  { name: 'home', path: '/', component: Cart },
  { name: 'checkout', path: '/checkout', component: Checkout },
  { name: 'success', path: '/success', component: Success },
];
