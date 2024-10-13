// components/QAProblems.js

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SeccionVideo from './VideosSeccion'; // Importa SeccionVideo

// Importa tus íconos o imágenes
import check_icon from '../assets/Check.png';
import FuejoRojo from '../assets/rojofuiego.png';
import libroRojo from '../assets/libroRojo.png';
import sample5 from '../assets/sample-5s.mp4';

export default function QAProblems() {
    // Estado para rastrear la respuesta seleccionada
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showLessonComplete, setShowLessonComplete] = useState(false);
    const [showFinalView, setShowFinalView] = useState(false);
    const [showSecondRedBox, setShowSecondRedBox] = useState(false);

    // Definición de las respuestas con su correcta o incorrecta
    const answers = [
        { text: 'Respuesta 1', isCorrect: true },
        { text: 'Respuesta 2', isCorrect: false },
        { text: 'Respuesta 3', isCorrect: false },
    ];

    // Maneja la selección de una respuesta
    const handleAnswerPress = (index) => {
        setSelectedAnswer(index);
    };

    // Determina si la respuesta seleccionada es correcta
    const isSelectedCorrect = selectedAnswer !== null && answers[selectedAnswer].isCorrect;

    // Maneja el primer botón "Continuar"
    const handleFirstContinue = () => {
        setShowLessonComplete(true);
    };

    // Maneja el segundo botón "Continuar"
    const handleSecondContinue = () => {
        setShowLessonComplete(false);
        setShowFinalView(true);
    };

    // Maneja el botón "Empezar"
    const handleStart = () => {
        setShowFinalView(false);
        setShowSecondRedBox(true);
    };

    // Maneja el último botón "Continuar"
    const handleThirdContinue = () => {
        setShowSecondRedBox(false);
        // Aquí puedes agregar cualquier acción final que desees realizar, como navegar a otra pantalla
    };

    return (
        <View style={styles.outerContainer}>
            {/* Línea roja */}
            <View style={styles.redLine} />

            <View style={styles.container}>
                {/* Contenido inicial */}
                {!showLessonComplete && !showFinalView && !showSecondRedBox && (
                    <>
                        <Text style={styles.title}>Fundamentos de Finanzas Personales</Text>

                        <View style={styles.problemContainer}>
                            <Text style={styles.problemTitle}>Problema de la moneda actual</Text>
                        </View>

                        {/* Contenedor de botones */}
                        <View style={styles.buttonContainer}>
                            {answers.map((answer, index) => {
                                const isSelected = selectedAnswer === index;
                                
                                // Determina el estilo del botón basado en la selección y la correctitud
                                const buttonStyle = [
                                    styles.button,
                                    isSelected
                                        ? answer.isCorrect
                                            ? styles.buttonSelectedCorrect
                                            : styles.buttonSelectedIncorrect
                                        : answer.isCorrect
                                            ? styles.buttonUnselectedCorrect
                                            : styles.buttonUnselectedIncorrect
                                ];

                                // Selecciona el ícono basado en la correctitud de la respuesta
                                const icon = answer.isCorrect ? '✅' : '❌';

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={buttonStyle}
                                        onPress={() => handleAnswerPress(index)}
                                        disabled={selectedAnswer !== null} // Deshabilita botones después de seleccionar
                                    >
                                        <View style={styles.buttonContent}>
                                            <Text style={styles.icon}>{icon}</Text>
                                            <Text style={styles.buttonText}>{answer.text}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* Mostrar retroalimentación después de seleccionar una respuesta */}
                        {selectedAnswer !== null && (
                            <View style={styles.correctBox}>
                                <Image source={check_icon} style={styles.checkIcon} />
                                <Text style={styles.correctText}>{isSelectedCorrect ? "CORRECTA" : "INCORRECTA"}</Text>
                                <Text style={styles.messageText}>
                                    {isSelectedCorrect
                                        ? "¡Correcto! Los ingresos por alquiler de propiedades son ingresos pasivos porque no requieren trabajo continuo para obtenerlos."
                                        : "¡Incorrecto! Revisa los fundamentos de ingresos pasivos para más información."
                                    }
                                </Text>
                            </View>
                        )}

                        {/* Botón para continuar */}
                        {selectedAnswer !== null && (
                            <TouchableOpacity style={styles.continueButton} onPress={handleFirstContinue}>
                                <Text style={styles.continueButtonText}>Continuar</Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}

                {/* Vista de lección completa */}
                {showLessonComplete && !showFinalView && !showSecondRedBox && (
                    <>
                        {/* Texto "Lección completa" y Puntuación */}
                        <View style={styles.actualizacionPuntuacion}>
                            <Text style={styles.titleRed}>Lección completa</Text>
                        </View >
                        {/* Ícono de fuego rojo con número */}
                        <View style={styles.actualizacionPuntuacion}>
                            <Image 
                                source={FuejoRojo}
                                style={styles.iconFuego}
                            />
                            <Text style={styles.titlePuntuacion}>13</Text>
                        </View>

                        {/* Sección de alineación de puntuación */}
                        <View style={styles.alinearPuntuacion}>
                            <Text style={styles.title}>NIVEL ACTUAL: Finanzas Básicas</Text>
                            <View >
                                {/* Barra de carga */}  
                                <View style={styles.loadingBar}>
                                    <View style={{ backgroundColor: '#FF0000', height: '100%', width: '50%' , borderRadius: 10}} />
                                </View>
                            </View>
                            <Text style={styles.title}>NIVEL Próximo: Usuario Responsable</Text>
                        </View>
                        {/* Botón para continuar */}
                        <TouchableOpacity style={styles.continueButton} onPress={handleSecondContinue}>
                            <Text style={styles.continueButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </>
                )}

                {/* Vista final roja con botón "Empezar" */}
                {showFinalView && !showSecondRedBox && (
                    <>
                        <View style={styles.finalRedView}>
                            <Image source={libroRojo} style={styles.iconLibroFuego} />
                            <Text style={styles.PostTitle}>
                                En base a tus aprendizajes hemos creado este curso para ti
                            </Text>
                            {/* Botón "Empezar" */}
                            <TouchableOpacity style={styles.continueButtonRed} onPress={handleStart}>
                                <Text style={styles.continueButtonText}>Empezar</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {/* Nuevo cuadro rojo después de presionar "Empezar" */}
                {showSecondRedBox && (
                    <>
                        <SeccionVideo 
                            localVideo={sample5} // Video local
                            youtubeVideoId={'ReylFgXb2g4'} // ID del video de YouTube
                        />
                        {/* Último botón "Continuar" */}
                        <TouchableOpacity style={styles.continueButton} onPress={handleThirdContinue}>
                            <Text style={styles.continueButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
)};

    const styles = StyleSheet.create({
        // Contenedor externo
        outerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        // Línea roja
        redLine: {
            backgroundColor: '#FF0000',
            height: 5,
            width: '80%',
            borderRadius: 5,
        },
        // Contenedor principal
        container: {
            alignContent: 'center',
            width: '90%',
            padding: 20,
            backgroundColor: '#fff',
            marginBottom: 50,
        },
        // Título principal
        title: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
        },
        // Contenedor del problema
        problemContainer: {
            backgroundColor: '#D9D9D9',
            padding: 20,
            borderRadius: 10,
            width: '100%',
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        // Título del problema
        problemTitle: {
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingVertical: 10,
            width: '100%',
        },
        // Contenedor de botones
        buttonContainer: {
            borderRadius: 10,
            width: '100%',
            flexDirection: 'column',
        },
        // Botones de respuesta
        button: {
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: '100%',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 5,
            backgroundColor: '#fff',
            marginBottom: 10,
        },
        // Texto dentro de los botones
        buttonText: {
            fontSize: 16,
            color: '#000',
            textAlign: 'left',
            fontWeight: 'bold',
        },
        // Contenedor del ícono y texto en el botón
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        // Ícono en cada botón
        icon: {
            marginRight: 10,
            fontSize: 18,
        },
        // Botones seleccionados correctos
        buttonSelectedCorrect: {
            backgroundColor: '#4CAF50',
        },
        // Botones seleccionados incorrectos
        buttonSelectedIncorrect: {
            backgroundColor: '#F44336',
        },
        // Botones no seleccionados que son correctos
        buttonUnselectedCorrect: {
            borderColor: '#4CAF50',
        },
        // Botones no seleccionados que son incorrectos
        buttonUnselectedIncorrect: {
            borderColor: '#F44336',
        },
        // Caja de retroalimentación
        correctBox: {
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 10,
            padding: 15,
            backgroundColor: '#E0FFE0',
            marginTop: 20,
            alignItems: 'center',
        },
        checkIcon: {
            width: 50,
            height: 50,
            marginBottom: 10,
        },
        correctText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#4CAF50',
            marginBottom: 10,
        },
        messageText: {
            fontSize: 16,
            textAlign: 'center',
            color: '#000',
        },
        // Botón "Continuar"
        continueButton: {
            paddingVertical: 12,
            paddingHorizontal: 20,
            width: '100%',
            backgroundColor: '#2196F3',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
        },
        continueButtonText: {
            fontSize: 16,
            color: '#fff',
            fontWeight: 'bold',
        },
        // Ícono de fuego
        iconFuego: {
            width: 150,
            height: 150,
            marginRight: 10,
            resizeMode: 'contain',
        },
        // Actualización de puntuación
        actualizacionPuntuacion: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
        },
        titleRed: {
            fontSize: 22,
            color: '#FF0000',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        titlePuntuacion: {
            fontSize: 100,
            color: '#FF0000',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        // Alineación de puntuación
        alinearPuntuacion: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        loadingBar: {
            backgroundColor: '#D9D9D9',
            height: 25,
            width: 270,
            marginLeft: 20,
            borderRadius: 100,
            marginTop: 5,
            marginBottom: 15,
        },
        // Vista final roja
        finalRedView: {
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#FF0000',
            padding: 20,
        },
        iconLibroFuego: {
            width: 300,
            height: 300,
            resizeMode: 'contain',
        }, 
        PostTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20,
        },
        // Botón "Empezar"
        continueButtonRed: {
            paddingVertical: 12,
            paddingHorizontal: 20,
            width: '100%',
            backgroundColor: '#FF0000',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
        },
    });