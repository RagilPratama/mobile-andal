import { useAuth } from "@/shared/context/AuthContext";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/login" as any);
  };

  return (
    <View className="flex-1 items-center justify-center bg-neutral-50 px-6">
      <Text className="text-2xl font-JakartaBold text-[#1E5A96] mb-4">
        Profil
      </Text>
      {user && (
        <View className="bg-white rounded-lg p-6 w-full mb-6">
          <Text className="text-lg font-JakartaSemiBold text-neutral-900">
            {user.fullName}
          </Text>
          <Text className="text-sm text-neutral-500 mt-2">{user.email}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-danger-500 rounded-lg px-6 py-3 w-full items-center"
      >
        <Text className="text-white font-JakartaBold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
