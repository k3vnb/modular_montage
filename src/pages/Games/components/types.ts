import { HSL_VAL_KEYS, RGB_VAL_KEYS } from './constants';

export type HSLVals = {
  [key in typeof HSL_VAL_KEYS[number]]: number;
};

export type HSLValsKey = keyof HSLVals;

export type RGBVals = {
  [key in typeof RGB_VAL_KEYS[number]]: number;
};

export type RGBValsKey = keyof RGBVals;
