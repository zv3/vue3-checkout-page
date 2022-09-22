export interface CreditCard {
  number?: number;
  expDate?: string;
  cvv?: number;
}

export interface Customer {
  name: string;
  address: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  creditCard: CreditCard;
}
