import Dinero, { DineroObject } from 'dinero.js';
import { Price, Money, CurrencyCode } from '../generated/graphql';

export const formatPrice = (
  price?: Price | null,
  isVatRequired = false
): string => {
  if (!price) return '0';
  const priceValue = (
    isVatRequired ? price.netAmount : price.grossAmount
  ) as DineroObject;

  const amount = priceValue ? Dinero(priceValue).toFormat('0.00') : '0';
  return amount;
};

export const formatMoney = (value?: Money | null): string => {
  if (!value) return '0';

  const priceValue = value as DineroObject;

  const amount = priceValue ? Dinero(priceValue).toFormat('0.00') : '0';
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

export const vatRateCalculation = (
  vatRateObject: DineroObject,
  price: string
): string => {
  const dineroPrice = Dinero(moneyFromString(price) as DineroObject);
  const vatAmount = dineroPrice.multiply(vatRateObject.amount / 100);

  return dineroPrice.add(vatAmount).toFormat('0.00');
};

export const priceWithoutRate = (
  vatRateObject: DineroObject,
  price: string
): string => {
  const dineroPrice = Dinero(moneyFromString(price) as DineroObject);
  console.log(vatRateObject);

  return dineroPrice.divide(vatRateObject.amount / 100 + 1).toFormat('0.00');
};
