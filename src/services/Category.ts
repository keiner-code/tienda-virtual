import { endPoint } from ".";

export async function getAll() {
  const data = await fetch(endPoint.category.getAll());
  return data.json();
}
export async function getAllProductByCategory(categoryId: number) {
  const data = await fetch(endPoint.category.getAllProductCategory(categoryId));
  return data.json();
}
