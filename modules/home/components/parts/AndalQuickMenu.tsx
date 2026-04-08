import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface QuickMenu {
  id: string;
  title: string;
  icon: string;
}

export const AndalQuickMenu = () => {
  const router = useRouter();

  const menus: QuickMenu[] = [
    {
      id: "andal-utama",
      title: "Andal",
      icon: "home",
    },
    {
      id: "slip-gaji",
      title: "Slip Gaji",
      icon: "file-document-outline",
    },
    {
      id: "task-list",
      title: "Tasklist",
      icon: "clipboard-list-outline",
    },
    {
      id: "all",
      title: "Semua",
      icon: "grid",
    },
  ];

  const handleMenuPress = (menuId: string) => {
    if (menuId === "all") {
      router.push("/all-menu");
    }
    // Add more menu handlers as needed
  };

  return (
    <View className="mx-4 mt-3 mb-4">
      <View className="flex-row flex-wrap justify-between">
        {menus.map((menu) => (
          <TouchableOpacity
            key={menu.id}
            activeOpacity={0.7}
            onPress={() => handleMenuPress(menu.id)}
            className="bg-white rounded-2xl p-4 mb-3 items-center justify-center border border-neutral-200"
            style={{ width: "23%" }}
          >
            <View className="bg-[#E8F1F6] rounded-full w-12 h-12 items-center justify-center mb-2">
              <MaterialCommunityIcons
                name={menu.icon as any}
                size={24}
                color="#1E5A96"
              />
            </View>
            <Text className="text-xs font-JakartaMedium text-neutral-800 text-center">
              {menu.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
