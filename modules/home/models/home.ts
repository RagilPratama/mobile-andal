export interface MenuItem {
  id: string;
  title: string;
  icon: string;
}

export interface BalanceItem {
  id: string;
  title: string;
  subtitle: string;
  amount?: string;
  icon: string;
}

export interface MediaItem {
  id: string;
  title: string;
  thumbnail: string;
  badge?: string;
  views?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
  isMall?: boolean;
  isOri?: boolean;
  coin?: string;
}
