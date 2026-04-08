import { ScrollView, View } from "react-native";
import { AndalHeader } from "./parts/AndalHeader";
import { AndalQuickMenu } from "./parts/AndalQuickMenu";
import { InformasiAndal } from "./parts/InformasiAndal";
import { ServiceCards } from "./parts/ServiceCards";

export const HomeScreen = () => {
  return (
    <View className="flex-1 bg-neutral-50">
      <AndalHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <ServiceCards />
        <AndalQuickMenu />
        <InformasiAndal />
      </ScrollView>
    </View>
  );
};
