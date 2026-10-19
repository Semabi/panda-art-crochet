import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../types';
import Boton from '../components/Boton';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalle'>;

export default function DetalleScreen({ navigation, route }: Props) {
  const producto = route.params.producto;

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.imagenBox}>
        {producto.imagen ? (
          <Image source={producto.imagen} style={styles.imagen} />
        ) : (
          <Text style={styles.emoji}>{producto.emoji}</Text>
        )}
      </View>

      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.precio}>
        Precio estimado: ${producto.precioEstimado.toLocaleString('es-CO')}
      </Text>
      <Text style={producto.disponible ? styles.disponible : styles.agotado}>
        {producto.disponible ? 'Disponible' : 'Disponible por encargo'}
      </Text>
      <Text style={styles.descripcion}>{producto.descripcion}</Text>

      <Boton
        titulo="Solicitar cotización"
        onPress={() => navigation.navigate('Personalizados', { producto: producto })}
      />
      <Boton
        titulo="Seguir explorando"
        tipo="secundario"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 16,
    paddingBottom: 40,
  },
  imagenBox: {
    height: 240,
    borderRadius: 20,
    backgroundColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: 240,
  },
  emoji: {
    fontSize: 100,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.brown,
    marginTop: 16,
  },
  precio: {
    fontSize: 18,
    color: colors.brown,
    marginTop: 8,
  },
  disponible: {
    fontSize: 16,
    color: colors.green,
    marginTop: 6,
  },
  agotado: {
    fontSize: 16,
    color: colors.error,
    marginTop: 6,
  },
  descripcion: {
    fontSize: 16,
    color: colors.brown,
    marginVertical: 16,
    lineHeight: 22,
  },
});