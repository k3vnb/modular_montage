import type { RGBVals, HSLVals } from './types';

function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRGBVals(): RGBVals {
  const red = getRandomNumberInRange(0, 255);
  const green = getRandomNumberInRange(0, 255);
  const blue = getRandomNumberInRange(0, 255);
  return { red, green, blue };
}

export function getRGBString({ red, green, blue }: RGBVals): string {
  return `rgb(${red}, ${green}, ${blue})`;
}

export function getHSLString({ hue, saturation, light }: HSLVals): string {
  return `hsl(${hue}, ${saturation}%, ${light}%)`;
}

// avoid very dark or very light colors for better game play
const LIGHT_MIN = 15;
const LIGHT_MAX = 85;
// hue is a circle, so 0 and 360 are the same color, avoid for better game play
const HUE_MIN = 1;
const HUE_MAX = 359;
// bump min saturation for better game play
const SAT_MIN = 9;
const SAT_MAX = 100;

export function getRandomHSLVals(): HSLVals {
  const hue = getRandomNumberInRange(HUE_MIN, HUE_MAX);
  const saturation = getRandomNumberInRange(SAT_MIN, SAT_MAX);
  const light = getRandomNumberInRange(LIGHT_MIN, LIGHT_MAX);
  return { hue, saturation, light };
}

// getSaturationGradient uses hue arg to create a gradient that changes saturation from 0% to 100%
export function getSaturationGradient (hue: number){
  return `linear-gradient(90deg, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))`;
}

export function getHint (correctVal: number, guessVal: number){
  return correctVal === guessVal ? 'Correct!' : `${guessVal} is too ${guessVal > correctVal ? 'high' : 'low'}`;
}

export function getIsWithinThreshold (correctVal: number, guessVal: number, threshold: number){
  return Math.abs(correctVal - guessVal) <= threshold;
}
