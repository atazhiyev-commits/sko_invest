export interface NewsItem {
  documentId: number;
  title_news: string;
  description: string;
  date_news: string;
  first_image: first_image;
  image_news: any;
}

type first_image = {
  id: number;
  url: string;
};

export interface storeType {
  news: data;
  fetchNews: () => void;
}

type data = {
  data: NewsItem[];
  meta: any;
};
