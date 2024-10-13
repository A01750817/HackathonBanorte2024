// components/BanorteLogo.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import logo_icon from '../assets/Logo_de_Banorte.svg.png';

export default function BanorteLogo() {
    return (
        <View style={styles.header}>
            <Image 
              source={logo_icon}
              style={styles.headerImage}
            />
            <Text style={styles.logo}>GO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20, 
      },
      headerImage: {
        height: 40,
        resizeMode: 'contain',
      },
      logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: -12,
      }
});
