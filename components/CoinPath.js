// components/CoinPath.js

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import coin from '../assets/iconUnexplored.png'; // Asegúrate de que esta imagen exista en assets
import { useNavigation } from '@react-navigation/native';
import BanorteLogo from './BanorteLogo'; // Asegúrate de que la ruta es correcta

const cantidadDeModulos = 50; // Número de monedas a mostrar

export default function CoinPath() {
    const navigation = useNavigation();

    // Determina la alineación de cada moneda para crear un efecto de escalera
    const getAlignment = (index) => {
        const pattern = ['flex-start', 'center', 'flex-end', 'center'];
        return pattern[index % pattern.length];
    };

    // Maneja la navegación al presionar una moneda
    const handleCoinPress = (index) => {
        // Por ahora, solo el primer índice navega a QAProblems
        // Puedes expandir esto para que diferentes monedas naveguen a diferentes pantallas o pasen parámetros
        if (index === 0) {
            navigation.navigate('QAProblems');
        } else {
            // Implementa lógica para otras monedas si es necesario
            // Por ejemplo, navegar a diferentes preguntas o módulos
            alert(`Presionaste la moneda ${index + 1}`);
        }
    };

    return (
        <ScrollView 
            contentContainerStyle={styles.coinPathContent}
            style={styles.coinPath}
            showsVerticalScrollIndicator={false}
        >
            {/* Agregar el logo de Banorte */}
            <BanorteLogo />

            {/* Botón para comenzar la lección */}
            <TouchableOpacity
                style={styles.comenzarLeccion}
                onPress={() => navigation.navigate('QAProblems')}
            >
                <Text style={styles.textComenzarLeccion}>Comenzar Lección</Text>
            </TouchableOpacity>

            {/* Lista de monedas */}
            {Array.from({ length: cantidadDeModulos }, (_, index) => (
                <View 
                    key={index} 
                    style={[styles.coinContainer, { alignSelf: getAlignment(index) }]}
                >
                    <TouchableOpacity
                        onPress={() => handleCoinPress(index)}
                        activeOpacity={0.7}
                    >
                        <Image 
                            source={coin}
                            style={styles.coin}
                        />
                        {/* Opcional: Mostrar número o etiqueta debajo de la moneda */}
                        <Text style={styles.coinLabel}>{index + 1}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    coinPath: {
        width: '80%',
        paddingVertical: 10,
        alignSelf: 'center', // Centra el contenedor dentro de su contenedor principal
    },
    coinPathContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'stretch',
    },
    coinContainer: {
        marginVertical: 10, 
    },
    coin: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    coinLabel: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 14,
        color: '#333',
    },
    comenzarLeccion: {
        width: '100%',
        height: 70,
        backgroundColor: '#EB0029',
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center', // Centra el texto verticalmente
        alignItems: 'center', // Centra el texto horizontalmente
    },
    textComenzarLeccion: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
