import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface BotonProps {
  titulo: string;
  onPress: () => void;
  tipo?: 'principal' | 'secundario';
}

export default function Boton({ titulo, onPress, tipo }: BotonProps) {
  const secundario = tipo === 'secundario';

  return (
    <TouchableOpacity
      style={[styles.boton, secundario ? styles.secundario : styles.principal]}
      onPress={onPress}
    >
      <Text style={[styles.texto, secundario && styles.textoSecundario]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 6,
  },
  principal: {
    backgroundColor: colors.green,
  },
  secundario: {
    backgroundColor: colors.pink,
  },
  texto: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoSecundario: {
    color: colors.brown,
  },
});