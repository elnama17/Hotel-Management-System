import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Props = NativeStackScreenProps<UserStackParamList, "ConfirmationPage">;

export default function ConfirmationPage({ route, navigation }: Props) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Action is confirmed! </Text>

      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Role: {user.role}</Text>
      <Text style={styles.text}>
        Confirmed: {user.createdAt.toLocaleString()}
      </Text>

      <Button
        title="Back to User Management"
        onPress={() => navigation.navigate("UserManagement")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 8 },
});
