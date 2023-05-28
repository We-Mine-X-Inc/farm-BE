import assert from "assert";
import { CoinType, EconomicValue } from "wemine-apis";

const INCONGRUENT_COIN_TYPE_MSG = "EconomicValue coinTypes must be equal.";

export function revenueSum(augend: EconomicValue, addend: EconomicValue) {
  assert(
    augend.coinType == addend.coinType,
    generateCoinTypeError(augend.coinType, addend.coinType)
  );
  return {
    amount: augend.amount + addend.amount,
    coinType: augend.coinType,
  };
}

export function revenueDifference(
  minuend: EconomicValue,
  subtrahend: EconomicValue
) {
  assert(
    minuend.coinType == subtrahend.coinType,
    generateCoinTypeError(minuend.coinType, subtrahend.coinType)
  );
  return {
    amount: minuend.amount - subtrahend.amount,
    coinType: minuend.coinType,
  };
}

export function revenueDivision(
  dividend: EconomicValue,
  divisor: EconomicValue
) {
  assert(
    dividend.coinType == divisor.coinType,
    generateCoinTypeError(dividend.coinType, divisor.coinType)
  );
}

function generateCoinTypeError(coinType1: CoinType, coinType2: CoinType) {
  return `${INCONGRUENT_COIN_TYPE_MSG} Type1: ${coinType1}, Type2: ${coinType2}.`;
}
