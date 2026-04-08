# Auth Module - Dokumentasi

Module ini menyediakan screen login dan sign up yang fully themed sesuai dengan design Andal.

## Struktur

```
modules/auth/
├── components/
│   ├── LoginScreen.tsx      # Screen untuk login
│   ├── SignUpScreen.tsx     # Screen untuk sign up
│   └── index.ts             # Exports
├── controllers/
│   ├── useLoginForm.ts      # Custom hook untuk form login
│   └── index.ts
├── models/
│   ├── auth.ts              # Type definitions
│   └── index.ts
└── index.ts                 # Root export
```

## Komponen

### 1. LoginScreen

Komponen utama untuk halaman login.

**Props:**

- `onLoginSuccess?: () => void` - Callback saat login berhasil
- `onSignUpPress?: () => void` - Callback saat tombol sign up ditekan

**Features:**

- ✅ Form validation untuk email dan password
- ✅ Error messages yang informatif
- ✅ Loading state pada tombol submit
- ✅ Password visibility toggle
- ✅ Social login options (UI ready)
- ✅ Link ke sign up page
- ✅ Tema sesuai Andal dengan gradient background

**Contoh Penggunaan:**

```tsx
import { LoginScreen } from "@/modules/auth";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const router = useRouter();

  return (
    <LoginScreen
      onLoginSuccess={() => {
        router.replace("/(tabs)");
      }}
      onSignUpPress={() => {
        router.push("/signup");
      }}
    />
  );
}
```

### 2. SignUpScreen

Komponen untuk halaman registrasi.

**Props:**

- `onSignUpSuccess?: () => void` - Callback saat sign up berhasil
- `onLoginPress?: () => void` - Callback saat tombol login ditekan

**Features:**

- ✅ Form validation untuk semua field
- ✅ Konfirmasi password validation
- ✅ Terms & conditions checkbox
- ✅ Loading state
- ✅ Error handling
- ✅ Link ke login page

**Contoh Penggunaan:**

```tsx
import { SignUpScreen } from "@/modules/auth";
import { useRouter } from "expo-router";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <SignUpScreen
      onSignUpSuccess={() => {
        router.replace("/(tabs)");
      }}
      onLoginPress={() => {
        router.back();
      }}
    />
  );
}
```

### 3. useLoginForm Hook

Custom hook untuk mengelola state login form.

**Returns:**

```tsx
{
  values: { email: string; password: string };
  errors: { email?: string; password?: string; general?: string };
  isLoading: boolean;
  setValues: (values) => void;
  handleEmailChange: (email: string) => void;
  handlePasswordChange: (password: string) => void;
  validateForm: () => boolean;
  login: (onSuccess?, onError?) => Promise<void>;
  resetForm: () => void;
}
```

**Contoh Penggunaan:**

```tsx
import { useLoginForm } from "@/modules/auth";

export function CustomLoginForm() {
  const form = useLoginForm();

  const handleSubmit = async () => {
    await form.login(
      () => console.log("Login success"),
      (error) => console.log("Login error:", error),
    );
  };

  return (
    <View>
      <TextInput
        value={form.values.email}
        onChangeText={form.handleEmailChange}
      />
      {form.errors.email && <Text>{form.errors.email}</Text>}

      <TextInput
        value={form.values.password}
        onChangeText={form.handlePasswordChange}
        secureTextEntry
      />
      {form.errors.password && <Text>{form.errors.password}</Text>}

      <Button onPress={handleSubmit} disabled={form.isLoading}>
        {form.isLoading ? "Loading..." : "Login"}
      </Button>
    </View>
  );
}
```

## Design System Integration

### Warna Tema

- **Primary Blue:** `#1E5A96`
- **Secondary Blue:** `#2E7CB5`
- **Light Background:** `#E8F1F6`
- **Gradient:** `#E8F1F6` → `#D0E3F0` → `#F5F9FB`
- **Error:** `#F56565` (danger color)
- **Text Dark:** `#1E5A96` (labels)
- **Text Medium:** `#666666` (body)
- **Border:** `#CCCCCC`

### Typography

- **Headlines:** Jakarta Bold (text-4xl)
- **Labels:** Jakarta SemiBold (text-lg)
- **Body:** Jakarta Medium (text-base)

### Components Used

- TextField dengan icon support
- Button dengan loading state
- LinearGradient untuk background
- Custom validation

## Integrasi dengan Routing

### Setup di app.tsx atau root layout:

```tsx
import { LoginScreen } from "@/modules/auth";

export default function RootLayout() {
  return (
    <Stack>
      {/* Existing tabs layout */}
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Group>
    </Stack>
  );
}
```

## Validasi Form

### Email Validation

- Format email standar (user@domain.com)
- Tidak boleh kosong

### Password Validation

- Minimal 6 karakter
- Tidak boleh kosong

### Sign Up Validation

- Semua field harus diisi
- Password = Confirm Password
- Terms & Conditions harus di-check

## API Integration

Untuk mengintegrasikan dengan backend API:

```tsx
const login = async (email: string, password: string) => {
  try {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Save token
    await AsyncStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    throw error;
  }
};
```

## Styling

Semua komponen menggunakan:

- **Nativewind** untuk styling dengan Tailwind CSS
- **Jakarta Font** untuk typography
- **LinearGradient** dari expo untuk background gradient
- Consistent spacing dan padding sesuai design system

## Customization

Untuk mengubah warna, edit props atau buat custom wrapper:

```tsx
// Custom themed login
export function CustomLogin() {
  return (
    <View style={{ backgroundColor: "YOUR_COLOR" }}>
      <LoginScreen {...props} />
    </View>
  );
}
```

---

**Theme Version:** 1.0
**Last Updated:** April 2026
**Compatible with:** React Native, Expo, Nativewind, linearGradient
