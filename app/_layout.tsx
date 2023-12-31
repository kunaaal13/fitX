import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/',
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="exercises/[bodypart]"
        options={{
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name="exercise/[id]"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
