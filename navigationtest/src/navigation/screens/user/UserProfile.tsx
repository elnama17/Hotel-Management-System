import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UserProfile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Page</Text>

      <Text style={styles.text}>Name: VAllie E</Text>
      <Text style={styles.text}>Email: vallie@example.com</Text>
      <Text style={styles.text}>Role: Admin</Text>

      <TouchableOpacity
        style={[styles.button, styles.editButton]}
        onPress={() => navigation.navigate("EditUser")}
      >
        <Text style={styles.buttonText}>Edit User</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={[styles.button, styles.settingsButton]}
  onPress={() => navigation.navigate("AccountSettings")}
>
  <Text style={styles.buttonText}>Account Settings</Text>
</TouchableOpacity>
<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserManagement")}
      >
        <Text style={styles.buttonText}>Back to Management</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff", gap:10 },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:20 },
  text:{ fontSize:18, marginBottom:6 },
  button:{ backgroundColor:"#3498db", paddingVertical:14, paddingHorizontal:40, borderRadius:8, alignItems:"center", width:"80%" },
  editButton:{ backgroundColor:"#f39c12" },
  buttonText:{ color:"#fff", fontSize:18, fontWeight:"bold" },
});
