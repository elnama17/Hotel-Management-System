import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "UserManagement">;

export function UserManagement() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateUser")}
      >
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("SearchUser")}
      >
        <Text style={styles.buttonText}>Search User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.listButton]}
        onPress={() => navigation.navigate("UserList")}
      >
        <Text style={styles.buttonText}>User List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => navigation.navigate("DeleteUser")}
      >
        <Text style={styles.buttonText}>Delete User</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={[styles.button, styles.profileButton]}
  onPress={() => navigation.navigate("UserProfile")}
>
  <Text style={styles.buttonText}>View User Profile</Text>
</TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  secondaryButton: {
    backgroundColor: "#3498db",
  },
  listButton: {
    backgroundColor: "#9b59b6",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
