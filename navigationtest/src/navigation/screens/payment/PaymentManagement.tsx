import { View, Button, StyleSheet } from 'react-native';
import { Text } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentStackParamList } from '../../PaymentNavigator';

type NavigationProp = NativeStackNavigationProp<PaymentStackParamList>;

export function PaymentManagement() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Management</Text>
      <Button title="Bills" onPress={() => navigation.navigate('BillsNavigator')} />
      <Button title="Payments" onPress={() => navigation.navigate('PaymentsPageNavigator')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
