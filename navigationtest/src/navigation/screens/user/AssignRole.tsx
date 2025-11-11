import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "AssignRole">;

export default function AssignRole() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assign Role Page</Text>

      <Text style={styles.text}>Mock-up role assignment page</Text>

      {/* Confirm role assignment → Confirmation Page */}
      <TouchableOpacity
        style={styles.assignButton}
        onPress={() =>
          navigation.navigate("ConfirmationPage", {
            user: {
              name: "John Doe",
              email: "john@example.com",
              password: "",
              role: "Host", // new role
              createdAt: new Date(),
            },
          })
        }
      >
        <Text style={styles.buttonText}>Assign Role</Text>
      </TouchableOpacity>

      {/* Back to User List */}
      <TouchableOpacity
        style={[styles.assignButton, styles.backButton]}
        onPress={() => navigation.navigate("UserList")}
      >
        <Text style={styles.buttonText}>Back to User List</Text>
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
  text: { fontSize: 18, marginBottom: 4 },
  assignButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  backButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
