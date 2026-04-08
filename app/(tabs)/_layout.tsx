import { useAuth } from "@/shared/context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabLabel = ({ label, focused }: { label: string; focused: boolean }) => (
  <View>
    <Text
      className={`text-[12px] mt-1 font-JakartaSemiBold ${focused ? "text-[#1E5A96]" : "text-neutral-500"
        }`}
    >
      {label}
    </Text>
  </View>
);

export default function TabLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: isLoggedIn ? "flex" : "none",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: "#E8F1F6",
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#1E5A96" : color}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Beranda" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "map-marker" : "map-marker-outline"}
              size={24}
              color={focused ? "#1E5A96" : color}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Lokasi" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "menu" : "menu"}
              size={24}
              color={focused ? "#1E5A96" : color}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Menu" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={24}
              color={focused ? "#1E5A96" : color}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
