import { fruits } from '../data/fruits.js';

export const fetchfruits = async () => {
  // simulate a network call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return fruits;
};

export const fetchFruitById = async (id: string) => {
  // simulate a network call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = fruits.find((todo) => todo.id === id);

  return res;
};
