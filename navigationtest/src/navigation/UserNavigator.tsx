// UserNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserManagement } from './screens/user/UserManagement';
import { HeaderButton, Text } from '@react-navigation/elements';

export type UserStackParamList = {
  UserManagement: { user: string };
};

const Stack = createNativeStackNavigator<UserStackParamList>();

export function UserNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserManagement"
        component={UserManagement}
        options={({ navigation }) => ({
          title: 'User Management',
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
