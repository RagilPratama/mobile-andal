import {
    Keyboard,
    KeyboardAvoidingView,
    Pressable,
    Text,
    TextInput,
    TextInputProps,
    TouchableWithoutFeedback,
    View
} from "react-native";

import { Platform } from "expo-modules-core";
import { useEffect, useState } from "react";

import { SvgProps } from "react-native-svg";
import SvgIcon from "./SvgIcon";
import { icons } from "@/shared/constant";

interface TextFieldProps extends TextInputProps {
    label?: string;
    icon?: React.FC<SvgProps>;
    secureText?: boolean;
    labelStyle?: string;
    className?: string;
}

const TextField = ({ ...props } : TextFieldProps) => {
    
    const [isFocused, setIsFocused] = useState(false);
    const [secureText, setSecureText] = useState(false);
    
    useEffect(() => {
        setSecureText(props.secureText ?? false);
    }, [props.secureText]);

    const onShowPassword = () => {
        setSecureText(!secureText);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className={`my-2 w-full`} >
                    { props.label && (
                        <Text className={`text-lg font-JakartaSemiBold mb-3 ${props.labelStyle}`}>
                            { props.label }
                        </Text>
                    )}
                    <View className={`flex flex-row justify-start items-center relative bg-secondary-100 rounded-full border ${isFocused ? "border-primary-600" : "border-primary-300"}`} >
                        { props.icon && (
                            <SvgIcon className="w-8 h-8 ml-4" Source={props.icon} fill="#d4c5c9" />
                        )}
                        <TextInput
                            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                            secureTextEntry={secureText}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholderTextColor={"#d4c5c9"}
                            {...props}
                        />
                        { props.secureText && (
                            <Pressable onPress={onShowPassword} >
                                <SvgIcon className="w-8 h-8 mr-4" Source={secureText ? icons.arrowDown : icons.arrowUp} fill="#d4c5c9" />
                            </Pressable>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default TextField;