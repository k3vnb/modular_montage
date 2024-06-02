function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomRGBVals(): number[] {
  const red = getRandomNumberInRange(0, 255);
  const green = getRandomNumberInRange(0, 255);
  const blue = getRandomNumberInRange(0, 255);
  return [red, green, blue];
}

export function getRandomHSLVals(): number[] {
  const hue = getRandomNumberInRange(0, 360);
  const saturation = getRandomNumberInRange(0, 100);
  const light = getRandomNumberInRange(0, 100);
  return [hue, saturation, light];
}
