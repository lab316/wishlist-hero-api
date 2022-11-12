export interface Wishlist {
  AddedVia: string;
  _id: string;
  Shop: string;
  Items: Item[];
  created_at: Date;
  updated_at: Date;
  Hash: string;
  __v: number;
}

export interface Item {
  AddedVia: string;
  _id: string;
  ProductId: string;
  Price: number;
  ProductVariantId: string;
  ProductName: string;
  ProductImage: string;
  ProductLink: string;
  AddedOn: Date;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  link: string;
  variantId: number;
  image: string;
}
