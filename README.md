BanorteGoApp


BanorteGoApp es una aplicación móvil desarrollada para el Hackathon Banorte 2024, diseñada para facilitar la gestión financiera personal a través de una interfaz intuitiva y funcionalidades innovadoras como chat con inteligencia artificial, seguimiento de progresos mediante un sistema de rankings y lecciones interactivas.

📱 Características
Autenticación de Usuarios: Inicio de sesión y registro seguro utilizando AuthContext.
Navegación Intuitiva: Barra de navegación inferior personalizada con múltiples secciones como Perfil, VideoMenu, CoinPath y Rankings & Chat.
Chat con IA: Interactúa con una inteligencia artificial para resolver dudas y recibir asistencia personalizada.
Sistema de Rankings: Visualiza el ranking de usuarios basado en su progreso y logros.
Lecciones Interactivas: Aprende sobre finanzas personales a través de lecciones estructuradas y problemas de QA.
Temas Personalizados: Interfaz amigable con temas personalizados que mejoran la experiencia del usuario.
🚀 Tecnologías Utilizadas
React Native: Framework para el desarrollo de aplicaciones móviles multiplataforma.
Expo: Herramienta que simplifica el desarrollo y despliegue de aplicaciones React Native.
React Navigation: Librería para manejar la navegación dentro de la aplicación.
TypeScript: Superset de JavaScript que añade tipado estático.
Hermes: Motor JavaScript optimizado para aplicaciones React Native.
Expo AV: Para manejar la reproducción de videos.
react-native-youtube-iframe: Integración de videos de YouTube dentro de la aplicación.
📂 Estructura del Proyecto
lua
Copiar código
BanorteGoApp/
├── assets/
│   ├── banorteLogoSinLetras.png
│   ├── LibroBlanco.png
│   ├── userBLanco.png
│   ├── iconPlayBlanco.png
│   ├── TrioPersonas.png
│   ├── maya.png
│   ├── ...
├── components/
│   ├── AppStack.js
│   ├── AuthContext.js
│   ├── AuthNavigator.js
│   ├── AuthStack.js
│   ├── BottomBar.js
│   ├── ChatWithAI.js
│   ├── CoinPath.js
│   ├── CoinPathStack.js
│   ├── ErrorBoundary.js
│   ├── LoginRegister.js
│   ├── Perfil.js
│   ├── QAProblems.js
│   ├── RankingList.js
│   ├── RankingsAndChat.js
│   ├── SeccionVideo.js
│   ├── TabNavigator.js
│   ├── TopBar.js
│   ├── VideosSeccion.js
│   ├── ...
├── App.js
├── package.json
├── tsconfig.json
├── babel.config.js
├── ...
🛠️ Instalación
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

1. Clonar el Repositorio
bash
Copiar código
git clone https://github.com/A01750817/HackathonBanorte2024.git
2. Navegar al Directorio del Proyecto
bash
Copiar código
cd HackathonBanorte2024
3. Instalar Dependencias
Asegúrate de tener Node.js y Expo CLI instalados.

bash
Copiar código
npm install
O si prefieres usar Yarn:

bash
Copiar código
yarn install
4. Configurar el Proyecto
Asegúrate de que todas las imágenes y assets necesarios están en la carpeta assets. Revisa que las rutas de importación sean correctas.

5. Iniciar el Servidor de Desarrollo
bash
Copiar código
expo start
Este comando abrirá una interfaz de usuario en tu navegador donde podrás ejecutar la aplicación en un emulador o dispositivo físico usando Expo Go.

🏃 Uso
Inicio de Sesión y Registro
Iniciar la Aplicación: Abre la aplicación en tu dispositivo o emulador.
Pantalla de Autenticación: Ingresa con tu correo electrónico y contraseña o usa la opción de inicio de sesión con Google.
Navegación Principal: Una vez autenticado, accede a las diferentes secciones mediante la barra de navegación inferior.
Navegación entre Secciones
Perfil: Gestiona tu información personal y configuración.
VideoMenu: Accede a videos educativos sobre finanzas.
CoinPath: Sigue tu progreso a través de módulos interactivos.
Rankings & Chat: Visualiza tu ranking y chatea con la IA para resolver dudas.
Interacción con la IA
Enviar Mensaje: Escribe tu consulta en el campo de texto y presiona "Enviar".
Recibir Respuesta: La IA responderá automáticamente después de un breve momento.
Visualización de Rankings
Accede a la sección "Ranking de Usuarios" para ver tu posición y la de otros usuarios basada en su progreso y logros dentro de la aplicación.

Lecciones y Problemas de QA
Participa en lecciones interactivas y resuelve problemas de preguntas y respuestas para mejorar tu conocimiento financiero.

📚 Documentación
AuthContext.js
Maneja la autenticación de usuarios mediante un contexto global.

javascript
Copiar código
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    authenticated: false,
    data: {}
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
ChatWithAI.js
Componente de chat que permite la interacción con una IA simulada.

javascript
Copiar código
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from "react-native";
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    aiMessageContainer: {
        backgroundColor: '#EB0029',
        alignSelf: 'flex-start',
        flexDirection: 'row',
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
        marginRight: 10,
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
Estructura de Navegación
App.js: Punto de entrada de la aplicación que maneja la autenticación y la navegación principal.
AppStack.js: Define el stack de navegación principal que incluye el TabNavigator y el TopBar.
TabNavigator.js: Configura la barra de navegación inferior con las diferentes secciones de la aplicación.
CoinPathStack.js: Maneja la navegación dentro de la sección CoinPath.
VideoMenu.js: Sección dedicada a la visualización de videos educativos.
RankingsAndChat.js: Combina la lista de rankings de usuarios y el chat con la IA.
Perfil.js: Gestión de la información y configuración del perfil del usuario.
📝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

Fork este repositorio.
Clona tu fork localmente.
Crea una rama nueva para tu feature o fix (git checkout -b feature/nueva-funcionalidad).
Haz commit de tus cambios (git commit -m 'Añade nueva funcionalidad').
Push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request en GitHub.
📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

📞 Contacto
Para cualquier consulta o comentario, por favor contacta a:

Ivan Pérez
Correo electrónico: ivan.perez@example.com
GitHub: A01750817
¡Gracias por usar BanorteGoApp! Esperamos que esta herramienta te ayude a gestionar tus finanzas personales de manera eficiente y efectiva.
