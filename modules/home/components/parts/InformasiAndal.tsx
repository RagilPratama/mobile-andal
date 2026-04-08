import { Image, Text, TouchableOpacity, View } from "react-native";

interface InfoItem {
  id: string;
  title: string;
  image: string;
}

export const InformasiAndal = () => {
  const infoItems: InfoItem[] = [
    {
      id: "info1",
      title:
        "Andal dan KORPRI Bersinergis Hadirkan Program Jaminan Sosial bagi ASN di Seluruh Indonesia",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: "info2",
      title: "Program Edukasi Keuangan untuk Semua Masyarakat Indonesia",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
  ];

  return (
    <View className="mt-6 mb-4">
      <View className="mx-4 flex-row items-center justify-between mb-4">
        <Text className="text-xl font-JakartaBold text-neutral-900">
          Informasi Andal
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-sm font-JakartaMedium text-[#1E5A96]">
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>

      {infoItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          className="mx-4 mb-4 rounded-xl overflow-hidden bg-white border border-neutral-200"
        >
          <Image
            source={{ uri: item.image }}
            className="w-full h-40"
            resizeMode="cover"
          />
          <View className="p-3">
            <Text className="text-sm font-JakartaMedium text-neutral-800 leading-5">
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
