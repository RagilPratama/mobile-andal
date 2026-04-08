import { SignUpScreen } from "@/modules/auth";
import { useRouter } from "expo-router";

export default function SignUpPage() {
  const router = useRouter();

  const handleSignUpSuccess = () => {
    // Navigate to home/tabs after successful signup
    router.replace("/(tabs)" as any);
  };

  const handleLoginPress = () => {
    // Navigate back to login
    router.back();
  };

  return (
    <SignUpScreen
      onSignUpSuccess={handleSignUpSuccess}
      onLoginPress={handleLoginPress}
    />
  );
}
