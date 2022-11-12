import axios from "axios";
import { Wishlist } from "../types";

interface Response {
  ok: boolean;
  new: boolean;
  wishlist: Wishlist;
}

export const createWishlist = (store: string, customerId: string | null) =>
  axios.post<Response>(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist`,
    {
      CustomerId: customerId,
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
