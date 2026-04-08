import { useAuth } from "@/shared/context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onSignUpPress?: () => void;
  onGooglePress?: () => void;
  onFacebookPress?: () => void;
}

export const LoginScreen = ({
  onLoginSuccess,
  onSignUpPress,
  onGooglePress,
  onFacebookPress,
}: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { login } = useAuth();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      // Call login from context
      onLoginSuccess?.();
      console.log("Logging in with:", { email, password });
      await login({
        id: Math.random().toString(),
        email,
        fullName: email.split("@")[0],
      });

      // Call success callback
    } catch (error) {
      console.error("Login error:", error);
      setErrors((prev) => ({ ...prev, password: "Login gagal" }));
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailFocused = focusedField === "email";
  const isPasswordFocused = focusedField === "password";

  return (
    <View style={styles.container}>
      {/* Dark base background */}
      <View style={StyleSheet.absoluteFill}>
        <View style={[styles.orb, styles.orbTopRight]} />
        <View style={[styles.orb, styles.orbMidLeft]} />
        <View style={[styles.orb, styles.orbBottomCenter]} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Status bar spacer */}
        <View style={styles.statusBar} />

        {/* Heading */}
        <Image
          source={require("@/assets/images/ogya.png")}
          className="w-40 h-28"
          resizeMode="contain"
        />
        <Text style={styles.subheading}>
          Lanjutkan perjalanan Anda bersama Andal
        </Text>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EMAIL</Text>
            <View
              style={[
                styles.inputWrap,
                isEmailFocused && styles.inputWrapFocused,
                errors.email ? styles.inputWrapError : null,
              ]}
            >
              <Text style={styles.inputIcon}>✉</Text>
              <TextInput
                style={styles.input}
                placeholder="nama@example.com"
                placeholderTextColor="#3A3A50"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email)
                    setErrors((e) => ({ ...e, email: undefined }));
                }}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <View
              style={[
                styles.inputWrap,
                isPasswordFocused && styles.inputWrapFocused,
                errors.password ? styles.inputWrapError : null,
              ]}
            >
              <Text style={styles.inputIcon}>🔑</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan password"
                placeholderTextColor="#3A3A50"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (errors.password)
                    setErrors((e) => ({ ...e, password: undefined }));
                }}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                secureTextEntry={!showPassword}
                editable={!isLoading}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((v) => !v)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁"}</Text>
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          {/* Forgot password */}
          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Lupa password?</Text>
          </TouchableOpacity>

          {/* Login button */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={isLoading}
            activeOpacity={0.85}
            style={styles.loginBtnOuter}
          >
            <LinearGradient
              colors={["#1E5A96", "#2E7CB5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.loginBtn, isLoading && styles.loginBtnDisabled]}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.loginBtnText}>Masuk</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>atau lanjutkan dengan</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social login */}
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={onGooglePress}
              activeOpacity={0.8}
            >
              <Text style={styles.socialIcon}>G</Text>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              onPress={onFacebookPress}
              activeOpacity={0.8}
            >
              <Text style={styles.socialIcon}>f</Text>
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign up link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belum punya akun? </Text>
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.footerLink}>Daftar di sini</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F1F6",
  },

  // Ambient orbs
  orb: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.25,
  },
  orbTopRight: {
    width: 280,
    height: 280,
    backgroundColor: "#1E5A96",
    top: -80,
    right: -60,
  },
  orbMidLeft: {
    width: 200,
    height: 200,
    backgroundColor: "#2E7CB5",
    top: height * 0.3,
    left: -80,
    opacity: 0.15,
  },
  orbBottomCenter: {
    width: 240,
    height: 240,
    backgroundColor: "#1E5A96",
    bottom: -80,
    alignSelf: "center",
    left: width * 0.25,
    opacity: 0.12,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingBottom: 40,
  },

  statusBar: {
    height: 30,
    marginTop: 30,
  },

  // Badge
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(30,90,150,0.15)",
    borderWidth: 1,
    borderColor: "rgba(30,90,150,0.3)",
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#1E5A96",
  },
  badgeText: {
    fontSize: 11,
    color: "#1E5A96",
    fontWeight: "500",
  },

  // Heading
  heading: {
    fontSize: 34,
    fontWeight: "600",
    color: "#0F3A5D",
    lineHeight: 42,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subheading: {
    fontSize: 14,
    color: "#1E5A96",
    marginBottom: 36,
    lineHeight: 20,
  },

  // Form
  form: {
    flex: 1,
    marginTop: 10,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#1E5A96",
    letterSpacing: 0.1,
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D0E3F0",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 10,
  },
  inputWrapFocused: {
    borderColor: "#1E5A96",
    backgroundColor: "#F5F9FB",
  },
  inputWrapError: {
    borderColor: "#EF4444",
  },
  inputIcon: {
    fontSize: 14,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#0F3A5D",
    padding: 0,
  },
  eyeIcon: {
    fontSize: 16,
    opacity: 0.6,
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginTop: 6,
    marginLeft: 2,
  },

  // Forgot
  forgotWrap: {
    alignSelf: "flex-end",
    marginBottom: 28,
  },
  forgotText: {
    fontSize: 13,
    color: "#1E5A96",
    fontWeight: "500",
  },

  // Login button
  loginBtnOuter: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  loginBtn: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtnDisabled: {
    opacity: 0.7,
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },

  // Divider
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#D0E3F0",
  },
  dividerText: {
    fontSize: 12,
    color: "#1E5A96",
  },

  // Social
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 40,
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D0E3F0",
    borderRadius: 14,
  },
  socialIcon: {
    fontSize: 15,
    color: "#1E5A96",
    fontWeight: "600",
  },
  socialText: {
    fontSize: 13,
    color: "#1E5A96",
    fontWeight: "500",
  },

  // Footer
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  footerText: {
    fontSize: 13,
    color: "#1E5A96",
  },
  footerLink: {
    fontSize: 13,
    color: "#1E5A96",
    fontWeight: "600",
  },
});
