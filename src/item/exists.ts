interface Response {
  ok: boolean;
  exists: boolean;
}

export const existsItem = (store: string, hash: string, productId: string) =>
  fetch(
    `https://wishlist-hero.revampco.com/storefront/api/store/${store}/wishlist/${hash}/has/${productId}`,
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
