// components/videoMenu.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SeccionVideo from "./VideosSeccion";

const Stack = createStackNavigator();

/**
 * Componente funcional VideoMenu
 * Maneja la navegación para la sección de videos.
 */
export default function VideoMenu() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="SeccionVideo" 
                component={SeccionVideoWrapper} 
            />
            {/* Puedes agregar más pantallas de video aquí si es necesario */}
        </Stack.Navigator>
    );
}

/**
 * Wrapper para SeccionVideo para pasar las props necesarias
 */
function SeccionVideoWrapper() {
    return (
        <SeccionVideo 
            localVideo={require('../assets/VideoDemian.mp4')} // Video local
            youtubeVideoId={'ReylFgXb2g4'} // ID del video de YouTube
        />
    );
}
