import { Input } from "@/components/my/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { HStack } from "@/components/ui/hstack";
import { useAuth } from "@/context/useAuth";
import { Link } from "expo-router";
import { Formik } from "formik";
import { Text } from "react-native";

export default function Login() {
  const { login } = useAuth();
  return (
    <HStack className="bg-primary-0 flex-1 pt-[81px] flex-col">
      <Box className="pl-5 pr-5">
        <Text
          className="text-4xl"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          Lo<Text className="text-secondary-0">gi</Text>n
        </Text>
        <Text
          className="text-1xl color-typography-50"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          acesse sua conta com seu{" "}
          <Text className="text-secondary-0 ">e-mail</Text> e{" "}
          <Text className="text-secondary-0">senha</Text>
        </Text>
      </Box>

      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        onSubmit={async (values) => {
          await login(values.email, values.senha);
        }}
      >
        {({ handleChange, submitForm }) => (
          <>
            <Box className="flex-1 p-5 justify-center gap-8">
              <Input
                placeholder="teste@teste.gmail.com"
                label="E-mail"
                onChangeText={handleChange("email")}
              />
              <Input
                placeholder="*********"
                label="Senha"
                onChangeText={handleChange("senha")}
              />
            </Box>
            <Box className="p-5 mb-12">
              <Button
                className="bg-secondary-0 h-[60px] rounded-default"
                onPress={() => submitForm()}
              >
                <Text
                  className="text-white"
                  style={{ fontFamily: "JetBrainsMono_700Bold" }}
                >
                  Entrar
                </Text>
              </Button>

              <Link href={"/criar-conta"} className="mt-5">
                <Text
                  className="text-1xl color-typography-50  text-center mt-5"
                  style={{ fontFamily: "JetBrainsMono_400Regular" }}
                >
                  criar minha conta
                </Text>
              </Link>
            </Box>
          </>
        )}
      </Formik>
    </HStack>
  );
}
