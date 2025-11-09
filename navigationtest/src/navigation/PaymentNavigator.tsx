import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HeaderButton, Text } from '@react-navigation/elements';
import { PaymentManagement } from './screens/payment/PaymentManagement';
import { Bills } from './screens/payment/Bills';

export type PaymentStackParamList = {
  PaymentManagement: undefined;
  Bills: undefined;
};

const Stack = createNativeStackNavigator<PaymentStackParamList>();

export function PaymentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentManagement"
        component={PaymentManagement}
        options={{ title: 'Payment Management' }}
      />
      <Stack.Screen
        name="Bills"
        component={Bills}
        options={({ navigation }) => ({
          title: 'Bills',
          headerRight: () => (
            <HeaderButton onPress={navigation.goBack}>
              <Text>Close</Text>
            </HeaderButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
