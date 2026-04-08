import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
}

interface Section {
  title: string;
  items: MenuItem[];
}

export const AllMenusScreen = () => {
  const router = useRouter();

  const sections: Section[] = [
    {
      title: "Kategori",
      items: [
        {
          id: "data-pribadi",
          title: "Data Pribadi",
          icon: "account",
        },
        {
          id: "detail-kehadiran",
          title: "Detail Kehadiran",
          icon: "calendar-check",
        },
        {
          id: "transaksi",
          title: "Transaksi",
          icon: "bank-transfer",
        },
        {
          id: "delegasi-karyawan",
          title: "Delegasi Karyawan",
          icon: "account-multiple",
        },
        {
          id: "perubahan-shift",
          title: "Perubahan Shift Kerja",
          icon: "clock-outline",
        },
        {
          id: "lembur",
          title: "Lembur",
          icon: "briefcase-clock",
        },
        {
          id: "cuti",
          title: "Cuti",
          icon: "beach",
        },
        {
          id: "unduh-slip-gaji",
          title: "Unduh Slip Gaji",
          icon: "file-download",
        },
        {
          id: "perubahan-data",
          title: "Perubahan Data Pribadi",
          icon: "account-edit",
        },
        {
          id: "kehadiran",
          title: "Kehadiran",
          icon: "calendar-account",
        },
        {
          id: "izin",
          title: "Izin",
          icon: "file-document-outline",
        },
        {
          id: "klaim",
          title: "Klaim",
          icon: "clipboard-check-outline",
        },
      ],
    },
    {
      title: "Persetujuan & Permintaan",
      items: [
        {
          id: "persetujuan",
          title: "Persetujuan",
          icon: "check-circle-outline",
        },
        {
          id: "belum-disetujui",
          title: "Belum Disetujui",
          icon: "clock-outline",
        },
        {
          id: "disetujui",
          title: "Disetujui",
          icon: "check-all",
        },
        {
          id: "status-permintaan",
          title: "Status Permintaan",
          icon: "format-list-checks",
        },
        {
          id: "riwayat-permintaan",
          title: "Riwayat Permintaan",
          icon: "history",
        },
      ],
    },
  ];

  const handleMenuPress = (menuId: string) => {
    // Handle menu item press - you can navigate to specific screens based on menuId
    console.log("Menu pressed:", menuId);
    // Example: router.push(`/menu/${menuId}`);
  };

  const MenuCard = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleMenuPress(item.id)}
      className="items-center justify-center"
      style={{ width: "25%", marginBottom: 12 }}
    >
      <View className=" rounded-2xl w-full aspect-square items-center justify-center mb-2">
        <View className="bg-[#E8F1F6] rounded-full w-16 h-16 items-center justify-center">
          <MaterialCommunityIcons
            name={item.icon as any}
            size={28}
            color="#1E5A96"
          />
        </View>
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-xs font-JakartaMedium text-neutral-800 text-center w-full"
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-neutral-50">
      {/* Header */}
      <View className="bg-white px-4 py-10 pt-10 flex-row items-center border-b border-neutral-200 justify-start">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 mt-4">
          <MaterialCommunityIcons
            name="chevron-left"
            size={28}
            color="#1E5A96"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-JakartaBold text-neutral-800 mt-4 flex-1">
          Semua Produk & Layanan
        </Text>
      </View>

      {/* Sections */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {sections.map((section, index) => (
          <View key={index}>
            {/* Section Header */}
            <View className="px-4 py-2 my-4">
              <Text className="text-neutral-700 font-JakartaMedium text-base">
                {section.title}
              </Text>
            </View>

            {/* Section Items Grid */}
            <View className="px-4 pt-4">
              <View className="flex-row flex-wrap">
                {section.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
