import { GetProductsResponse } from './types';

const client = {
  fetchProducts(): Promise<GetProductsResponse> {
    return fetch('https://dummyjson.com/products?limit=5').then((response) => response.json());
  },
};

export default client;
