import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Tasks</Text>
      {!isPresented && <Link href="../">Dismiss</Link>}
      <StatusBar style="light" />
    </View>
  );
}
