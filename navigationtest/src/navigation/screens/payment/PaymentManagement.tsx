import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PaymentStackParamList = {
  PaymentManagement: undefined;
  Bills: undefined;
};

export function PaymentManagement() {
  const navigation = useNavigation<NativeStackNavigationProp<PaymentStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Payment management</Text>
      <Button
        title="Bills"
        onPress={() => navigation.navigate('Bills')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  row: { flexDirection: 'row', gap: 10 },
});
