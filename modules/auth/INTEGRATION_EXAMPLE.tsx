import { LoginScreen } from "@/modules/auth";
import { useRouter } from "expo-router";

/**
 * CONTOH INTEGRASI UNTUK app/(auth)/login.tsx
 *
 * File ini adalah contoh bagaimana mengintegrasikan LoginScreen
 * ke dalam struktur routing Expo Router.
 *
 * Setup struktur folder:
 * app/
 *   (auth)/
 *     _layout.tsx
 *     login.tsx      <- copy dan modifikasi file ini
 *     signup.tsx
 *   (tabs)/
 *     _layout.tsx
 *     index.tsx
 */

export default function LoginPageExample() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Navigate ke home atau tabs
    router.replace("/(tabs)" as any);
  };

  const handleSignUpPress = () => {
    // Navigate ke signup page
    router.push("/signup" as any);
  };

  return (
    <LoginScreen
      onLoginSuccess={handleLoginSuccess}
      onSignUpPress={handleSignUpPress}
    />
  );
}

/**
 * CONTOH INTEGRASI UNTUK app/(auth)/signup.tsx
 *
 * export default function SignUpPageExample() {
 *   const router = useRouter();
 *
 *   const handleSignUpSuccess = () => {
 *     router.replace("/(tabs)" as any);
 *   };
 *
 *   const handleLoginPress = () => {
 *     router.push("/login" as any);
 *   };
 *
 *   return (
 *     <SignUpScreen
 *       onSignUpSuccess={handleSignUpSuccess}
 *       onLoginPress={handleLoginPress}
 *     />
 *   );
 * }
 */

/**
 * CONTOH INTEGRASI UNTUK app/(auth)/_layout.tsx
 *
 * import { Stack } from "expo-router";
 *
 * export default function AuthLayout() {
 *   return (
 *     <Stack
 *       screenOptions={{
 *         headerShown: false,
 *         animationEnabled: true,
 *       }}
 *     >
 *       <Stack.Screen name="login" />
 *       <Stack.Screen name="signup" />
 *     </Stack>
 *   );
 * }
 */

/**
 * CONTOH INTEGRASI DI AndalHeader.tsx
 *
 * Sudah di-update untuk support onLoginPress prop!
 * Gunakan seperti ini di HomeScreen:
 *
 * <AndalHeader onLoginPress={() => router.push('/login')} />
 */
