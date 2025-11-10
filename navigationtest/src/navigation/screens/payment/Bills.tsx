import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BillsStackParamList } from '../../BillsNavigator';

type BillsScreenNavigation = NativeStackNavigationProp<BillsStackParamList, 'Bills'>;

export function Bills() {
  const navigation = useNavigation<BillsScreenNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bills</Text>
      <Button
        title="Create Bill"
        onPress={() => navigation.navigate('CreateBill')}
      />
      <Button
        title="Delete Bill"
        onPress={() => navigation.navigate('DeleteBill')}
      />
      <Button
        title="Update Bill"
        onPress={() => navigation.navigate('UpdateBill')}
      />          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
