// components/BottomBar.js

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importa los íconos para las pestañas
import LibroBlanco from '../assets/LibroBlanco.png';
import userBlanco from '../assets/userBLanco.png';
import iconBlancoPlay from '../assets/iconPlayBlanco.png';
import rankingsIcon from '../assets/TrioPersonas.png'; // Asegúrate de que este ícono exista en assets

/**
 * Componente funcional BottomBar
 * Representa la barra inferior de navegación con varios botones.
 */
export default function BottomBar({ state }) {
    const navigation = useNavigation();
    const currentRoute = state?.routes[state.index]?.name || '';
    const isCoinPath = currentRoute === 'CoinPathStack';
    const isVideoMenu = currentRoute === 'VideoMenu';
    const isPerfil = currentRoute === 'Perfil';
    const isRankingsAndChat = currentRoute === 'RankingsAndChat'; // Definir isRankingsAndChat

    return (
        <View style={styles.bottomBar}>
            {/* Botón de Perfil */}
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <Image
                    source={userBlanco}
                    style={[
                        styles.bottomBarIcon,
                        isPerfil && styles.iconActivo // Aplica estilo rojo si Perfil está activa
                    ]}
                />
            </TouchableOpacity>

            {/* Botón de VideoMenu */}
            <TouchableOpacity onPress={() => navigation.navigate('VideoMenu')}>
                <Image 
                    source={iconBlancoPlay}
                    style={[
                        styles.bottomBarIcon,
                        isVideoMenu && styles.iconActivo // Aplica estilo rojo si VideoMenu está activa
                    ]}
                />
            </TouchableOpacity>

            {/* Botón de CoinPathStack */}
            <TouchableOpacity onPress={() => navigation.navigate('CoinPathStack')}>
                <Image 
                    source={LibroBlanco}
                    style={[
                        styles.bottomBarIcon,
                        isCoinPath && styles.iconActivo // Aplica estilo rojo si CoinPathStack está activa
                    ]}
                />
            </TouchableOpacity>

            {/* Botón de RankingsAndChat */}
            <TouchableOpacity onPress={() => navigation.navigate('RankingsAndChat')}>
            <Image 
                source={rankingsIcon}
                style={[
                    styles.bottomBarIcon,
                    isRankingsAndChat && styles.iconActivo // Aplica estilo rojo si RankingsAndChat está activa
                ]}
            />
             </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        backgroundColor: '#5B6670',
        alignItems: 'center',
        justifyContent: 'space-around', 
    },
    bottomBarIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain', // Asegura que la imagen se ajuste correctamente
    },
    iconActivo: {
        tintColor: '#EB0029', // Cambia el color a rojo cuando está activo
    }
});
