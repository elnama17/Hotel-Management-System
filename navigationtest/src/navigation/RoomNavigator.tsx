// RoomNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoomManagement } from './screens/room/RoomManagement';
import { HeaderButton, Text } from '@react-navigation/elements';

export type RoomStackParamList = {
  RoomManagement: undefined;
};

const Stack = createNativeStackNavigator<RoomStackParamList>();

export function RoomNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RoomManagement"
        component={RoomManagement}
        options={({ navigation }) => ({
          title: 'Rooms',
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
