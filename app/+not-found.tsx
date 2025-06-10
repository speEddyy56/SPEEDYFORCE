import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options = {{ title: 'Encontrou nao'}} />
            <View style = { styles.container }>
                <Link href="/" style = { styles.button }>
                Voltar pra pagina principal..
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67b0c2',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});



