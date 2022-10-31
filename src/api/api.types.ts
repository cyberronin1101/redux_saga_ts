export type tagType = string;

export type newsType = {
  title: string;
  url: string;
  author: string;
  points: number;
  num_comments: number;
  created_at: string;
  tags: tagType[];
};

export type hitsType = {
  hits: newsType[];
};
