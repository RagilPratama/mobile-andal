import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type VariantType = "outline" | "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
    onPress?: () => void;
    label: string;
    variant?: VariantType;
    iconLeft?: React.ComponentType<any>;
    iconRight?: React.ComponentType<any>;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

const getVariant = (variant: VariantType) => {
    switch (variant) {
        case "outline":
            return "bg-transparent border-primary-500 border-[1px]";
        case "secondary":
            return "bg-secondary-500 shadow-md shadow-neutral-400/70";
        case "danger":
            return "bg-danger-500 shadow-md shadow-neutral-400/70";
        case "success":
            return "bg-success-500 shadow-md shadow-neutral-400/70";
        case "primary":
        default:
            return "bg-primary-500 shadow-md shadow-neutral-400/70";
    }
}

const getTextColor = (variant: VariantType) => {
    switch (variant) {
        case "outline":
            return "text-primary-800";
        case "secondary":
            return "text-secondary-100";
        case "danger":
            return "text-red-100";
        case "success":
            return "text-success-100";
        case "primary":
        default:
            return "text-white";
    }
}

const Button = ( { onPress, label, variant = "primary", ...props } : ButtonProps) => {
    const isDisabled = props.disabled || props.isLoading;
    
    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={0.9}
            onPress={onPress}
            className={`w-full p-3 rounded-full flex flex-row justify-center items-center ${getVariant(variant)} ${props.className} ${
                isDisabled ? 'opacity-50' : 'opacity-100'
            }`}
        >
            { props.iconLeft && <props.iconLeft/> }
            { props.isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text className={`text-lg font-bold font-JakartaBold ${getTextColor(variant)}`}>{label}</Text>
                )
            }
            { props.iconRight && <props.iconRight/> }

        </TouchableOpacity>
    )
}

export default Button;