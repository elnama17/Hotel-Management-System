import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "DeleteUser">;

export default function DeleteUser() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete User Page</Text>

      <Text style={styles.warningText}>
        Are you sure you want to delete this user?
      </Text>

      {/* Confirm Delete → ConfirmationPage */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() =>
          navigation.navigate("ConfirmationPage", {
            user: {
              name: "Vallie E",
              email: "vallie@gmail.com",
              password: "",
              role: "Admin",
              createdAt: new Date(),
            },
          })
        }
      >
        <Text style={styles.buttonText}>Confirm Delete</Text>
      </TouchableOpacity>

      {/* Back → User Management */}
      <TouchableOpacity
        style={[styles.deleteButton, styles.backButton]}
        onPress={() => navigation.navigate("UserManagement")}
      >
        <Text style={styles.buttonText}>Cancel</Text>
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
    gap: 15,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  warningText: {
    fontSize: 18,
    color: "#e74c3c",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  backButton: { backgroundColor: "#3498db" },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
