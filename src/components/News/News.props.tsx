import { newsType } from "../../api/api.types";

export type newsProps = { news: newsType[]; title?: string; error?: string };
