import { useAuth } from "@/shared/context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface AndalHeaderProps {
  onLoginPress?: () => void;
}

export const AndalHeader = ({ onLoginPress }: AndalHeaderProps) => {
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/login" as any);
  };
  const handleLoginPress = () => {
    if (onLoginPress) {
      onLoginPress();
    } else {
      router.push("/login" as any);
    }
  };

  return (
    <LinearGradient
      colors={["#E8F1F6", "#D0E3F0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingTop: 45,
        paddingBottom: 20,
        paddingHorizontal: 16,
      }}
    >
      <View className="flex-row items-center justify-between mt-4">
        {/* Logo Andal and User Info */}
        <View className="flex-row items-center flex-1">
          <Text className="text-[30px] font-JakartaBold text-[#1E5A96]">
            Andal
          </Text>
        </View>

        {/* Buttons - Show only if not logged in */}
        {!isLoggedIn ? (
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleLoginPress}
              className="px-4 py-2 border-2 border-[#1E5A96] rounded-lg"
            >
              <Text className="text-[#1E5A96] font-JakartaMedium text-sm">
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                handleLogout();
              }}
              className="px-4 py-2 border-2 border-[#1E5A96] rounded-lg"
            >
              <Text className="text-[#1E5A96] font-JakartaMedium text-sm">
                Keluar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};
