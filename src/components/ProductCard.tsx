import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { Producto } from '../types';

interface ProductCardProps {
  producto: Producto;
  onPress: () => void;
}

export default function ProductCard({ producto, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imagenBox}>
        {producto.imagen ? (
          <Image source={producto.imagen} style={styles.imagen} />
        ) : (
          <Text style={styles.emoji}>{producto.emoji}</Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.precio}>
          Desde ${producto.precioEstimado.toLocaleString('es-CO')}
        </Text>
        <Text style={producto.disponible ? styles.disponible : styles.agotado}>
          {producto.disponible ? 'Disponible' : 'Por encargo'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  imagenBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imagen: {
    width: 80,
    height: 80,
  },
  emoji: {
    fontSize: 40,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.brown,
  },
  precio: {
    fontSize: 15,
    color: colors.brown,
    marginTop: 4,
  },
  disponible: {
    fontSize: 14,
    color: colors.green,
    marginTop: 4,
  },
  agotado: {
    fontSize: 14,
    color: colors.error,
    marginTop: 4,
  },
});