const API = "https://inshorts.deta.dev/news?category=";

export const get = (category) => {
  return fetch(API + category).then((Response) => Response.json());
};
