import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep';

export default function BuscaCEP() {
    const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>🔍 Consulta de CEP</Text>

            <TextInput
                style={styles.textInput}
                value={cep}
                onChangeText={setCep}
                placeholder="Digite o CEP"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
            />

            <View style={styles.buttonContainer}>
                <Button title="Buscar" onPress={buscarCEP} color="#d4af37" />
            </View>

            {endereco.logradouro && (
                <View style={styles.result}>
                    <Text style={styles.label}>📍 Rua: <Text style={styles.value}>{endereco.logradouro}</Text></Text>
                    <Text style={styles.label}>🏘️ Bairro: <Text style={styles.value}>{endereco.bairro}</Text></Text>
                    <Text style={styles.label}>🏙️ Cidade: <Text style={styles.value}>{endereco.localidade}</Text></Text>
                    <Text style={styles.label}>🚩 UF: <Text style={styles.value}>{endereco.uf}</Text></Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#d4af37',
        marginBottom: 25,
        textShadowColor: 'rgba(255, 215, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    textInput: {
        width: '80%',
        borderWidth: 2,
        borderColor: '#d4af37',
        padding: 12,
        marginVertical: 10,
        backgroundColor: '#16213e',
        color: '#e6e6e6',
        borderRadius: 8,
        fontSize: 16,
    },
    buttonContainer: {
        width: '80%',
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    result: {
        marginTop: 25,
        padding: 16,
        borderWidth: 2,
        borderColor: '#f05454',
        borderRadius: 8,
        backgroundColor: '#16213e',
        width: '80%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d4af37',
        marginVertical: 6,
    },
    value: {
        fontWeight: 'normal',
        color: '#e6e6e6',
    },
});
