import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../../navigation/UserNavigator";

type Nav = NativeStackNavigationProp<UserStackParamList, "EditUser">;

export default function EditUser() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User Page</Text>

      {/* mock info (no real form, just a mock) */}
      <Text style={styles.text}>Editing: Vallie E</Text>
      <Text style={styles.text}>Email: vallie@gmail.com</Text>
      <Text style={styles.text}>Role: Admin</Text>

      {/* Save -> Confirmation */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() =>
          navigation.navigate("ConfirmationPage", {
            user: {
              name: "Vallie E",
              email: "vallie@gmail.com",
              password: "updatedPass123",
              role: "Admin",
              createdAt: new Date(),
            },
          })
        }
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Back -> Profile */}
      <TouchableOpacity
        style={[styles.saveButton, styles.backButton]}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff", gap:12 },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:20 },
  text:{ fontSize:18, marginBottom:4 },
  saveButton:{ backgroundColor:"#2ecc71", paddingVertical:14, paddingHorizontal:40, borderRadius:8, alignItems:"center", width:"80%" },
  backButton:{ backgroundColor:"#3498db" },
  buttonText:{ color:"#fff", fontSize:18, fontWeight:"bold" },
});
