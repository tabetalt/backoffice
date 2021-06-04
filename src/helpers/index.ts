import Dinero, { DineroObject } from 'dinero.js';
import { Price, Money, CurrencyCode } from '../generated/graphql';

export const dineroFromMoney = (value: Money): Dinero.Dinero => {
  return Dinero(value as DineroObject);
};

export const dineroFromString = (value: string): Dinero.Dinero => {
  return dineroFromMoney(moneyFromString(value));
};

export const formatPrice = (
  price?: Price | null,
  isVatRequired = false
): string => {
  if (!price) return '0';
  const priceValue = dineroFromMoney(
    isVatRequired ? price.netAmount : price.grossAmount
  );
  return priceValue ? priceValue.toFormat('0.00') : '0';
};

export const formatMoney = (value?: Money): string => {
  return value ? dineroFromMoney(value).toFormat('0.00') : '0';
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

export const vatRateCalculation = (
  vatRateObject: DineroObject,
  price: string
): string => {
  const dineroPrice = dineroFromString(price);
  const vatAmount = dineroPrice.multiply(vatRateObject.amount / 100);

  return dineroPrice.add(vatAmount).toFormat('0.00');
};

export const priceWithoutRate = (
  vatRateObject: DineroObject,
  price: string
): string => {
  const dineroPrice = dineroFromString(price);
  return dineroPrice.divide(vatRateObject.amount / 100 + 1).toFormat('0.00');
};
