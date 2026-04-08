import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export const ServiceCards = () => {
  const services: ServiceCard[] = [
    {
      id: "claim",
      title: "Pengajuan Klaim",
      subtitle: "Pengajuan layanan klaim",
      icon: "file-document",
    },
    {
      id: "non-claim",
      title: "Pengajuan Non Klaim",
      subtitle: "Pengajuan layanan non klaim",
      icon: "file-document",
    },
  ];

  return (
    <View className="mx-4 mt-6">
      <Text className="text-xl font-JakartaBold text-neutral-900 mb-4">
        Layanan Kami
      </Text>

      {services.map((service) => (
        <TouchableOpacity
          key={service.id}
          activeOpacity={0.7}
          className="bg-white rounded-xl px-4 py-4 mb-3 flex-row items-center border border-neutral-200"
        >
          <View className="bg-[#E8F1F6] rounded-lg p-3 mr-4">
            <MaterialCommunityIcons
              name={service.icon as any}
              size={28}
              color="#1E5A96"
            />
          </View>
          <View className="flex-1">
            <Text className="text-base font-JakartaBold text-neutral-900">
              {service.title}
            </Text>
            <Text className="text-sm font-JakartaRegular text-neutral-500 mt-1">
              {service.subtitle}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={28}
            color="#1E5A96"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
