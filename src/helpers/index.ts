import numeral from 'numeral';
import { FormattedPrice } from '../generated/graphql';

export const formatPrice = (
  formattedPrice?: FormattedPrice | null,
  currency: string | null = 'NOK'
): string => {
  const amount = numeral(
    formattedPrice ? formattedPrice.netAmount / 100 : 0
  ).format('0.00');
  return currency ? `${amount} ${currency}` : amount;
};
