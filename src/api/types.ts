import Product from '../domain/Product';

export interface GetProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
