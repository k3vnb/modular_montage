function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRGBVals(): number[] {
  const red = getRandomNumberInRange(0, 255);
  const green = getRandomNumberInRange(0, 255);
  const blue = getRandomNumberInRange(0, 255);
  return [red, green, blue];
}

// avoid very dark or very light colors for better game play
const LIGHT_MIN = 15;
const LIGHT_MAX = 85;

export function getRandomHSLVals(): number[] {
  const hue = getRandomNumberInRange(1, 359);
  const saturation = getRandomNumberInRange(0, 100);
  const light = getRandomNumberInRange(LIGHT_MIN, LIGHT_MAX);
  return [hue, saturation, light];
}
