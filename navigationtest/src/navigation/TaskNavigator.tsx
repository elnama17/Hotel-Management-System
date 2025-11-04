// TaskNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskManagement } from './screens/task/TaskManagement';
import { HeaderButton, Text } from '@react-navigation/elements';

export type TaskStackParamList = {
  TaskManagement: undefined;
};

const Stack = createNativeStackNavigator<TaskStackParamList>();

export function TaskNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskManagement"
        component={TaskManagement}
        options={({ navigation }) => ({
          title: 'Tasks',
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
