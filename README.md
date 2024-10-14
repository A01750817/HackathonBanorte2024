# BanorteGoApp

**BanorteGoApp** es una aplicación móvil desarrollada para el Hackathon Banorte 2024, diseñada para facilitar la gestión financiera personal a través de una interfaz intuitiva y funcionalidades innovadoras como chat con inteligencia artificial, seguimiento de progresos mediante un sistema de rankings y lecciones interactivas.

## 📱 Características

- **Autenticación de Usuarios**: Inicio de sesión y registro seguro utilizando `AuthContext`.
- **Navegación Intuitiva**: Barra de navegación inferior personalizada con múltiples secciones como `Perfil`, `VideoMenu`, `CoinPath`, y `Rankings & Chat`.
- **Chat con IA**: Interactúa con una inteligencia artificial para resolver dudas y recibir asistencia personalizada.
- **Sistema de Rankings**: Visualiza el ranking de usuarios basado en su progreso y logros.
- **Lecciones Interactivas**: Aprende sobre finanzas personales a través de lecciones estructuradas y problemas de QA.
- **Temas Personalizados**: Interfaz amigable con temas personalizados que mejoran la experiencia del usuario.

## 🚀 Tecnologías Utilizadas

- **React Native**: Framework para el desarrollo de aplicaciones móviles multiplataforma.
- **Expo**: Herramienta que simplifica el desarrollo y despliegue de aplicaciones React Native.
- **React Navigation**: Librería para manejar la navegación dentro de la aplicación.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Hermes**: Motor JavaScript optimizado para aplicaciones React Native.
- **Expo AV**: Para manejar la reproducción de videos.
- **react-native-youtube-iframe**: Integración de videos de YouTube dentro de la aplicación.

## 📂 Estructura del Proyecto

```lua
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
```


## 🔍 Descripción de Módulos

- **App.js**: Punto de entrada de la aplicación que maneja la autenticación y la navegación principal.
- **components/AppStack.js**: Define la navegación principal con `TabNavigator` y un encabezado `TopBar`.
- **components/AuthContext.js**: Maneja la autenticación de usuarios mediante un contexto global que permite iniciar sesión y manejar el estado de autenticación.
- **components/AuthNavigator.js** y **components/AuthStack.js**: Configura la navegación para las pantallas de autenticación, como el inicio de sesión y el registro de usuario.
- **components/BottomBar.js**: Personaliza la barra de navegación inferior para acceder rápidamente a `Perfil`, `VideoMenu`, `CoinPath`, y `Rankings & Chat`.
- **components/ChatWithAI.js**: Interfaz de chat que permite la interacción con una IA para brindar asistencia al usuario.
- **components/CoinPath.js** y **components/CoinPathStack.js**: Representa el camino de aprendizaje del usuario en la aplicación, con una serie de módulos representados como íconos de monedas. Navega entre diferentes lecciones y problemas de finanzas.
- **components/LoginRegister.js**: Pantalla de inicio de sesión y registro de usuario con opciones de autenticación tradicional y mediante Google.
- **components/Perfil.js**: Sección de perfil de usuario que permite ver y editar información personal, acceder a configuraciones y cerrar sesión.
- **components/QAProblems.js**: Presenta lecciones interactivas de finanzas con preguntas y respuestas. Permite al usuario aprender mediante la resolución de problemas.
- **components/RankingList.js**: Muestra el ranking de usuarios basándose en su progreso y logros. Los datos de ranking se muestran en un formato de lista.
- **components/RankingsAndChat.js**: Combina el ranking de usuarios y el chat con la IA en una sola pantalla para una experiencia integrada.
- **components/SeccionVideo.js** y **components/videoMenu.js**: Sección para reproducir videos educativos sobre finanzas, utilizando videos locales y de YouTube para mejorar la comprensión del usuario.
- **components/TopBar.js**: Barra superior que incluye logotipos e íconos, diseñada para mostrar la información de progreso del usuario y acceso a otros módulos.

## 🛠️ Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/A01750817/HackathonBanorte2024.git

2. **Navegar al Directorio del Proyecto**
   ```
   cd HackathonBanorte2024
   ```
3. **Instalar Dependencias**

   Asegúrate de tener Node.js y Expo CLI instalados.
   Con npm:
   ```
   npm install

   ```
   O si prefieres usar Yarn:
   ```
   yarn install
   ```

4. **Configurar el Proyecto Asegúrate de que todas las imágenes y assets necesarios están en la carpeta assets. Revisa que las rutas de importación sean correctas.**
   	Iniciar el Servidor de Desarrollo
   ```
   expo start
   ```
   Este comando abrirá una interfaz de usuario en tu navegador donde podrás ejecutar la aplicación en un emulador o dispositivo físico usando Expo Go.

   📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 📞 Contacto
	Para cualquier consulta o comentario, por favor contacta a:

	Ivan Alexander Ramos 
	Correo electrónico: ivan_ramost@outlook.com
	GitHub: A01750817





