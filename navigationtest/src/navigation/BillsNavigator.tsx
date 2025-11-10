import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Bills } from './screens/payment/Bills';
import { CreateBill } from './screens/payment/CreateBill';
import { UpdateBill } from './screens/payment/UpdateBill';
import { DeleteBill } from './screens/payment/DeleteBill';

export type BillsStackParamList = {
  Bills: undefined;
  CreateBill: undefined;
  UpdateBill: undefined;
  DeleteBill: undefined;
};

const Stack = createNativeStackNavigator<BillsStackParamList>();

export function BillsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bills" component={Bills} options={{ title: 'Bills' }} />
      <Stack.Screen name="CreateBill" component={CreateBill} />
      <Stack.Screen name="UpdateBill" component={UpdateBill} />
      <Stack.Screen name="DeleteBill" component={DeleteBill} />
    </Stack.Navigator>
  );
}
