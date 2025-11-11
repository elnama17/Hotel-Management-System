import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AccountSettings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings Page</Text>

      <Text style={styles.text}>• Change Password</Text>
      <Text style={styles.text}>• Update Email</Text>
      <Text style={styles.text}>• Manage Notifications</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.changePassButton]}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={styles.buttonText}>Change Password</Text>
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
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
