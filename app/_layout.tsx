import { AuthProvider } from "@/shared/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Fragment, useLayoutEffect } from "react";
import "../assets/styles/global.css";

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    "Jakata-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  useLayoutEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();

    console.log("Fonts loaded:", fontLoaded);
  }, [fontLoaded, error]);

  return (
    <Fragment>
      <AuthProvider>
        <RootLayoutContent />
      </AuthProvider>
    </Fragment>
  );
}
