import Dinero, { DineroObject } from 'dinero.js';
import { Price, Money, CurrencyCode } from '../generated/graphql';

type FormatPrice = {
  netAmount: string;
  grossAmount: string;
  vatAmount: string;
};

export const formatPrice = (price?: Price | null): FormatPrice => {
  const priceNetAmountValue = price?.netAmount as DineroObject;
  const priceGrossAmountValue = price?.grossAmount as DineroObject;
  const priceVatAmountValue = price?.vatAmount as DineroObject;

  return {
    netAmount: priceNetAmountValue
      ? Dinero(priceNetAmountValue).toFormat('0.00')
      : '0',
    grossAmount: priceGrossAmountValue
      ? Dinero(priceGrossAmountValue).toFormat('0.00')
      : '0',
    vatAmount: priceVatAmountValue
      ? Dinero(priceVatAmountValue).toFormat('0.00')
      : '0',
  };
};

export const formatMoney = (money?: Money | null): string => {
  if (!money) return '0';
  const moneyValue = money as DineroObject;
  const amount = moneyValue ? Dinero(moneyValue).toFormat('0.00') : '0';
  return amount;
};

export const valueFromString = (
  value: string,
  precision = 2,
  roundRequired = false
): number => {
  const nValue = parseFloat(value.replace(',', '.')) * Math.pow(10, precision);
  if (Number.isNaN(nValue)) return 0;
  return roundRequired ? Math.round(nValue) : Math.trunc(nValue);
};

export const moneyFromString = (
  value: string,
  precision = 2,
  currencyCode = CurrencyCode.Nok,
  roundRequired = false
): Money => {
  const nValue = valueFromString(value, precision, roundRequired);
  const price = {
    amount: nValue,
    currency: currencyCode,
    precision: precision,
  };

  return price;
};
