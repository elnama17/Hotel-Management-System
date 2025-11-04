// Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Screens
import { Home } from './screens/Home';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';

// Feature navigators
import { PaymentNavigator } from './PaymentNavigator';
import { ReservationNavigator } from './ReservationNavigator';
import { RoomNavigator } from './RoomNavigator';
import { TaskNavigator } from './TaskNavigator';
import { UserNavigator } from './UserNavigator';

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Hotel Management',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/newspaper.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/bell.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Root stack
export type RootStackParamList = {
  HomeTabs: undefined;
  Payment: undefined;
  Reservation: undefined;
  Room: undefined;
  Task: undefined;
  User: undefined;
  NotFound: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="HomeTabs" component={HomeTabs} />
        <RootStack.Screen name="Payment" component={PaymentNavigator} />
        <RootStack.Screen name="Reservation" component={ReservationNavigator} />
        <RootStack.Screen name="Room" component={RoomNavigator} />
        <RootStack.Screen name="Task" component={TaskNavigator} />
        <RootStack.Screen name="User" component={UserNavigator} />
        <RootStack.Screen name="NotFound" component={NotFound} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
