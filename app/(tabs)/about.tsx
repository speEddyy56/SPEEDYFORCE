import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/nordicos.jpg');
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esses dragões surgiram no período pré-viking. Dentre as variações dentro 
      daquela cultura, Jormungand era o mais temido. Ele tinha o aspecto de uma 
      serpente gigante. O mito conta que ele era criatura de Loki, e Odin teria 
      jogado a criatura no oceano de Midgard, onde cresceu de forma desproporcional, 
      sendo capaz de dar a volta na Terra e ainda encontrar a sua cauda.</Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#67b0c2'
  },

  text: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#fff',
    textAlign: 'center',
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: 380,
    height: 380,
    borderRadius: 18,
  },
});
