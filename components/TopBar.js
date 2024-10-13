// components/TopBar.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import banorteLogoSinLetras from '../assets/banorteLogoSinLetras.png';
import fuegoBlanco from '../assets/fuegoBlanco.png';
import billete from '../assets/billete.png'; 

const cantidadDelNumero = 13; 

export default function TopBar() {
    return (
        <View style={styles.topbar}>
            <View style={styles.header}>
                {/* Grupo de elementos en el lado izquierdo */}
                <View style={styles.leftContainer}>
                    <Image 
                        source={banorteLogoSinLetras}
                        style={styles.headerImage}
                    />
                    <Image
                        source={fuegoBlanco}
                        style={styles.headerImage}
                    />
                    <Text style={styles.counterText}>{cantidadDelNumero}</Text>
                </View>
                
                {/* Grupo de elementos en el lado derecho */}
                <View style={styles.rightContainer}>
                    <Text style={styles.nivel}>NIVEL:</Text>
                    <Image source={billete} style={styles.iconoNivel} />
                    <Text style={styles.nivelDeFinanzas}>Finanzas Básicas</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topbar: {
        width: '100%',
        height: 65,
        backgroundColor: '#EB0029',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 10,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerImage: {
        width: 40,
        height: 40,
        marginRight: 5,
    },
    counterText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -5,
    },
    nivel: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5,
    },
    iconoNivel: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    nivelDeFinanzas: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});
