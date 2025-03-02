export type HelloStelko = {
  name: string;
};

export type HelloStelkoWithAge = HelloStelko & {
  age: number;
};

export type HelloStelkoWithAgeAndCity = HelloStelkoWithAge & {
  city: string;
};
