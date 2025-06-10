import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options = {{ title: 'Encontrou nao'}} />
            <View style = { styles.container }>
                <Link href="/" style = { styles.button }>
                Voltar pra pagina principal
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#d4af37',
        padding: 12,
        backgroundColor: '#16213e',
        borderColor: '#f05454',
        borderWidth: 2,
        borderRadius: 8,
        overflow: 'hidden',
    },
});
