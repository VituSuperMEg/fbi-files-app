import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Text, View } from "react-native";
import image from "@/assets/images/welcome.png";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
export default function Index() {
  return (
    <HStack className="bg-primary-0 flex-1 pt-[81px] flex-col">
      <Box className="pl-5">
        <Text
          className="text-4xl"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          FBIFiles
        </Text>
        <Text
          className="text-1xl color-typography-50"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          controle seus arquivos e suas pastas por aqui.
        </Text>
      </Box>
      <Box className="flex-1">
        <Image source={image} size="full" />
      </Box>
      <Box className="p-5">
        <Button className="bg-secondary-0 h-[60px] rounded-default">
          <Link href={"/login"} className="flex items-center justify-center">
            <Text
              className="text-white"
              style={{ fontFamily: "JetBrainsMono_700Bold" }}
            >
              Login
            </Text>
          </Link>
        </Button>
        <Link href={"/criar-conta"} className="mt-5">
          <Text
            className="text-1xl color-typography-50  text-center mt-5"
            style={{ fontFamily: "JetBrainsMono_400Regular" }}
          >
            criar conta
          </Text>
        </Link>
      </Box>
    </HStack>
  );
}
