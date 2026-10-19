import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../types';
import InicioScreen from '../screens/InicioScreen';
import CatalogoScreen from '../screens/CatalogoScreen';
import DetalleScreen from '../screens/DetalleScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: colors.mint },
        headerTintColor: colors.brown,
        contentStyle: { backgroundColor: colors.cream },
      }}
    >
      <Stack.Screen name="Inicio" component={InicioScreen} options={{ title: 'Panda Art Crochet' }} />
      <Stack.Screen name="Catalogo" component={CatalogoScreen} options={{ title: 'Catálogo' }} />
      <Stack.Screen name="Detalle" component={DetalleScreen} options={{ title: 'Detalle del producto' }} />
    </Stack.Navigator>
  );
}