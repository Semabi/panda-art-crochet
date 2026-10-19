import { ImageSourcePropType } from 'react-native';

export interface Categoria {
  id: string;
  nombre: string;
  emoji: string;
  descripcion: string;
}

export interface Producto {
  id: number;
  nombre: string;
  categoriaId: string;
  descripcion: string;
  precioEstimado: number;
  imagen: ImageSourcePropType | null;
  emoji: string;
  disponible: boolean;
}

export interface DatosPedido {
  producto: string;
  nombre: string;
  telefono: string;
  tipo: string;
  detalles: string;
  colores: string;
  tamano: string;
  fecha: string;
  presupuesto: string;
  referencia: string;
}

export type RootStackParamList = {
  Inicio: undefined;
  Catalogo: { categoriaId?: string } | undefined;
  Detalle: { producto: Producto };
  Personalizados: { producto?: Producto } | undefined;
  Confirmacion: { mensaje: string };
  Nosotros: undefined;
  Contacto: undefined;
};