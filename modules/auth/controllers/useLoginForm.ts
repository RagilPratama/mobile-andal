import { useCallback, useState } from "react";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export const useLoginForm = () => {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = useCallback((): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!values.email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!validateEmail(values.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password tidak boleh kosong";
    } else if (values.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const handleEmailChange = (email: string) => {
    setValues((prev) => ({ ...prev, email }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (password: string) => {
    setValues((prev) => ({ ...prev, password }));
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const login = async (
    onSuccess?: () => void,
    onError?: (error: string) => void,
  ) => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success logic
      console.log("Login successful:", values);
      onSuccess?.();

      // Reset form
      setValues({ email: "", password: "" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Login gagal";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setValues({ email: "", password: "" });
    setErrors({});
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    setValues,
    handleEmailChange,
    handlePasswordChange,
    validateForm,
    login,
    resetForm,
  };
};
