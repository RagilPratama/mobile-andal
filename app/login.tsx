import { LoginScreen } from "@/modules/auth";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Navigate to home/tabs
    router.replace("/(tabs)" as any);
  };

  const handleSignUpPress = () => {
    // Navigate to signup page
    router.push("/signup" as any);
  };

  return (
    <LoginScreen
      onLoginSuccess={handleLoginSuccess}
      onSignUpPress={handleSignUpPress}
    />
  );
}
