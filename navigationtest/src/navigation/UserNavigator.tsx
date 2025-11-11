// UserNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserManagement } from './screens/user/UserManagement';
import { HeaderButton, Text } from '@react-navigation/elements';
import CreateUser from './screens/user/CreateUser';
import SearchUser from './screens/user/SearchUser';
import UserList from './screens/user/UserList';
import DeleteUser from './screens/user/DeleteUser';
import ConfirmationPage from './screens/user/ConfirmationPage';
import UserDetails from './screens/user/UserDetails';
import UserProfile from "./screens/user/UserProfile";
import EditUser from "./screens/user/EditUser";
import AccountSettings from "./screens/user/AccountSettings";
import ChangePassword from "./screens/user/ChangePassword";
import AssignRole from "./screens/user/AssignRole";






export type UserStackParamList = {
  UserManagement: undefined;      // landing page doesn't need params
  CreateUser: undefined;
  SearchUser: undefined;
  UserList: undefined;
  DeleteUser: undefined;
  ConfirmationPage: undefined;    // if you pass params later, we’ll type it then
  EditUser: undefined;
  AccountSettings: undefined;
  ChangePassword: undefined;
  AssignRole: undefined;


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
      <Stack.Screen
  name="CreateUser"
  component={CreateUser}
  options={{ title: 'Create User' }}
/>

<Stack.Screen
  name="SearchUser"
  component={SearchUser}
  options={{ title: 'Search User' }}
/>

<Stack.Screen
  name="UserList"
  component={UserList}
  options={{ title: 'User List' }}
/>

<Stack.Screen
  name="DeleteUser"
  component={DeleteUser}
  options={{ title: 'Delete User' }}
/>

<Stack.Screen
  name="ConfirmationPage"
  component={ConfirmationPage}
  options={{ title: 'Confirmation' }}
/>
<Stack.Screen name="UserDetails" component={UserDetails} options={{ title: "User Details" }} />
<Stack.Screen name="UserProfile" component={UserProfile} options={{ title: "User Profile" }} />
<Stack.Screen name="EditUser" component={EditUser} options={{ title: "Edit User" }} />
<Stack.Screen
  name="AccountSettings"
  component={AccountSettings}
  options={{ title: "Account Settings" }}
/>
<Stack.Screen
  name="ChangePassword"
  component={ChangePassword}
  options={{ title: "Change Password" }}
/>
<Stack.Screen
  name="AssignRole"
  component={AssignRole}
  options={{ title: "Assign Role" }}
/>



    </Stack.Navigator>
  );
}
