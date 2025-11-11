import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UserDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.text}>Name: Vallie E</Text>
      <Text style={styles.text}>Email: vallie@gmail.com</Text>
      <Text style={styles.text}>Role: Member</Text>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Search</Text>
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
    gap: 10,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 5 },
  button: {
    backgroundColor: "#2ecc71",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  backButton: { backgroundColor: "#3498db" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
