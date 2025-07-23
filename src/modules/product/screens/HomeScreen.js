import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';
import '../../../locales/i18n';

export default function HomeScreen({ navigation }) {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('Price', { image, description });
  };

  return (
    <View style={styles.container}>
      <Button title={t('capturePhoto')} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.preview} />}
      <TextInput
        placeholder={t('describeProduct')}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title={t('checkPrice')} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  preview: { width: 200, height: 200, marginVertical: 10 },
  input: { borderWidth: 1, padding: 8, width: '100%', marginVertical: 10 },
});
