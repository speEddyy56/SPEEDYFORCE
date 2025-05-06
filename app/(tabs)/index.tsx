import { Text, View, StyleSheet } from "react-native";

import Button from '@/componentes/Button';
import ImageViewer from "@/componentes/ImageViewer";

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/dragao.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('voce nao selecionou a imagem.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      A palavra "dragão" vem do grego drákon (serpente gigante). Suas primeiras
      representações conhecidas são pinturas rupestres de 40 mil a.C. na Austrália.
      A lenda provavelmente surgiu quando povos antigos encontraram fósseis de
      dinossauros (como estegossauros e pterossauros) e ossos de baleia, imaginando
      criaturas místicas. Répteis como o dragão-de-komodo, jacarés e lagartos
      voadores também inspiraram os mitos ao redor do mundo.
      Ou seja: dragões são uma mistura de fósseis mal interpretados e animais reais exóticos.</Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label="Escolha a foto" onPress={pickImageAsync}/>
        <Button label="Use a foto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67b0c2',
    justifyContent:'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },

  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});