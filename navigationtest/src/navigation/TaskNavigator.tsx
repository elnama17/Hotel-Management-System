// TaskNavigator.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeaderButton, Text, Button } from '@react-navigation/elements';

export type TaskStackParamList = {
  TaskManagement: undefined;
  CreateTaskForm: undefined;
  TaskList: undefined;
  TaskUpdateForm: undefined;
  TaskCalendar: undefined;
};

const Stack = createNativeStackNavigator<TaskStackParamList>();

// Task Management Screen - Page principale avec 2 boutons
function TaskManagement({ navigation }: NativeStackScreenProps<TaskStackParamList, 'TaskManagement'>) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('CreateTaskForm')}>
        Create Task Form
      </Button>
      <Button onPress={() => navigation.navigate('TaskList')}>
        Task List
      </Button>
    </View>
  );
}

// Create Task Form Screen
function CreateTaskForm({ navigation }: NativeStackScreenProps<TaskStackParamList, 'CreateTaskForm'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Task Form</Text>
      <Button onPress={() => navigation.navigate('TaskManagement')}>
        Back to Task Management
      </Button>
    </View>
  );
}

// Task List Screen - avec 2 boutons
function TaskList({ navigation }: NativeStackScreenProps<TaskStackParamList, 'TaskList'>) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('TaskUpdateForm')}>
        Task Update Form
      </Button>
      <Button onPress={() => navigation.navigate('TaskCalendar')}>
        Task Calendar
      </Button>
    </View>
  );
}

// Task Update Form Screen
function TaskUpdateForm({ navigation }: NativeStackScreenProps<TaskStackParamList, 'TaskUpdateForm'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Update Form</Text>
      <Button onPress={() => navigation.navigate('TaskList')}>
        Back to Task List
      </Button>
    </View>
  );
}

// Task Calendar Screen
function TaskCalendar({ navigation }: NativeStackScreenProps<TaskStackParamList, 'TaskCalendar'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Calendar</Text>
      <Button onPress={() => navigation.navigate('TaskList')}>
        Back to Task List
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export function TaskNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskManagement"
        component={TaskManagement}
        options={{ title: 'Task Management' }}
      />
      <Stack.Screen
        name="CreateTaskForm"
        component={CreateTaskForm}
        options={({ navigation }) => ({
          title: 'Create Task Form',
          headerRight: () => (
            <HeaderButton onPress={navigation.goBack}>
              <Text>Close</Text>
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={({ navigation }) => ({
          title: 'Task List',
          headerRight: () => (
            <HeaderButton onPress={navigation.goBack}>
              <Text>Close</Text>
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="TaskUpdateForm"
        component={TaskUpdateForm}
        options={({ navigation }) => ({
          title: 'Task Update Form',
          headerRight: () => (
            <HeaderButton onPress={navigation.goBack}>
              <Text>Close</Text>
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="TaskCalendar"
        component={TaskCalendar}
        options={({ navigation }) => ({
          title: 'Task Calendar',
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
