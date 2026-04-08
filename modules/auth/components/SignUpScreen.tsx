import TextField from "@/shared/components/ui/TextField";
import { useAuth } from "@/shared/context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface SignUpScreenProps {
  onSignUpSuccess?: () => void;
  onLoginPress?: () => void;
}

export const SignUpScreen = ({
  onSignUpSuccess,
  onLoginPress,
}: SignUpScreenProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  const { signup } = useAuth();

  const validateForm = () => {
    const newErrors: any = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Nama lengkap tidak boleh kosong";
    }

    if (!email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!password.trim()) {
      newErrors.password = "Password tidak boleh kosong";
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Konfirmasi password tidak boleh kosong";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    if (!agreeTerms) {
      newErrors.terms = "Anda harus menyetujui syarat dan ketentuan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Call signup from context
      await signup({
        id: Math.random().toString(),
        email,
        fullName,
      });

      // Call success callback
      onSignUpSuccess?.();
    } catch (error) {
      console.error("Sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={["#E8F1F6", "#D0E3F0", "#F5F9FB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="px-6"
      >
        {/* Header Section */}
        <View className="mt-8 mb-6">
          <Text className="text-4xl font-JakartaBold text-[#1E5A96] mb-2">
            Daftar
          </Text>
          <Text className="text-base font-JakartaMedium text-[#666666]">
            Bergabunglah dengan Andal sekarang
          </Text>
        </View>

        {/* Illustration or Logo Section */}
        <View className="items-center mb-6">
          <View className="w-28 h-28 rounded-full bg-white bg-opacity-60 items-center justify-center mb-4">
            <Text className="text-4xl">🎉</Text>
          </View>
        </View>

        {/* Form Section */}
        <View className="flex-1">
          {/* Full Name Input */}
          <View className="mb-4">
            <TextField
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap Anda"
              value={fullName}
              onChangeText={setFullName}
              editable={!isLoading}
              labelStyle="text-[#1E5A96]"
            />
            {errors.fullName && (
              <Text className="text-danger-500 text-sm font-JakartaMedium mt-2">
                {errors.fullName}
              </Text>
            )}
          </View>

          {/* Email Input */}
          <View className="mb-4">
            <TextField
              label="Email"
              placeholder="Masukkan email Anda"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
              labelStyle="text-[#1E5A96]"
            />
            {errors.email && (
              <Text className="text-danger-500 text-sm font-JakartaMedium mt-2">
                {errors.email}
              </Text>
            )}
          </View>

          {/* Password Input */}
          <View className="mb-4">
            <TextField
              label="Password"
              placeholder="Masukkan password Anda"
              value={password}
              onChangeText={setPassword}
              secureText={true}
              editable={!isLoading}
              labelStyle="text-[#1E5A96]"
            />
            {errors.password && (
              <Text className="text-danger-500 text-sm font-JakartaMedium mt-2">
                {errors.password}
              </Text>
            )}
          </View>

          {/* Confirm Password Input */}
          <View className="mb-6">
            <TextField
              label="Konfirmasi Password"
              placeholder="Konfirmasi password Anda"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureText={true}
              editable={!isLoading}
              labelStyle="text-[#1E5A96]"
            />
            {errors.confirmPassword && (
              <Text className="text-danger-500 text-sm font-JakartaMedium mt-2">
                {errors.confirmPassword}
              </Text>
            )}
          </View>

          {/* Terms and Conditions */}
          <TouchableOpacity
            className="flex-row items-center mb-6 p-3 bg-white bg-opacity-50 rounded-lg"
            onPress={() => setAgreeTerms(!agreeTerms)}
            disabled={isLoading}
          >
            <View
              className={`w-5 h-5 rounded border-2 mr-3 items-center justify-center ${
                agreeTerms
                  ? "bg-[#1E5A96] border-[#1E5A96]"
                  : "border-[#CCCCCC]"
              }`}
            >
              {agreeTerms && (
                <Text className="text-white font-bold text-sm">✓</Text>
              )}
            </View>
            <Text className="text-[#666666] font-JakartaMedium flex-1">
              Saya setuju dengan{" "}
              <Text className="text-[#1E5A96] font-JakartaSemiBold">
                syarat dan ketentuan
              </Text>
            </Text>
          </TouchableOpacity>

          {errors.terms && (
            <Text className="text-danger-500 text-sm font-JakartaMedium mb-4">
              {errors.terms}
            </Text>
          )}

          {/* Sign Up Button */}
          <View className="mb-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSignUp}
              disabled={isLoading}
              className={`w-full py-4 rounded-lg items-center justify-center ${
                isLoading ? "opacity-50" : "opacity-100"
              }`}
              style={{
                backgroundColor: "#1E5A96",
              }}
            >
              <Text className="text-white font-JakartaBold text-base">
                {isLoading ? "Mendaftar..." : "Daftar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Link */}
        <View className="flex-row items-center justify-center mb-8">
          <Text className="text-[#666666] font-JakartaMedium">
            Sudah punya akun?{" "}
          </Text>
          <TouchableOpacity onPress={onLoginPress} disabled={isLoading}>
            <Text className="text-[#1E5A96] font-JakartaBold">
              Masuk di sini
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
