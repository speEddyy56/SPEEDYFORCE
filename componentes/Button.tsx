import { StyleSheet, View, Pressable, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#104957', borderRadius: 18 }
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: '#0291b5' }]}
                    onPress={onPress}
                >
                    <FontAwesome name="picture-o" size={18} color="#380308" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#380308' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('voce aperto o botao')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 210,
        height: 55,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 14,
    },
});