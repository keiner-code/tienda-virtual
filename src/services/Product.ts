import { endPoint } from ".";

export async function getAllPopulation(likes: number) {
  const data = await fetch(endPoint.product.getPopulation(likes));
  return data.json();
}
export async function getAllLoved(loved: number) {
  const data = await fetch(endPoint.product.getLoved(loved));
  return data.json();
}
export default async function getAll() {
  const data = await fetch(endPoint.product.getAll());
  return data.json();
}
