import { Text, TextInput, TextInputProps } from "react-native";
import { Box } from "../ui/box";
import { JetBrainsMono_400Regular } from "@expo-google-fonts/jetbrains-mono";

type InputType = {
  placeholder: string;
  label: string;
} & TextInputProps;
export function Input({ placeholder, label, ...rest }: InputType) {
  return (
    <Box>
      <Text className="ml-2" style={{ fontFamily: "JetBrainsMono_400Regular" }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={{ fontFamily: "JetBrainsMono_400Regular" }}
        placeholderTextColor={"#8A8A8A"}
        className="border rounded-default h-[60px] pl-5 border-tertiary-50"
        {...rest}
      />
    </Box>
  );
}
