import apiFetch from "./apiFetch";

export function getProducts(){
  return apiFetch("/products").then((u)=> u).catch((e)=> e);
}

export function getProductDetail(id){
  return apiFetch(`/products/${id}`).then((u)=>u).catch((e)=> e);
}

export function createProduct(body){
  return apiFetch(`/products`, {body: body}).then((u)=>u).catch((e)=> e);
}

export function editProduct(body, id){
  return apiFetch(`/products/${id}`, {method: "PATCH" ,body: body}).then((u)=>u).catch((e)=> e);
}

export function deleteProduct(id){
  return apiFetch(`/products/${id}`, {method: "DELETE"}).then((u)=>u).catch((e)=> e);
}