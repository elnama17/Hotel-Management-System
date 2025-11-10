import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentsPage } from './screens/payment/PaymentsPage';
import { CreatePayment } from './screens/payment/CreatePayment';

export type PaymentsPageStackParamList = {
  PaymentsPage: undefined;
  CreatePayment: undefined;
};

const Stack = createNativeStackNavigator<PaymentsPageStackParamList>();

export function PaymentsPageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaymentsPage" component={PaymentsPage} options={{ title: 'Payments' }} />
      <Stack.Screen name="CreatePayment" component={CreatePayment} />
    </Stack.Navigator>
  );
}
