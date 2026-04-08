import { useMemo, useState } from "react";
import { BalanceItem, MediaItem, MenuItem, ProductItem } from "../models/home";

export const useHomeData = () => {
  const [cartCount] = useState(99);
  const [chatCount] = useState(55);

  const balances: BalanceItem[] = useMemo(
    () => [
      {
        id: "cashback",
        title: "Cashback Saldo",
        subtitle: "Rp1.548",
        amount: "Rp1.548",
        icon: "cash",
      },
      {
        id: "checkin",
        title: "Cek-in!",
        subtitle: "Klaim 25RB!",
        icon: "ticket-percent",
      },
      {
        id: "transfer",
        title: "Kirim Uang",
        subtitle: "Gratis Admin",
        icon: "bank-transfer",
      },
    ],
    []
  );

  const menus: MenuItem[] = useMemo(
    () => [
      { id: "pulsa", title: "Pulsa, Tagihan dan Tiket", icon: "cellphone" },
      { id: "food", title: "ShopeeFood", icon: "food" },
      { id: "vip", title: "ShopeeVIP", icon: "crown" },
      { id: "gift", title: "Hadiah Shopee", icon: "gift" },
      { id: "fitcheck", title: "FitCheck Diskon 25%", icon: "percent" },
      {
        id: "instant",
        title: "Belanja Instan",
        icon: "flash",
      },
      {
        id: "mall",
        title: "Shopee Mall",
        icon: "shopping",
      },
      {
        id: "spay_nearby",
        title: "ShopeePay Sekitarmu",
        icon: "map-marker",
      },
      {
        id: "spaylater",
        title: "SPayLater",
        icon: "wallet",
      },
      {
        id: "all",
        title: "Lihat Semua",
        icon: "grid",
      },
    ],
    []
  );

  const live: MediaItem[] = useMemo(
    () => [
      {
        id: "l1",
        title: "Rak 4 Susun 17.500",
        thumbnail:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600",
        badge: "LIVE",
      },
      {
        id: "l2",
        title: "Barang Otomotif",
        thumbnail:
          "https://images.unsplash.com/photo-1581091018553-1a159b84f000?w=600",
        badge: "LIVE",
      },
    ],
    []
  );

  const videos: MediaItem[] = useMemo(
    () => [
      {
        id: "v1",
        title: "Sneakers",
        thumbnail:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        views: "15,1RB",
      },
      {
        id: "v2",
        title: "Fashion",
        thumbnail:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
        views: "774,8RB",
      },
    ],
    []
  );

  const products: ProductItem[] = useMemo(
    () => [
      {
        id: "p0",
        title: "iPhone 14 Pro Max 256GB",
        price: "Rp19.999.000",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1664478546384-d57c9d8b8d3c?w=600",
        isMall: true,
        isOri: true,
        coin: "200RB",
      },
      {
        id: "p-1",
        title: "MacBook Air M2 13”",
        price: "Rp17.499.000",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
        isMall: true,
        isOri: true,
        coin: "150RB",
      },
      {
        id: "p-2",
        title: "Samsung Smart TV 55 Inch",
        price: "Rp6.999.000",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
        isMall: true,
        isOri: true,
        coin: "120RB",
      },
      {
        id: "p1",
        title: "Innisfree Green Tea Set",
        price: "255RB",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1598440947619-2c66aa948fd8?w=600",
        isMall: true,
        isOri: true,
        coin: "100RB",
      },
      {
        id: "p2",
        title: "Sepeda Motor Aerox 155",
        price: "Rp28.499.000",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1589149098258-49514f4d107d?w=600",
        isMall: true,
        isOri: true,
        coin: "100RB",
      },
    ],
    []
  );

  return {
    cartCount,
    chatCount,
    balances,
    menus,
    live,
    videos,
    products,
  };
};
