import axios from "axios";

interface Response {
  ok: boolean;
  deleted: boolean;
}

export const removeItem = (store: string, hash: string, variantId: number) =>
  axios.post<Response>(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist/${hash}/delete/${variantId}`,
    {
      headers: {
        authority: "wishlist-hero.revampco.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "ja",
        "content-length": "0",
        origin: `https://${store}`,
        referer: `https://${store}`,
      },
    }
  );
