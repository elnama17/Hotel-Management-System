import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentManagement } from './screens/payment/PaymentManagement';
import { BillsNavigator } from './BillsNavigator';
import { PaymentsPageNavigator } from './PaymentsPageNavigator';

export type PaymentStackParamList = {
  PaymentManagement: undefined;
  BillsNavigator: undefined;
  PaymentsPageNavigator: undefined;
};

const Stack = createNativeStackNavigator<PaymentStackParamList>();

export function PaymentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentManagement"
        component={PaymentManagement}
        options={{ title: 'Payment Management' }} // ✅ tämä näyttää otsikon
      />
      <Stack.Screen
        name="BillsNavigator"
        component={BillsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentsPageNavigator"
        component={PaymentsPageNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
