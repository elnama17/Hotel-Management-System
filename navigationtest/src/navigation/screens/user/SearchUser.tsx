import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "SearchUser">;

export default function SearchUser() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search User Page</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("UserDetails", {
            // mock user data
            user: {
              name: "Jane S",
              email: "jane@example.com",
              password: "12345",
              role: "Member",
              createdAt: new Date(),
            },
          })
        }
      >
        <Text style={styles.buttonText}>View User Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.navigate("UserManagement")}
      >
        <Text style={styles.buttonText}>Back to Management</Text>
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
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 40 },
  button: {
    backgroundColor: "#9b59b6",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  backButton: { backgroundColor: "#3498db" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
