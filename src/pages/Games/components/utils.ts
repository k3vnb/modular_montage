import { type HSLVals } from './types';

function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRGBVals(): number[] {
  const red = getRandomNumberInRange(0, 255);
  const green = getRandomNumberInRange(0, 255);
  const blue = getRandomNumberInRange(0, 255);
  return [red, green, blue];
}

export function getHSLString({ hue, saturation, light }: HSLVals): string {
  return `hsl(${hue}, ${saturation}%, ${light}%)`;
}

// avoid very dark or very light colors for better game play
const LIGHT_MIN = 15;
const LIGHT_MAX = 85;

export function getRandomHSLVals(): HSLVals {
  const hue = getRandomNumberInRange(1, 359);
  const saturation = getRandomNumberInRange(0, 100);
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
