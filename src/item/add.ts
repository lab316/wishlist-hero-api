import axios from "axios";
import { Product } from "../types";

interface Response {
  ok: boolean;
  error?: any;
  added: number;
}

export const addItem = (
  store: string,
  hash: string,
  product: Product,
  customerId: string | null
) =>
  axios.post<Response>(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist/${hash}`,
    {
      customerId,
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productLink: product.link,
      productVariantId: product.variantId,
      productImage: product.image,
    },
    {
      headers: {
        authority: "wishlist-hero.revampco.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "ja",
        "content-type": "application/json;charset=UTF-8",
        origin: `https://${store}`,
        referer: `https://${store}`,
      },
    }
  );
