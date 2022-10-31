import axios from "axios";
import { hitsType } from "./api.types";
export * from "./api.types";

export class Api {
  private static baseUrl = "http://hn.algolia.com/api/v1/";

  static getLatestNews = async (searchQuery: string) => {
    const request = await axios<hitsType>(
      // this.baseUrl + `/search?query=${searchQuery}&hitsPerPage=10&page=10`  // good
      this.baseUrl + `1/1/1/search?query=${searchQuery}&hitsPerPage=10&page=10` // error
    );

    return request.data;
  };

  static getPopularNews = async () => {
    const request = await axios<hitsType>(
      this.baseUrl + `/search?query&hitsPerPage=10&page=10`
    );

    return request.data;
  };
}
