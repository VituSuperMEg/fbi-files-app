import { Header } from "@/components/my/header";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="bg-primary-0 flex-1 flex-col">
      <Header />
      <Box className="m-4 absolute bottom-0 w-[95%]">
        <Button className="bg-secondary-0 h-[60px] rounded-default">
          <Text
            className="text-white"
            style={{ fontFamily: "JetBrainsMono_700Bold" }}
          >
            Adicionar um novo arquivo
          </Text>
        </Button>
      </Box>
    </View>
  );
}
