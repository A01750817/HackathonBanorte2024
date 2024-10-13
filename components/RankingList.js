// components/RankingList.js

import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

// Datos de ejemplo para el ranking
const rankings = [
    { id: '1', name: 'Juan Pérez', score: 150 },
    { id: '2', name: 'María Gómez', score: 140 },
    { id: '3', name: 'Carlos López', score: 130 },
    { id: '4', name: 'Ana Martínez', score: 120 },
    { id: '5', name: 'Luis Rodríguez', score: 110 },
    // Añade más usuarios según sea necesario
];

export default function RankingList() {
    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score} pts</Text>
        </View>
    );

    return (
        <FlatList
            data={rankings}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rank: {
        width: 30,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    score: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EB0029',
    },
});
