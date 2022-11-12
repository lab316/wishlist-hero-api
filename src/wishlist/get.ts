import axios from "axios";
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
  axios.get<Response>(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist`,
    {
      params: {
        h: hash,
        c: customerId,
      },
      headers: {
        authority: "wishlist-hero.revampco.com",
        accept: "application/json, text/plain, */*",
        "accept-language": "ja",
        origin: `https://${store}`,
        referer: `https://${store}`,
      },
    }
  );
