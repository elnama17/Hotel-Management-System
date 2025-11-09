import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../index'; // your RootStack types

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Payment management"
        onPress={() => navigation.navigate('Payment')}
      />
      <Button
        title="Reservation management"
        onPress={() => navigation.navigate('Reservation')}
      />
      <Button
        title="Room management"
        onPress={() => navigation.navigate('Room')}
      />
      <Button
        title="Task management"
        onPress={() => navigation.navigate('Task')}
      />
      <Button
        title="User management"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
