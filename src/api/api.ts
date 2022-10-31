import axios from "axios";

export type tagType = string;

export type newsType = {
  title: string;
  url: string;
  author: string;
  points: number;
  tags: tagType[];
};

export type hitsType = {
  hits: newsType[];
};

export class Api {
  private static baseUrl = "http://hn.algolia.com/api/v1/";

  static getLatestNews = async () => {
    const request = await axios<hitsType>(
      this.baseUrl + "/search?query=react&hitsPerPage=10&page=10"
    );

    return request.data;
  };
}
