import { Wishlist } from "../types";

interface Response {
  ok: boolean;
  wishlist: Wishlist;
}

export const getWishlist = (
  store: string,
  hash: string,
  customerId: string | null
) =>
  fetch(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist?${new URLSearchParams(
      customerId
        ? {
            h: hash,
            c: customerId,
          }
        : { h: hash }
    )}`,
    {
      method: "GET",
      headers: {
        authority: "wishlist-hero.revampco.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "ja",
        origin: `https://${store}`,
        referer: `https://${store}`,
      },
    }
  ).then((res) => res.json() as unknown as Response);
