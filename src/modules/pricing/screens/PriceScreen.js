import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { fetchAveragePrice } from '../../product/services/productApi';
import { useTranslation } from 'react-i18next';
import '../../../locales/i18n';

export default function PriceScreen({ route }) {
  const { t } = useTranslation();
  const { image, description } = route.params;
  const [average, setAverage] = useState(null);
  const [customPrice, setCustomPrice] = useState('');

  useEffect(() => {
    async function load() {
      const price = await fetchAveragePrice({ image, description });
      setAverage(price);
    }
    load();
  }, [image, description]);

  if (!average) {
    return (
      <View style={styles.container}>
        <Text>{t('loading')}</Text>
      </View>
    );
  }

  const urgentPrice = (average * 0.9).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('averagePrice')}: R$ {average.toFixed(2)}</Text>
      <Text style={styles.label}>{t('urgentPrice')}: R$ {urgentPrice}</Text>
      <TextInput
        placeholder={t('customPrice')}
        value={customPrice}
        onChangeText={setCustomPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title={t('confirm')} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  label: { fontSize: 18, marginVertical: 8 },
  input: { borderWidth: 1, padding: 8, width: '100%', marginVertical: 10 },
});
