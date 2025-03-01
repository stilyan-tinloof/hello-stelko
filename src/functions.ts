import { HelloStelko } from './types';

export function helloStelko() {
  console.log('Hello Stelko');
}

export function helloStelkoWithName({ name }: HelloStelko) {
  console.log(`Hello ${name}`);
}
