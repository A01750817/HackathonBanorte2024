// components/SeccionVideo.js

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Video } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function SeccionVideo({ localVideo, youtubeVideoId }) {
  return (
    <View style={styles.container}>
      {/* Texto de Introducción */}
      <Text style={styles.introText}>
        Antes de iniciar, te recomendamos que veas estos videos
      </Text>

      {/* Video Local */}
      {localVideo && (
        <Video
          source={localVideo}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          shouldPlay={false}
        />
      )}

      {/* Video de YouTube */}
      {youtubeVideoId && (
        <View style={styles.youtubeContainer}>
          <YoutubeIframe
            height={200}
            width={Dimensions.get('window').width * 0.9} // Ajusta el ancho según tus necesidades
            videoId={youtubeVideoId}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Fondo rojo
    marginTop: 20,
  },
  introText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  youtubeContainer: {
    marginBottom: 20,
  },
});
