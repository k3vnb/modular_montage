import { HSL_VAL_KEYS } from './constants';

export type HSLVals = {
  [key in typeof HSL_VAL_KEYS[number]]: number;
};

export type HSLValsKey = keyof HSLVals;
