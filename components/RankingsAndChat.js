    // components/RankingsAndChat.js

    import React from "react";
    import { View, Text, StyleSheet } from "react-native";
    import BanorteLogo from './BanorteLogo'; // Asegúrate de que la ruta es correcta
    import RankingList from './RankingList'; // Componente para listar rankings
    import ChatWithAI from './ChatWithAI'; // Componente para el chat con IA

    export default function RankingsAndChat() {
        return (
            <View style={styles.container}>
                {/* Logo de Banorte */}
                <BanorteLogo />

                {/* Sección de Rankings */}
                <View style={styles.rankingsContainer}>
                    <Text style={styles.sectionTitle}>Ranking de Usuarios</Text>
                    <RankingList />
                </View>

                {/* Sección de Chat con IA */}
                <View style={styles.chatContainer}>
                    <Text style={styles.sectionTitle}>Chat con IA</Text>
                    <ChatWithAI />
                </View>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingTop: 10,
        },
        rankingsContainer: {
            flex: 2,
            marginBottom: 20,
        },
        chatContainer: {
            flex: 1,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#EB0029',
            marginBottom: 10,
            textAlign: 'center',
        },
    });
