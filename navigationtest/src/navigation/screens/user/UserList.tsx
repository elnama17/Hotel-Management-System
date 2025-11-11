import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "UserList">;

export default function UserList() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User List Screen</Text>

      <TouchableOpacity
        style={[styles.button, styles.roleButton]}
        onPress={() => navigation.navigate("AssignRole")}
      >
        <Text style={styles.buttonText}>Assign Role</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
  button: {
    backgroundColor: "#9b59b6",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  roleButton: {
    backgroundColor: "#9b59b6",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
