import * as DineroHelper from '../helpers';
import { Price, CurrencyCode } from '../generated/graphql';

it('DineroHelper test', () => {
  expect(DineroHelper.valueFromString('')).toEqual(0);
  expect(DineroHelper.valueFromString('-1')).toEqual(-100);
  expect(DineroHelper.valueFromString('+1')).toEqual(100);
  expect(DineroHelper.valueFromString('1', 0)).toEqual(1);
  expect(DineroHelper.valueFromString('1000', -2)).toEqual(10);
  expect(DineroHelper.valueFromString('1299')).toEqual(129900);
  expect(DineroHelper.valueFromString('12,01')).toEqual(1201);
  expect(DineroHelper.valueFromString('12.35')).toEqual(1235);
  expect(DineroHelper.valueFromString('012,534')).toEqual(1253);
  expect(DineroHelper.valueFromString('012,534', 2, true)).toEqual(1253);
  expect(DineroHelper.valueFromString('012,535', 2, true)).toEqual(1254);
  expect(DineroHelper.valueFromString('012,535', 2)).toEqual(1253);
  expect(DineroHelper.valueFromString('12,535', 3, true)).toEqual(12535);
  expect(DineroHelper.valueFromString('12,535', 3, false)).toEqual(12535);

  const price = {
    vatAmount: { amount: 250, precision: 2 },
    grossAmount: { amount: 10000, precision: 2, currency: CurrencyCode.Nok },
    netAmount: { amount: 10250, precision: 2, currency: CurrencyCode.Nok },
  } as Price;
  expect(DineroHelper.formatPrice(price)).toEqual('100.00');
  expect(DineroHelper.formatPrice(price, true)).toEqual('102.50');
  expect(DineroHelper.formatPrice()).toEqual('0');
});
