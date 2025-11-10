import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentsPageStackParamList } from '../../PaymentsPageNavigator';


type PaymentPageScreenNavigation = NativeStackNavigationProp<PaymentsPageStackParamList, 'PaymentsPage'>;

export function PaymentsPage() {
  const navigation = useNavigation<PaymentPageScreenNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
        <Button
          title="Create payment"
          onPress={() => navigation.navigate('CreatePayment')}
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
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
