import { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { categorias } from '../data/categories';
import { productos } from '../data/products';
import { RootStackParamList } from '../types';
import ProductCard from '../components/ProductCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Catalogo'>;

export default function CatalogoScreen({ navigation, route }: Props) {
  let categoriaInicial = 'todos';
  if (route.params && route.params.categoriaId) {
    categoriaInicial = route.params.categoriaId;
  }

  const [categoria, setCategoria] = useState<string>(categoriaInicial);

  const filtros = [{ id: 'todos', nombre: 'Todos' }].concat(categorias);

  let lista = productos;
  if (categoria !== 'todos') {
    lista = productos.filter((p) => p.categoriaId === categoria);
  }

  return (
    <View style={styles.contenedor}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filtros.map((f) => (
            <TouchableOpacity
              key={f.id}
              style={[styles.filtro, categoria === f.id && styles.filtroActivo]}
              onPress={() => setCategoria(f.id)}
            >
              <Text
                style={[styles.filtroTexto, categoria === f.id && styles.filtroTextoActivo]}
              >
                {f.nombre}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vacio}>No hay productos en esta categoría todavía.</Text>
        }
        renderItem={({ item }) => (
          <ProductCard
            producto={item}
            onPress={() => navigation.navigate('Detalle', { producto: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  filtro: {
    backgroundColor: colors.pink,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
  },
  filtroActivo: {
    backgroundColor: colors.green,
  },
  filtroTexto: {
    color: colors.brown,
    fontSize: 14,
  },
  filtroTextoActivo: {
    color: colors.white,
    fontWeight: 'bold',
  },
  lista: {
    paddingTop: 16,
  },
  vacio: {
    textAlign: 'center',
    color: colors.brown,
    marginTop: 30,
    fontSize: 16,
  },
});