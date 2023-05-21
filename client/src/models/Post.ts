export interface Post {
  id: number;
  title: string;
  body: string;
  isNew: boolean;
  price: number;
  salePrice: number | null;
}
