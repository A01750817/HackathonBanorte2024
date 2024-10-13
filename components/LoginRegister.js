// components/LoginRegister.js

import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo_google from '../assets/imgicons8.png';    
import { AuthContext } from './AuthContext';
import BanorteLogo from './BanorteLogo'; // Importar BanorteLogo

export default function LoginRegister() {
  const { setUser } = useContext(AuthContext);

  const handleLogin = () => {
    setUser({ authenticated: true, data: {} });
  };

  return (
    <View style={styles.container}>
      {/* Agregar el logo de Banorte */}
      <BanorteLogo />

      {/* Contenido existente */}
      <View style={styles.contentContainer}>
        {/* Título */}
        <Text style={styles.title}>Ingresar</Text>

        {/* Campos de entrada */}
        <TextInput 
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput 
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
        />

        {/* Botón de inicio de sesión */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        {/* Botón de Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Image 
            source={logo_google}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Ingresa con Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Alinear los elementos en el centro verticalmente
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  contentContainer: {
    width: '100%', 
    paddingHorizontal: 20,
    marginTop: 20, // Añade un margen superior para separar el contenido del logo
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
    width: '100%', 
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
  },
  button: {
    backgroundColor: '#D50000',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 15,
  },
  googleIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  googleText: {
    color: '#333',
    fontSize: 16,
  },
});
