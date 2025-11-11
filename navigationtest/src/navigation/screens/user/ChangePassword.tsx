import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "ChangePassword">;

export default function ChangePassword() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <Text style={styles.text}>Mock-up password change screen</Text>
      <Text style={styles.text}>Imagine old/new password fields here.</Text>

      {/* Save Password → Confirmation Page */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() =>
          navigation.navigate("ConfirmationPage", {
            user: {
              name: "John Doe",
              email: "john@example.com",
              password: "newPassword123",
              role: "Admin",
              createdAt: new Date(),
            },
          })
        }
      >
        <Text style={styles.buttonText}>Save Password</Text>
      </TouchableOpacity>

      {/* Back to Account Settings */}
      <TouchableOpacity
        style={[styles.saveButton, styles.backButton]}
        onPress={() => navigation.navigate("AccountSettings")}
      >
        <Text style={styles.buttonText}>Back to Settings</Text>
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
    gap: 12,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18 },
  saveButton: {
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
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
