// components/Perfil.js

import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { AuthContext } from './AuthContext'; // Asegúrate de que la ruta es correcta
import BanorteLogo from './BanorteLogo'; // Importa tu componente BanorteLogo

// Importa los íconos desde assets
import editProfileIcon from '../assets/user-avatar.png';
import settingsIcon from '../assets/gear.png';
import logoutIcon from '../assets/logout.png';
import userProfile from '../assets/profile-user.png'; // Imagen de perfil por defecto

export default function Perfil() {
    const { setUser } = useContext(AuthContext);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        Alert.alert(
            "Cerrar Sesión",
            "¿Estás seguro de que deseas cerrar sesión?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "Sí", onPress: () => setUser({ authenticated: false, data: {} }) }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo de Banorte */}
            <BanorteLogo />

            {/* Imagen de Perfil */}
            <View style={styles.profileImageContainer}>
                <Image 
                    source={userProfile} 
                    style={styles.profileImage} 
                />
            </View>

            {/* Información del Usuario */}
            <View style={styles.userInfo}>
                <Text style={styles.userName}>Juan Pérez</Text>
                <Text style={styles.userEmail}>juan.perez@ejemplo.com</Text>
            </View>

            {/* Opciones de Navegación */}
            <View style={styles.optionsContainer}>
                {/* Editar Perfil */}
                <TouchableOpacity style={styles.option} onPress={() => Alert.alert("Editar Perfil", "Funcionalidad en desarrollo.")}>
                    <Image source={editProfileIcon} style={styles.optionIcon} />
                    <Text style={styles.optionText}>Editar Perfil</Text>
                </TouchableOpacity>

                {/* Configuración */}
                <TouchableOpacity style={styles.option} onPress={() => Alert.alert("Configuración", "Funcionalidad en desarrollo.")}>
                    <Image source={settingsIcon} style={styles.optionIcon} />
                    <Text style={styles.optionText}>Configuración</Text>
                </TouchableOpacity>

                {/* Cerrar Sesión */}
                <TouchableOpacity style={styles.option} onPress={handleLogout}>
                    <Image source={logoutIcon} style={styles.optionIcon} />
                    <Text style={styles.optionText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    profileImageContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60, // Hace que la imagen sea circular
        borderWidth: 3,
        borderColor: '#EB0029', // Color de borde similar al TopBar
    },
    userInfo: {
        marginTop: 15,
        alignItems: 'center',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    optionsContainer: {
        marginTop: 30,
        width: '100%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionIcon: {
        width: 24,
        height: 24,
        tintColor: '#EB0029', // Aplica el color rojo al ícono
        marginRight: 15,
    },
    optionText: {
        fontSize: 18,
        color: '#333',
    },
});
