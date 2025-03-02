export type HelloStelko = {
  name: string;
};

export type HelloStelkoWithAge = HelloStelko & {
  age: number;
};
