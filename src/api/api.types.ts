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
