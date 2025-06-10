import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a2e', // fundo escuro
          },
          headerShadowVisible: false,
          headerTintColor: '#e6e6e6', // texto e ícones do header
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#d4af37', // título com destaque dourado
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: "Página não encontrada" }} />
      </Stack>
    </>
  );
}
