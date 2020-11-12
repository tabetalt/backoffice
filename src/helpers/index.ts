import numeral from 'numeral';
import { Product_price } from '../api/types/Product';

export const formatPrice = (
  price?: Product_price | null,
  currency: string | null = 'NOK'
) => {
  const amount = numeral(price ? price.netAmount / 100 : 0).format('0.00');
  return currency ? `${amount} ${currency}` : amount;
};
