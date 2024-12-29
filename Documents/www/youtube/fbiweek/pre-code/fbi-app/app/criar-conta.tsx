import { Input } from "@/components/my/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { Link } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function CriarConta() {
  const toast = useToast();
  const [toastId, setToastId] = useState(0);
  const handleToast = () => {
    if (!toast.isActive(String(toastId))) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: String(newId),
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action="error"
            variant="solid"
            className="mt-[30px]"
          >
            <ToastTitle>Error</ToastTitle>
            <ToastDescription className="text-white">
              As Senhas devem ser iguais.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <HStack className="bg-primary-0 flex-1 pt-[81px] flex-col">
      <Box className="pl-5 pr-5">
        <Text
          className="text-4xl"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          Criar Conta
        </Text>
        <Text
          className="text-1xl color-typography-50"
          style={{ fontFamily: "JetBrainsMono_400Regular" }}
        >
          Crie sua conta de forma fácil, prática e rápida. E tenha acesso aos
          seus arquivos.
        </Text>
      </Box>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          senha: "",
          confirmarSenha: "",
        }}
        onSubmit={(values) => {
          if (values.senha !== values.confirmarSenha) {
            showNewToast();
            return;
          }
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 gap-10">
              <Box className="flex-1 p-5 justify-center gap-8">
                <Input
                  label="Nome"
                  placeholder="fulano"
                  onChangeText={handleChange("nome")}
                />
                <Input
                  label="E-mail"
                  placeholder="teste@teste.gmail.com"
                  onChangeText={handleChange("email")}
                />
                <Input
                  label="Senha"
                  placeholder="*******"
                  onChangeText={handleChange("senha")}
                />
                <Input
                  label="Confirmar Senha"
                  placeholder="*******"
                  onChangeText={handleChange("confirmarSenha")}
                />
              </Box>
              <Box className="p-5 mb-12">
                <Button
                  className="bg-secondary-0 h-[60px] rounded-default"
                  onPress={() => handleSubmit()}
                >
                  <Text
                    className="text-white"
                    style={{ fontFamily: "JetBrainsMono_700Bold" }}
                  >
                    Criar Conta
                  </Text>
                </Button>
                <Link href={"/login"} className="mt-5">
                  <Text
                    className="text-1xl color-typography-50  text-center mt-5"
                    style={{ fontFamily: "JetBrainsMono_400Regular" }}
                  >
                    Já tem conta ?{" "}
                    <Text className="text-secondary-0">clique aqui.</Text>
                  </Text>
                </Link>
              </Box>
            </View>
          </ScrollView>
        )}
      </Formik>
    </HStack>
  );
}
