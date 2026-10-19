import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { categorias } from '../data/categories';
import { RootStackParamList } from '../types';
import Boton from '../components/Boton';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;

export default function InicioScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.banner}>
        <Text style={styles.logo}>🐼 Panda Art Crochet</Text>
        <Text style={styles.frase}>
          Tejidos hechos a mano con mucho cariño, para regalar y para ti
        </Text>
        <Boton
          titulo="Explorar catálogo"
          onPress={() => navigation.navigate('Catalogo')}
        />
      </View>

      <Text style={styles.titulo}>Categorías populares</Text>
      <View style={styles.categorias}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.categoria}
            onPress={() => navigation.navigate('Catalogo', { categoriaId: cat.id })}
          >
            <View style={styles.circulo}>
              <Text style={styles.emoji}>{cat.emoji}</Text>
            </View>
            <Text style={styles.categoriaTexto}>{cat.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.personalizado}>
        <Text style={styles.personalizadoTitulo}>¿Tienes una idea propia?</Text>
        <Text style={styles.personalizadoTexto}>
          Cuéntanos qué quieres, los colores y el tamaño, y lo tejemos para ti.
        </Text>
        <Boton
          titulo="Iniciar pedido personalizado"
          onPress={() => navigation.navigate('Personalizados')}
        />
      </View>

      <Boton
        titulo="Nosotros"
        tipo="secundario"
        onPress={() => navigation.navigate('Nosotros')}
      />
      <Boton
        titulo="Contacto"
        tipo="secundario"
        onPress={() => navigation.navigate('Contacto')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 16,
    paddingBottom: 40,
  },
  banner: {
    backgroundColor: colors.mint,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.brown,
    textAlign: 'center',
  },
  frase: {
    fontSize: 16,
    color: colors.brown,
    textAlign: 'center',
    marginVertical: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.brown,
    marginTop: 24,
    marginBottom: 12,
  },
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoria: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  circulo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 42,
  },
  categoriaTexto: {
    marginTop: 8,
    fontSize: 14,
    color: colors.brown,
    textAlign: 'center',
  },
  personalizado: {
    backgroundColor: colors.pink,
    borderRadius: 20,
    padding: 20,
    marginVertical: 16,
  },
  personalizadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.brown,
  },
  personalizadoTexto: {
    fontSize: 15,
    color: colors.brown,
    marginVertical: 8,
  },
});