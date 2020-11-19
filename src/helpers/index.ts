import numeral from 'numeral';
import { Product_price_formatted } from '../api/types/Product';

export const formatPrice = (
  formattedPrice?: Product_price_formatted | null,
  currency: string | null = 'NOK'
): string => {
  const amount = numeral(
    formattedPrice ? formattedPrice.netAmount / 100 : 0
  ).format('0.00');
  return currency ? `${amount} ${currency}` : amount;
};
