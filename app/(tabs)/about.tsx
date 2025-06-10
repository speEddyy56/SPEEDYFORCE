import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/nordicos.jpg');

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esses dragões surgiram no período pré-viking. Dentre as variações dentro 
        daquela cultura, Jormungand era o mais temido. Ele tinha o aspecto de uma 
        serpente gigante. O mito conta que ele era criatura de Loki, e Odin teria 
        jogado a criatura no oceano de Midgard, onde cresceu de forma desproporcional, 
        sendo capaz de dar a volta na Terra e ainda encontrar a sua cauda.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1a1a2e',
    padding: 20,
  },

  text: {
    fontSize: 18,
    color: '#e6e6e6',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
    borderWidth: 2,
    borderColor: '#d4af37',
    backgroundColor: '#16213e',
    padding: 16,
    borderRadius: 8,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 380,
    height: 380,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#f05454',
  },
});
