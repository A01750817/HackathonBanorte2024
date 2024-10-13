import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from "react-native";

// Importa la imagen de Maya
import mayaIcon from '../assets/maya.png';

export default function ChatWithAI() {
    const [messages, setMessages] = useState([
        { id: '1', text: '¡Hola! ¿En qué puedo ayudarte hoy?', sender: 'AI' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim() === '') return;

        const newMessage = {
            id: (messages.length + 1).toString(),
            text: inputText,
            sender: 'User',
        };

        setMessages([...messages, newMessage]);
        setInputText('');

        // Simular una respuesta de la IA después de 1 segundo
        setTimeout(() => {
            const aiResponse = {
                id: (messages.length + 2).toString(),
                text: 'Esta es una respuesta simulada de la IA.',
                sender: 'AI',
            };
            setMessages(prevMessages => [...prevMessages, aiResponse]);
        }, 1000);
    };

    const renderItem = ({ item }) => (
        <View style={[
            styles.messageContainer, 
            item.sender === 'AI' ? styles.aiMessageContainer : styles.userMessageContainer
        ]}>
            {/* Si el mensaje es de la IA, muestra el mensaje y el icono a la derecha */}
            {item.sender === 'AI' && (
                <>
                    <Text style={styles.messageText}>{item.text}</Text>
                    <Image source={mayaIcon} style={styles.icon} />
                </>
            )}
            
            {/* Si el mensaje es del usuario, solo muestra el mensaje */}
            {item.sender !== 'AI' && (
                <Text style={styles.messageText}>{item.text}</Text>
            )}
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={90}
        >
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.messagesList}
                inverted
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu mensaje..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesList: {
        padding: 10,
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    messageContainer: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row', // Alineación horizontal del texto y la imagen
        alignItems: 'center', // Alineación vertical centrada
    },
    aiMessageContainer: {
        backgroundColor: '#EB0029',
        alignSelf: 'flex-start',
        flexDirection: 'row', // Alineación horizontal
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    userMessageContainer: {
        backgroundColor: '#D9D9D9',
        alignSelf: 'flex-end',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    messageText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10, // Añade espacio entre el texto y el icono
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#EB0029',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
