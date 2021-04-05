import Dinero, { DineroObject } from 'dinero.js';
import { Price } from '../generated/graphql';

export const formatPrice = (formattedPrice?: Price | null): string => {
  const price = formattedPrice
    ? (formattedPrice.netAmount as DineroObject)
    : undefined;
  const amount = price ? Dinero(price).toFormat('0,0.00') : '0';

  return amount;
};
