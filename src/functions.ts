import { HelloStelko, HelloStelkoWithAge } from './types';

export function helloStelko() {
  console.log('Hello Stelko');
}

export function helloStelkoWithName({ name }: HelloStelko) {
  console.log(`Hello ${name}`);
}

export function helloStelkoWithNameAndAge({ name, age }: HelloStelkoWithAge) {
  console.log(`Hello ${name} you are ${age} years old`);
}
