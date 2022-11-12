import axios from "axios";

interface Response {
  ok: boolean;
  exists: boolean;
}

export const existsItem = (store: string, hash: string, productId: string) =>
  axios.get<Response>(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist/${hash}/has/${productId}`,
    {
      headers: {
        authority: "wishlist-hero.revampco.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "ja",
        origin: `https://${store}`,
        referer: `https://${store}`,
      },
    }
  );
