export type ButtonVarient = 'solid' | 'outline' | 'text';
export type ButtonColor = 'success' | 'danger' | 'gradient';
export type Query = { id: string };

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
