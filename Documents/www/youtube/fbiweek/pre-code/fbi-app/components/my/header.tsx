import { Image, Text, View } from "react-native";
import { Heading } from "../ui/heading";
import widget from "@/assets/images/Widget 4.png";

export function Header() {
  return (
    <View className="items-center flex-row justify-between w-[93%] ml-5 mt-[20px]">
      <Text style={{ fontFamily: "JetBrainsMono_400Regular" }}>
        Olá,{" "}
        <Text
          className="text-secondary-0"
          style={{ fontFamily: "JetBrainsMono_700Bold" }}
        >
          Vitor Emanuel.
        </Text>
      </Text>
      <Image source={widget} style={{ width: 35, height: 35 }} />
    </View>
  );
}
