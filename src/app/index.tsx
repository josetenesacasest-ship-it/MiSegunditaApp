import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo React Native con mi rpofesora enc lase de moviles!');

  return (
    <View style={styles.contenedor}>
      {/* Reto: Título modificado */}
      <Text style={styles.titulo}>Mi Tarea de React Native esta del hijuemadres</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Pressable
        style={styles.boton}
        /* Reto: Mensaje que aparece al pulsar modificado */
        onPress={() => setMensaje('¡Reto completado con éxito!')} 
      >
        <Text style={styles.textoBoton}>Púlsame que me gusta</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#8f10b9', // Reto: Color cambiado a verde esmeralda
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});