// ReservationNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReservationManagement } from './screens/reservation/ReservationManagement';
import { HeaderButton, Text } from '@react-navigation/elements';

export type ReservationStackParamList = {
  ReservationManagement: undefined;
};

const Stack = createNativeStackNavigator<ReservationStackParamList>();

export function ReservationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReservationManagement"
        component={ReservationManagement}
        options={({ navigation }) => ({
          title: 'Reservations',
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
